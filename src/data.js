export const links = {
  github: 'https://github.com/Samanta2087',
  repos: 'https://github.com/Samanta2087?tab=repositories',
  instagram: 'https://www.instagram.com/samanta.18.25?rpxt=MTFsbzh1dzBpbjY3cw==',
  facebook: 'https://www.facebook.com/share/1CVEBMs5b4/',
  googleProfile: 'https://profile.google/@samanta.18.25',
  website: 'https://www.samantadev.in/',
  firstPortfolio: 'https://www.samantadev.in/',
  email: 'mailto:samantas6085@gmail.com',
  maps: 'https://www.google.com/maps/place/West+Bengal',
  formEndpoint: '',
}

export const nav = [
  { id: 'home', label: 'Home', icon: 'solar:home-2-bold-duotone' },
  { id: 'about', label: 'About', icon: 'solar:user-circle-bold-duotone' },
  { id: 'focus', label: 'Focus', icon: 'solar:moon-stars-bold-duotone' },
  { id: 'skills', label: 'Skills', icon: 'solar:widget-5-bold-duotone' },
  { id: 'projects', label: 'Projects', icon: 'solar:clapperboard-play-bold-duotone' },
  { id: 'channel', label: 'Systems', icon: 'solar:server-2-bold-duotone' },
  { id: 'social', label: 'Social', icon: 'solar:users-group-rounded-bold-duotone' },
  { id: 'contact', label: 'Contact', icon: 'solar:letter-bold-duotone' },
]

export const roles = [
  'Backend Engineer',
  'Developer',
  'Cloud & DevOps Enthusiast',
  'API Architect',
]

// iOS system colours for the small app-icon tiles
export const ios = {
  blue: '#0a84ff',
  green: '#30d158',
  orange: '#ff9f0a',
  pink: '#ff375f',
  purple: '#bf5af2',
  teal: '#40c8e0',
  red: '#ff453a',
  indigo: '#5e5ce6',
}

export const hobbies = [
  { icon: 'solar:server-2-bold-duotone', label: 'Servers', color: ios.blue },
  { icon: 'solar:code-bold-duotone', label: 'Coding', color: ios.green },
  { icon: 'solar:cpu-bolt-bold-duotone', label: 'AI Tools', color: ios.purple },
  { icon: 'solar:cloud-bold-duotone', label: 'Cloud', color: ios.teal },
  { icon: 'solar:shield-check-bold-duotone', label: 'Security', color: ios.orange },
]

// Focus areas, shown like iOS Focus / Settings rows
export const focus = [
  { icon: 'solar:server-2-bold-duotone', label: 'Backend development and API engineering', color: ios.blue },
  { icon: 'solar:global-bold-duotone', label: 'Full-stack web application development', color: ios.indigo },
  { icon: 'logos:python', label: 'Python programming and automation', color: ios.purple },
  { icon: 'solar:cloud-bold-duotone', label: 'Cloud infrastructure and Linux server administration', color: ios.teal },
  { icon: 'logos:docker-icon', label: 'Docker-based deployments and service management', color: ios.blue },
  { icon: 'solar:database-bold-duotone', label: 'Database architecture and optimization', color: ios.green },
  { icon: 'solar:folder-bold-duotone', label: 'Object storage and media-processing systems', color: ios.orange },
  { icon: 'solar:chat-round-dots-bold-duotone', label: 'Bot development and automation integrations', color: ios.blue },
  { icon: 'solar:rocket-2-bold-duotone', label: 'Website performance and reliability', color: ios.red },
  { icon: 'solar:cpu-bolt-bold-duotone', label: 'AI-powered development workflows', color: ios.pink },
  { icon: 'solar:shield-check-bold-duotone', label: 'Application security and infrastructure monitoring', color: ios.teal },
]

// Core Technical Stack & Focus Matrix (demonstrated hands-on skills)
export const levels = [
  { name: 'FastAPI & REST APIs', group: 'Backend', value: 94, color: ios.blue },
  { name: 'Python & Automation', group: 'Backend', value: 92, color: ios.blue },
  { name: 'Go Microservices', group: 'Systems', value: 82, color: ios.teal },
  { name: 'Docker & Compose', group: 'DevOps', value: 90, color: ios.indigo },
  { name: 'Linux / Ubuntu & Nginx', group: 'Infrastructure', value: 88, color: ios.orange },
  { name: 'PostgreSQL & Redis', group: 'Databases', value: 86, color: ios.green },
  { name: 'Cloudflare R2 & Storage', group: 'Cloud', value: 84, color: ios.purple },
]

export const reminders = [
  'Built Fyloxen: performance-conscious file management architecture',
  'Engineered Media Processing Bot with yt-dlp & FFmpeg pipeline',
  'Automated Linux production stack with Docker, Nginx & Let\'s Encrypt SSL',
  'Designed Cloudflare R2 & Redis streaming file conversion platform',
]

