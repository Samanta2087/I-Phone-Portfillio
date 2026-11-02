import { useEffect, useState } from 'react'

import { sm } from '../sm.jsx'
import { Icon } from './Icon.jsx'
import { CountUp } from './HomeScreen.jsx'
import { links } from '../data.js'
import './screens.css'

const ext = { target: '_blank', rel: 'noopener noreferrer' }

function Logo() {
  return (
    <img
      className="logo-img"
      src={`${import.meta.env.BASE_URL}brand/logo.webp`}
      width="96"
      height="96"
      alt="Samanta Mondal logo"
      decoding="async"
    />
  )
}

function StatusBar() {
  return (
    <div className="sb" aria-hidden="true">
      <b>9:41</b>
      <span className="sb-icons">
        <i className="sb-signal" />
        <i className="sb-wifi" />
        <i className="sb-batt" />
      </span>
    </div>
  )
}

const rise = (i) => ({
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.2 },
  transition: { type: 'spring', stiffness: 120, damping: 20, delay: 0.1 + i * 0.07 },
})

/* ---------------------------------- GitHub ---------------------------------- */
export function GitHubScreen() {
  return (
    <article className="screen gh" aria-label="GitHub profile: Samanta2087">
      <StatusBar />
      <header className="app-bar gh-top">
        <Icon name="solar:hamburger-menu-linear" size={22} />
        <Icon name="simple-icons:github" size={26} />
        <Icon name="solar:bell-bold-duotone" size={22} />
      </header>

      <div className="gh-id">
        <span className="gh-avatar" style={{ overflow: 'hidden' }}>
          <img
            src={`${import.meta.env.BASE_URL}brand/samanta-avatar.webp`}
            alt="Samanta Mondal"
            style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }}
          />
        </span>
        <sm.div {...rise(0)}>
          <h3>Samanta2087</h3>
          <p className="muted gh-tags">
            <Icon name="solar:code-bold-duotone" size={13} /> Developer{' '}
            <Icon name="solar:server-2-bold-duotone" size={13} /> Backend Engineer
          </p>
        </sm.div>
      </div>

      <sm.p className="gh-bio" {...rise(1)}>
        Building scalable backend systems, APIs, cloud infrastructure, and practical software solutions.
      </sm.p>

      <sm.a href={links.github} className="gh-follow" data-sfx="pop" {...ext} {...rise(2)}>
        Follow on GitHub
      </sm.a>

      <sm.ul className="gh-meta" {...rise(3)}>
        <li>
          <Icon name="solar:book-bookmark-bold-duotone" size={16} />
          <b>
            <CountUp to={40} suffix="+" />
          </b>{' '}
          repositories
        </li>
        <li>
          <Icon name="solar:map-point-bold-duotone" size={16} /> West Bengal, India
        </li>
        <li>
          <Icon name="solar:shield-check-bold-duotone" size={16} /> Python • Go • Docker • FastAPI
        </li>
      </sm.ul>

      <sm.div className="gh-list" {...rise(4)}>
        <a href={links.repos} {...ext}>
          <Icon name="solar:code-bold-duotone" size={20} />
          <span>Fyloxen-Backend</span>
          <span style={{ fontSize: '0.68rem', color: '#00add8', fontWeight: 600 }}>Go</span>
        </a>
        <a href={links.repos} {...ext}>
          <Icon name="solar:server-2-bold-duotone" size={20} />
          <span>VPS-Devops</span>
          <span style={{ fontSize: '0.68rem', color: '#2496ed', fontWeight: 600 }}>Docker</span>
        </a>
        <a href={links.repos} {...ext}>
          <Icon name="solar:folder-bold-duotone" size={20} />
          <span>Fyloxen-Download-Backend</span>
          <span style={{ fontSize: '0.68rem', color: '#3572a5', fontWeight: 600 }}>Python</span>
        </a>
      </sm.div>

      <nav className="app-nav gh-nav" aria-hidden="true">
        <span className="on">
          <Icon name="solar:home-2-bold-duotone" size={22} />
          <small>Home</small>
        </span>
        <span>
          <Icon name="solar:bell-bold-duotone" size={22} />
          <small>Inbox</small>
        </span>
        <span>
          <Icon name="solar:compass-big-bold-duotone" size={22} />
          <small>Explore</small>
        </span>
        <span>
          <Icon name="solar:user-circle-bold-duotone" size={22} />
          <small>Profile</small>
        </span>
      </nav>
    </article>
  )
}

