import { Redis } from '@upstash/redis'

// GET  /api/stats            -> { views, likes }
// POST /api/stats {action}   -> updated { views, likes }  (action: view | like | unlike)
//
// Works with either Redis integration on Vercel:
//   • Vercel KV            -> KV_REST_API_URL / KV_REST_API_TOKEN
//   • Upstash integration  -> UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN
//   • custom prefix        -> STORAGE_URL / STORAGE_TOKEN
// If no credentials are present the endpoint returns 503 and the UI hides the counters.

const URL_KEYS = ['KV_REST_API_URL', 'UPSTASH_REDIS_REST_URL', 'STORAGE_URL', 'REDIS_REST_API_URL']
const TOKEN_KEYS = ['KV_REST_API_TOKEN', 'UPSTASH_REDIS_REST_TOKEN', 'STORAGE_TOKEN', 'REDIS_REST_API_TOKEN']

const pick = (names) => {
  for (const name of names) {
    const value = process.env[name]
    if (value) return value
  }
  return ''
}

const url = pick(URL_KEYS)
const token = pick(TOKEN_KEYS)
const redis = url && token ? new Redis({ url, token }) : null

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
  const [views, likes] = await redis.mget(KEY_VIEWS, KEY_LIKES)
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

  if (!redis) return send(res, 503, { error: 'stats unavailable' })

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
      await redis.incr(KEY_VIEWS)
    } else if (action === 'like') {
      await redis.incr(KEY_LIKES)
    } else if (action === 'unlike') {
      const current = Number(await redis.get(KEY_LIKES)) || 0
      if (current > 0) await redis.decr(KEY_LIKES)
    } else {
      return send(res, 400, { error: 'unknown action' })
    }

    return send(res, 200, await read())
  } catch {
    return send(res, 503, { error: 'stats unavailable' })
  }
}
