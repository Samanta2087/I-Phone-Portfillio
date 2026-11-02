import { kv } from '@vercel/kv'

// GET  /api/stats            -> { views, likes }
// POST /api/stats {action}   -> updated { views, likes }  (action: view | like | unlike)
//
// Vercel deployment: counters live in Vercel KV / Upstash Redis.
// Required env vars (Vercel → Storage → KV, or Upstash integration):
//   KV_REST_API_URL, KV_REST_API_TOKEN
// Without them the endpoint returns 503 and the UI simply hides the counters.

const KEY_VIEWS = 'portfolio:views'
const KEY_LIKES = 'portfolio:likes'

const send = (res, status, body) => {
  res.statusCode = status
  res.setHeader('content-type', 'application/json')
  res.setHeader('cache-control', 'no-store')
  res.setHeader('access-control-allow-origin', '*')
  res.setHeader('access-control-allow-methods', 'GET, POST, OPTIONS')
  res.setHeader('access-control-allow-headers', 'content-type')
  res.end(JSON.stringify(body))
}

const read = async () => {
  const [views, likes] = await kv.mget(KEY_VIEWS, KEY_LIKES)
  return { views: Number(views) || 0, likes: Number(likes) || 0 }
}

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.statusCode = 204
    res.setHeader('access-control-allow-origin', '*')
    res.setHeader('access-control-allow-methods', 'GET, POST, OPTIONS')
    res.setHeader('access-control-allow-headers', 'content-type')
    return res.end()
  }

  try {
    if (req.method === 'GET') return send(res, 200, await read())
    if (req.method !== 'POST') return send(res, 405, { error: 'method not allowed' })

    let body = req.body
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body)
      } catch {
        return send(res, 400, { error: 'bad request' })
      }
    }
    const action = body?.action

    if (action === 'view') {
      await kv.incr(KEY_VIEWS)
    } else if (action === 'like') {
      await kv.incr(KEY_LIKES)
    } else if (action === 'unlike') {
      const current = Number(await kv.get(KEY_LIKES)) || 0
      if (current > 0) await kv.decr(KEY_LIKES)
    } else {
      return send(res, 400, { error: 'unknown action' })
    }

    return send(res, 200, await read())
  } catch (err) {
    // KV not configured or temporarily unavailable — the client hides the widget.
    return send(res, 503, { error: 'stats unavailable' })
  }
}