/* --------------------------------- Instagram --------------------------------- */
const highlights = [
  { img: `${import.meta.env.BASE_URL}social/ig-hl1.webp`, label: '🥰🥰🥰' },
  { img: `${import.meta.env.BASE_URL}social/ig-hl2.webp`, label: 'Achievement' },
  { icon: 'solar:server-2-bold-duotone', label: 'Backend' },
  { icon: 'logos:docker-icon', label: 'DevOps' },
]

const realPosts = [
  { img: `${import.meta.env.BASE_URL}social/ig-p1.webp`, pinned: true, views: '2,012', label: 'RCB Champions' },
  { img: `${import.meta.env.BASE_URL}social/ig-p2.webp`, pinned: true, label: 'Gaming Laptop' },
  { img: `${import.meta.env.BASE_URL}social/ig-p3.webp`, pinned: true, label: 'Samanta Mondal' },
  { img: `${import.meta.env.BASE_URL}social/ig-p4.webp`, label: 'Nature' },
  { img: `${import.meta.env.BASE_URL}social/ig-p5.webp`, label: 'Stage Celebration' },
  { img: `${import.meta.env.BASE_URL}social/ig-p6.webp`, label: 'Night Shot' },
]

export function InstagramScreen() {
  const [tab, setTab] = useState(0)
  return (
    <article className="screen ig" aria-label="Instagram profile: samanta.18.25">
      <StatusBar />
      <header className="app-bar ig-top">
        <span className="ig-user">
          <b>samanta.18.25</b>
          <Icon name="solar:alt-arrow-down-linear" size={14} />
        </span>
        <Icon name="solar:add-circle-bold-duotone" size={24} />
        <Icon name="solar:hamburger-menu-linear" size={24} />
      </header>

      <div className="ig-head">
        <div className="ig-avatar-wrap">
          <span className="ig-note">Obsessed with...</span>
          <span className="ig-ring">
            <span className="ig-avatar">
              <img
                src={`${import.meta.env.BASE_URL}social/ig-avatar.webp`}
                alt="Samanta Mondal"
                style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }}
              />
            </span>
          </span>
        </div>
        <div className="ig-stats">
          <span>
            <b>
              <Icon name="simple-icons:instagram" size={16} />
            </b>
            <small>personal profile</small>
          </span>
        </div>
      </div>

      <sm.div className="ig-bio" {...rise(0)}>
        <b style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>Samanta Mondal</b>
        <span className="muted" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.78rem' }}>
          ➤ Unstoppable
        </span>
        <a href={links.firstPortfolio} className="ig-link" {...ext} style={{ fontSize: '0.76rem' }}>
          <Icon name="solar:link-round-bold-duotone" size={13} /> samantadev.in and 2 more
        </a>
      </sm.div>

      <sm.div className="ig-actions" {...rise(1)}>
        <a href={links.instagram} className="ig-follow" data-sfx="pop" {...ext}>
          Follow
        </a>
        <a href={links.instagram} className="ig-msg" {...ext}>
          Message
        </a>
        <a href={links.facebook} className="ig-add" aria-label="Facebook profile" {...ext}>
          <Icon name="simple-icons:facebook" size={18} />
        </a>
      </sm.div>

      <div className="ig-hl" aria-hidden="true">
        {highlights.map((h, idx) => (
          <span key={idx}>
            <i>
              {h.img ? (
                <img
                  src={h.img}
                  alt={h.label}
                  style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }}
                />
              ) : (
                <Icon name={h.icon} size={22} />
              )}
            </i>
            <small>{h.label}</small>
          </span>
        ))}
      </div>

      <div className="ig-tabs" role="tablist" aria-label="Profile tabs">
        {['solar:widget-4-bold-duotone', 'solar:clapperboard-play-bold-duotone', 'solar:user-circle-bold-duotone'].map((ic, i) => (
          <span key={ic} role="tab" data-sfx="select" aria-selected={tab === i} className={tab === i ? 'on' : ''} onClick={() => setTab(i)}>
            <Icon name={ic} size={22} />
          </span>
        ))}
      </div>

      <div className="ig-grid" aria-hidden="true">
        {realPosts.map((post, i) => (
          <sm.div
            key={i}
            className="ig-post-tile"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1 + i * 0.04, type: 'spring', stiffness: 180, damping: 18 }}
          >
            <img src={post.img} alt={post.label || `Instagram post ${i + 1}`} loading="lazy" />
            {post.pinned && <span className="ig-pin">📌</span>}
            {post.views && (
              <span className="ig-views">
                <Icon name="solar:eye-bold" size={11} /> {post.views}
              </span>
            )}
          </sm.div>
        ))}
      </div>

      <nav className="app-nav ig-nav" aria-hidden="true">
        <Icon name="solar:home-2-bold-duotone" size={24} />
        <Icon name="solar:magnifer-bold-duotone" size={24} />
        <Icon name="solar:add-circle-bold-duotone" size={24} />
        <Icon name="solar:clapperboard-play-bold-duotone" size={24} />
        <span className="ig-me">
          <img
            src={`${import.meta.env.BASE_URL}social/ig-avatar.webp`}
            alt="Samanta"
          />
        </span>
      </nav>
    </article>
  )
}

