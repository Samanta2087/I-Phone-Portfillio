import { useEffect, useRef, useState } from 'react'
import { animate } from 'motion/react'
import { sm } from '../sm.jsx'
import { Icon } from './Icon.jsx'
import { LargeTitle, StaggerFadeUp } from './Type.jsx'
import { MapWidget } from './MapWidget.jsx'
import { DevEmoji } from './DevEmoji.jsx'
import { hobbies, reminders } from '../data.js'
import { playThrottled } from '../sfx.js'
import { useLanded } from '../useLanded.js'

// Counts up each time it scrolls into view, and resets when it leaves. It ticks like a
// slot counter as it climbs (pitch rising with the number) and dings when it lands.
export function CountUp({ to, suffix = '', quiet = false }) {
  const ref = useRef(null)
  const inView = useLanded(ref, { amount: 0.6 })
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView) {
      const t = setTimeout(() => setN(0), 300)
      return () => clearTimeout(t)
    }
    const steps = 18
    let lastStep = 0
    const controls = animate(0, to, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        setN(Math.round(v))
        const p = v / to
        const step = Math.floor(p * steps)
        if (!quiet && step > lastStep && step < steps) {
          lastStep = step
          playThrottled('tick', 45, { rate: 0.85 + p * 0.55 })
        }
      },
      onComplete: () => {
        if (!quiet) playThrottled('done', 400)
      },
    })
    return () => controls.stop()
  }, [inView, to, quiet])

  return (
    <span ref={ref}>
      {n.toLocaleString('en-US')}
      {suffix}
    </span>
  )
}

const rise = (i = 0) => ({
  initial: { opacity: 0, y: 40, scale: 0.94 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: false, amount: 0.25 },
  transition: { type: 'spring', stiffness: 110, damping: 20, mass: 0.9, delay: i * 0.07 },
})

// Profile card: the emoji character on the left; name and short bio on the right.
function ProfileWidget() {
  return (
    <sm.div className="card widget profile-widget" {...rise(0)}>
      <sm.div
        className="profile-avatar-wrap"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <img
          src={`${import.meta.env.BASE_URL}brand/samanta-avatar.webp`}
          alt="Samanta Mondal"
          className="profile-avatar-img"
          width="88"
          height="88"
          loading="eager"
        />
        <span className="profile-badge-dot" title="Available for work" />
      </sm.div>
      <div className="profile-text">
        <div className="profile-head">
          <h3 className="profile-name">Samanta Mondal</h3>
          <span className="profile-age">Backend Engineer</span>
        </div>
        <StaggerFadeUp
          className="profile-bio"
          text="Technology enthusiast and developer building practical software solutions, scalable backend systems, and modern web applications."
          mark="scalable backend systems"
          delay={0.2}
        />
      </div>
    </sm.div>
  )
}

// System Status widget: server uptime and health monitoring
function ViewsWidget() {
  const line = 'M0 80 C 35 78, 60 45, 95 42 S 145 28, 175 22 S 198 14, 206 10'
  return (
    <sm.div className="card widget views-widget" {...rise(2)}>
      <span className="widget-label">
        <Icon name="simple-icons:uptimekuma" size={13} /> Service Health
      </span>
      <strong className="big-number">
        99.9%
      </strong>
      <small className="up-tag">operational</small>
      <sm.div className="spark" aria-hidden="true" initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.5 }}>
        <sm.svg
          viewBox="0 0 214 100"
          preserveAspectRatio="none"
          variants={{
            hidden: { clipPath: 'inset(0 100% 0 0)' },
            show: { clipPath: 'inset(0 0% 0 0)', transition: { duration: 1.8, ease: [0.22, 1, 0.36, 1] } },
          }}
        >
          <path d={`${line} L206 100 L0 100 Z`} className="spark-area" />
          <path d={line} className="spark-line" />
        </sm.svg>
        <sm.span
          className="spark-dot"
          variants={{
            hidden: { scale: 0 },
            show: { scale: 1, transition: { delay: 1.7, type: 'spring' } },
          }}
        />
      </sm.div>
    </sm.div>
  )
}

function HobbiesWidget() {
  return (
    <sm.div className="card widget interests-widget" {...rise(3)}>
      <span className="widget-label">
        <Icon name="solar:server-2-bold-duotone" size={14} /> Core Interests
      </span>
      <div className="app-grid">
        {hobbies.map((it, i) => (
          <sm.span
            key={it.label}
            className="app"
            initial={{ opacity: 0, scale: 0.4 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ type: 'spring', stiffness: 300, damping: 16, delay: 0.1 + i * 0.05 }}
          >
            <i className="app-icon" style={{ '--c': it.color }}>
              <Icon name={it.icon} size={22} />
            </i>
            <small>{it.label}</small>
          </sm.span>
        ))}
      </div>
    </sm.div>
  )
}

// iOS Reminders: Key Highlights
function RemindersWidget() {
  return (
    <sm.div className="card widget reminders-widget" {...rise(4)}>
      <span className="widget-label">
        <Icon name="solar:check-circle-bold-duotone" size={14} /> Key Highlights
        <em>{reminders.length}</em>
      </span>
      <ul>
        {reminders.map((r, i) => (
          <li key={r}>
            <sm.span
              className="tick"
              initial={{ scale: 0.6, backgroundColor: 'rgba(120,130,150,0)' }}
              whileInView={{ scale: 1, backgroundColor: '#0a84ff' }}
              viewport={{ once: false }}
              landSound={{ name: 'select', delay: 800 + i * 550, vol: 0.8 }}
              transition={{ delay: 0.8 + i * 0.55, type: 'spring', stiffness: 300, damping: 14 }}
            >
              <Icon name="solar:check-circle-bold" size={20} />
            </sm.span>
            {r}
          </li>
        ))}
      </ul>
    </sm.div>
  )
}

// The About section as an iPhone home screen full of widgets.
export function HomeScreen() {
  return (
    <section id="about" className="section">
      <div className="container">
        <LargeTitle>About</LargeTitle>
        <div className="home-grid">
          <ProfileWidget />
          <MapWidget />
          <ViewsWidget />
          <HobbiesWidget />
          <RemindersWidget />
        </div>
      </div>
    </section>
  )
}