// Skill folders: tap to open. `apps` are shown as app icons, `notes` as short captions.
export const skills = [
  {
    title: 'Backend',
    apps: [
      { name: 'FastAPI', icon: 'logos:fastapi-icon' },
      { name: 'Python', icon: 'logos:python' },
      { name: 'Go', icon: 'logos:go' },
      { name: 'REST APIs', icon: 'solar:plug-circle-bold-duotone' },
      { name: 'Bot Automation', icon: 'solar:chat-round-dots-bold-duotone' },
      { name: 'Redis', icon: 'logos:redis' },
    ],
    notes: [
      ['FastAPI & REST APIs', 'High performance API endpoints, async request handling, validation'],
      ['Python & Go', 'Backend engineering, performance-oriented services, and scripting'],
      ['Bot & Automation', 'Automated workflows, background queues, user limits, and API handlers'],
      ['Auth & Caching', 'Authentication & authorization concepts, rate limiting, Redis caching'],
    ],
  },
  {
    title: 'DevOps',
    apps: [
      { name: 'Docker', icon: 'logos:docker-icon' },
      { name: 'Ubuntu', icon: 'logos:ubuntu' },
      { name: 'Nginx', icon: 'logos:nginx' },
      { name: 'AWS EC2', icon: 'logos:aws' },
      { name: 'Cloudflare', icon: 'simple-icons:cloudflare' },
      { name: 'Tailscale', icon: 'simple-icons:tailscale' },
      { name: 'Git', icon: 'logos:git-icon' },
    ],
    notes: [
      ['Docker & Containers', 'Docker, Docker Compose, multi-container deployments, volumes'],
      ['Linux Administration', 'Ubuntu VPS setup, system hardening, firewall & DNS troubleshooting'],
      ['Nginx & HTTPS', 'Nginx reverse-proxy configuration, SSL/TLS certificate management with Certbot'],
      ['Mesh & Security', 'Cloudflare security proxy, Tailscale mesh networking, Git workflows'],
    ],
  },
  {
    title: 'Storage',
    apps: [
      { name: 'PostgreSQL', icon: 'logos:postgresql' },
      { name: 'Redis', icon: 'logos:redis' },
      { name: 'Supabase', icon: 'logos:supabase-icon' },
      { name: 'Cloudflare R2', icon: 'simple-icons:cloudflare' },
      { name: 'SQL', icon: 'solar:database-bold-duotone' },
    ],
    notes: [
      ['PostgreSQL & SQL', 'Relational database architecture, queries, indexing, and data modeling'],
      ['Redis', 'In-memory key-value caching, message broker, rate limit counters'],
      ['Supabase', 'Cloud database, authentication integration, and real-time backend data'],
      ['Cloudflare R2', 'S3-compatible cloud object storage for media and file conversion jobs'],
    ],
  },
  {
    title: 'Frontend',
    apps: [
      { name: 'React', icon: 'logos:react' },
      { name: 'TypeScript', icon: 'logos:typescript-icon' },
      { name: 'JavaScript', icon: 'logos:javascript' },
      { name: 'HTML5', icon: 'logos:html-5' },
      { name: 'CSS3', icon: 'logos:css-3' },
    ],
    notes: [
      ['React & TypeScript', 'Modern responsive UI components, type safety, modular frontend design'],
      ['HTML5 & CSS3', 'Semantic markup, modern styling, flexbox/grid, accessible layouts'],
      ['AI-Assisted Frontend', 'Rapid interface prototyping, clean modern user experiences'],
    ],
  },
  {
    title: 'Monitoring',
    apps: [
      { name: 'Uptime Kuma', icon: 'simple-icons:uptimekuma' },
      { name: 'Prometheus', icon: 'logos:prometheus' },
      { name: 'Grafana', icon: 'logos:grafana' },
      { name: 'Reliability', icon: 'solar:shield-check-bold-duotone' },
    ],
    notes: [
      ['Uptime Kuma', 'Service health monitoring, uptime tracking, and endpoint status alerts'],
      ['Prometheus & Grafana', 'Time-series metric collection, system resource dashboards, alerts'],
      ['Reliability & Logging', 'Application logging, troubleshooting, disaster recovery, and backups'],
    ],
  },
  {
    title: 'Automation',
    apps: [
      { name: 'FFmpeg', icon: 'simple-icons:ffmpeg' },
      { name: 'Playwright', icon: 'simple-icons:playwright' },
      { name: 'Python', icon: 'logos:python' },
      { name: 'yt-dlp', icon: 'solar:videocamera-record-bold-duotone' },
    ],
    notes: [
      ['FFmpeg Processing', 'Video-to-audio extraction, transcode pipelines, format conversion'],
      ['Playwright', 'Automated web workflows, testing, headless browser automation'],
      ['Background Jobs', 'Asynchronous job queues, file conversion workflows, resource limits'],
    ],
  },
  {
    title: 'AI Tools',
    apps: [
      { name: 'Copilot', icon: 'simple-icons:githubcopilot' },
      { name: 'LLM APIs', icon: 'solar:cpu-bolt-bold-duotone' },
      { name: 'AI Workflows', icon: 'solar:rocket-2-bold-duotone' },
    ],
    notes: [
      ['AI-Assisted Coding', 'LLM-powered development workflows, prompt engineering, prototyping'],
      ['Developer Tools', 'GitHub Copilot, modern AI toolchains, efficient software engineering'],
    ],
  },
]