/* --------------------------------- DevOps & Infrastructure --------------------------------- */
export function DevOpsScreen() {
  const [gh, setGh] = useState(null)
  useEffect(() => {
    let alive = true
    const base = 'https://api.github.com/users/Samanta2087'
    Promise.all([
      fetch(base).then((r) => (r.ok ? r.json() : null)),
      fetch(`${base}/repos?per_page=100&sort=pushed`).then((r) => (r.ok ? r.json() : [])),
    ])
      .then(([user, repos]) => {
        if (!alive) return
        setGh({ user, repos: Array.isArray(repos) ? repos.slice(0, 4) : [] })
      })
      .catch(() => {})
    return () => {
      alive = false
    }
  }, [])

  const live = Boolean(gh && gh.user)
  const num = (n) => (typeof n === 'number' ? n.toLocaleString('en-US') : '—')
  const when = (iso) => {
    if (!iso) return '—'
    const mins = Math.max(0, Math.round((Date.now() - new Date(iso).getTime()) / 60000))
    if (mins < 60) return `${mins}m ago`
    const hours = Math.round(mins / 60)
    if (hours < 24) return `${hours}h ago`
    return `${Math.round(hours / 24)}d ago`
  }

  return (
    <article className="screen" style={{ background: 'var(--s-bg)' }} aria-label="GitHub activity and public projects">
      <StatusBar />
      <header className="app-bar" style={{ borderBottom: '1px solid var(--s-line)' }}>
        <Icon name="simple-icons:github" size={20} />
        <b style={{ fontSize: '0.9rem' }}>github.com/Samanta2087</b>
        <span className="srv-status-tag">
          <i /> {live ? 'LIVE' : 'SYNC'}
        </span>
      </header>

      <div className="srv-head">
        <div>
          <h3 style={{ margin: 0, fontSize: '1rem' }}>GitHub Activity</h3>
          <small className="muted">Fetched live from the public GitHub API</small>
        </div>
        <span style={{ fontSize: '0.74rem', color: 'var(--s-sub)', fontWeight: 600 }}>
          {live ? `updated ${when(gh.user.updated_at)}` : 'loading…'}
        </span>
      </div>

      <div className="srv-stats-grid">
        <div className="srv-stat-box">
          <small>Public Repos</small>
          <b style={{ color: '#0a84ff' }}>{live ? num(gh.user.public_repos) : '—'}</b>
        </div>
        <div className="srv-stat-box">
          <small>Followers</small>
          <b style={{ color: '#30d158' }}>{live ? num(gh.user.followers) : '—'}</b>
        </div>
        <div className="srv-stat-box">
          <small>Following</small>
          <b style={{ color: '#bf5af2' }}>{live ? num(gh.user.following) : '—'}</b>
        </div>
        <div className="srv-stat-box">
          <small>Last Update</small>
          <b style={{ color: '#ff9f0a' }}>{live ? when(gh.user.updated_at) : '—'}</b>
        </div>
      </div>

      <div style={{ padding: '6px 14px 2px', fontSize: '0.74rem', fontWeight: 600, color: 'var(--s-sub)' }}>
        RECENT REPOSITORIES
      </div>

      <div className="srv-container-list">
        {gh && gh.repos.length > 0 ? (
          gh.repos.map((repo) => (
            <div className="srv-row" key={repo.id}>
              <div className="srv-row-left">
                <Icon name="solar:folder-with-files-bold-duotone" size={16} />
                <span>{repo.name}</span>
              </div>
              <span className="srv-pill">{repo.language || (repo.private ? 'Private' : 'Public')}</span>
            </div>
          ))
        ) : (
          <div className="srv-row">
            <div className="srv-row-left">
              <Icon name="solar:refresh-circle-bold-duotone" size={16} />
              <span>{live ? 'No public repositories' : 'Loading repositories…'}</span>
            </div>
            <span className="srv-pill">—</span>
          </div>
        )}
      </div>

      <a
        href="https://github.com/Samanta2087?tab=repositories"
        className="yt-sub"
        style={{ margin: '10px 14px 6px', height: 34, fontSize: '0.78rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}
        data-sfx="pop"
        {...ext}
      >
        <Icon name="simple-icons:github" size={15} /> View GitHub Profile
      </a>

      <nav className="app-nav" style={{ marginTop: 'auto', paddingBottom: 16 }} aria-hidden="true">
        <span className="on">
          <Icon name="solar:code-square-bold-duotone" size={20} />
          <small>Repos</small>
        </span>
        <span>
          <Icon name="solar:git-commit-bold-duotone" size={20} />
          <small>Commits</small>
        </span>
        <span>
          <Icon name="simple-icons:github" size={20} />
          <small>GitHub</small>
        </span>
        <span>
          <Icon name="solar:shield-check-bold-duotone" size={20} />
          <small>Public</small>
        </span>
      </nav>
    </article>
  )
}

/* --------------------------------- Fyloxen Product & Platform --------------------------------- */
export function FyloxenScreen() {
  return (
    <article className="screen" style={{ background: 'var(--s-bg)' }} aria-label="Fyloxen File Manager">
      <StatusBar />
      <header className="app-bar" style={{ borderBottom: '1px solid var(--s-line)' }}>
        <Icon name="logos:go" size={22} />
        <b style={{ fontSize: '0.9rem' }}>Fyloxen Platform</b>
        <Icon name="simple-icons:cloudflare" size={20} />
      </header>

      <div style={{ padding: '12px 16px 8px' }}>
        <span style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent)', fontWeight: 700 }}>
          High Performance Engine
        </span>
        <h3 style={{ margin: '2px 0 4px', fontSize: '1.05rem' }}>Lightweight File Manager</h3>
        <p className="muted" style={{ fontSize: '0.76rem' }}>
          Startup optimization, privacy-conscious file processing, and streaming backend conversion.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8, padding: '4px 14px' }}>
        <div className="srv-stat-box">
          <Icon name="solar:rocket-2-bold-duotone" size={16} />
          <b style={{ marginTop: 4 }}>Fast Startup</b>
          <small>Optimized runtime</small>
        </div>
        <div className="srv-stat-box">
          <Icon name="solar:shield-check-bold-duotone" size={16} />
          <b style={{ marginTop: 4 }}>Privacy First</b>
          <small>No telemetry tracking</small>
        </div>
        <div className="srv-stat-box">
          <Icon name="simple-icons:cloudflare" size={16} />
          <b style={{ marginTop: 4 }}>Cloudflare R2</b>
          <small>S3 Object Storage</small>
        </div>
        <div className="srv-stat-box">
          <Icon name="logos:redis" size={16} />
          <b style={{ marginTop: 4 }}>Redis Queues</b>
          <small>Asynchronous jobs</small>
        </div>
      </div>

      <div style={{ margin: '10px 14px 4px', padding: 10, borderRadius: 12, background: 'var(--s-chip)', border: '1px solid var(--s-line)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
          <b style={{ fontSize: '0.76rem' }}>Conversion Pipeline</b>
          <span style={{ fontSize: '0.66rem', color: '#30d158', fontWeight: 600 }}>Ready</span>
        </div>
        <div style={{ fontSize: '0.72rem', color: 'var(--s-sub)' }}>
          FFmpeg audio extraction • Video transcode • Image format optimization • PDF utilities
        </div>
      </div>

      <a
        href="https://github.com/Samanta2087/Fyloxen-Backend"
        className="yt-sub"
        style={{ margin: '8px 14px 6px', height: 34, fontSize: '0.78rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}
        data-sfx="pop"
        {...ext}
      >
        <Icon name="simple-icons:github" size={15} /> Explore Fyloxen on GitHub
      </a>

      <nav className="app-nav" style={{ marginTop: 'auto', paddingBottom: 16 }} aria-hidden="true">
        <span className="on">
          <Icon name="solar:folder-bold-duotone" size={20} />
          <small>Files</small>
        </span>
        <span>
          <Icon name="solar:refresh-circle-bold-duotone" size={20} />
          <small>Convert</small>
        </span>
        <span>
          <Icon name="solar:cloud-bold-duotone" size={20} />
          <small>Storage</small>
        </span>
        <span>
          <Icon name="solar:widget-5-bold-duotone" size={20} />
          <small>Queues</small>
        </span>
      </nav>
    </article>
  )
}