// 4 Selected Projects from Samanta Mondal
export const projects = [
  {
    name: 'Fyloxen',
    repo: 'Fyloxen-Backend',
    description: 'Lightweight, performance-conscious file management application focused on startup speed and privacy.',
    language: 'Go / Python',
    logo: 'logos:go',
    color: '#00add8',
    topics: ['file-management', 'performance', 'go', 'python'],
    stars: 12,
    forks: 3,
    url: 'https://github.com/Samanta2087/Fyloxen-Backend',
    category: 'Software Product',
    badge: 'Performance & Privacy',
  },
  {
    name: 'Media Processing Bot',
    repo: 'media-processing-bot',
    description: 'Automated media downloading and audio conversion workflows using yt-dlp and FFmpeg on Linux/AWS.',
    language: 'Python',
    logo: 'logos:python',
    color: '#3572a5',
    topics: ['media-processing', 'ffmpeg', 'yt-dlp', 'automation', 'aws'],
    stars: 16,
    forks: 5,
    url: 'https://github.com/Samanta2087',
    category: 'Backend & Automation',
    badge: 'Deployed Bot',
  },
  {
    name: 'Online File Conversion Platform',
    repo: 'file-converter-platform',
    description: 'Modern media & document conversion platform with streaming processing, FastAPI, React, Cloudflare R2, and Redis.',
    language: 'TypeScript',
    logo: 'logos:typescript-icon',
    color: '#3178c6',
    topics: ['fastapi', 'react', 'typescript', 'cloudflare-r2', 'redis'],
    stars: 10,
    forks: 2,
    url: 'https://github.com/Samanta2087',
    category: 'Web & Backend Systems',
    badge: 'In Development',
  },
  {
    name: 'Production Infrastructure & VPS',
    repo: 'VPS-Devops',
    description: 'Hands-on Linux server infrastructure with Docker Compose, Nginx reverse proxy, automated SSL/TLS, and Prometheus.',
    language: 'Docker',
    logo: 'logos:docker-icon',
    color: '#2496ed',
    topics: ['docker', 'nginx', 'ubuntu', 'ssl', 'prometheus'],
    stars: 14,
    forks: 4,
    url: 'https://github.com/Samanta2087/VPS-Devops',
    category: 'DevOps & Infrastructure',
    badge: 'Production Ready',
  },
]

export const moreProjects = {
  count: 40,
  line: 'Explore more repositories, backend engines and DevOps configurations on GitHub.',
}

export const social = [
  { name: 'GitHub', icon: 'simple-icons:github', to: 40, suffix: '+', unit: 'repositories', url: links.github, bg: '#24292f' },
  {
    name: 'Instagram',
    icon: 'simple-icons:instagram',
    text: '@samanta.18.25',
    url: links.instagram,
    bg: 'linear-gradient(45deg,#feda75,#fa7e1e,#d62976,#962fbf,#4f5bd5)',
  },
  { name: 'Email', icon: 'solar:letter-bold-duotone', text: 'samantas6085@gmail.com', url: links.email, bg: '#ea4335' },
  { name: 'Facebook', icon: 'simple-icons:facebook', text: 'Samanta Mondal', url: links.facebook, bg: '#1877f2' },
  { name: 'Google Profile', icon: 'simple-icons:google', text: '@samanta.18.25', url: links.googleProfile, bg: '#4285f4' },
  { name: 'First Portfolio', icon: 'solar:global-bold-duotone', text: 'samantadev.in', url: links.firstPortfolio, bg: ios.blue },
]

export const connect = [
  { label: 'Email', icon: 'solar:letter-bold-duotone', url: links.email },
  { label: 'GitHub', icon: 'simple-icons:github', url: links.github },
  { label: 'Instagram', icon: 'simple-icons:instagram', url: links.instagram },
  { label: 'Facebook', icon: 'simple-icons:facebook', url: links.facebook },
  { label: 'First Portfolio', icon: 'solar:global-bold-duotone', url: links.firstPortfolio },
]
