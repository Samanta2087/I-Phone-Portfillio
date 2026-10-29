// Downloads the Iconify icons used by the site into src/icons/ so they ship with the bundle
// (no runtime API calls). Browse sets at https://icon-sets.iconify.design/ and add names here.
import { mkdir, writeFile } from 'node:fs/promises'

const sets = {
  solar: [
    'smartphone-linear', 'global-linear', 'code-linear', 'cpu-bolt-linear', 'play-circle-linear',
    'cart-large-2-linear', 'rocket-2-linear', 'pallete-2-linear', 'plug-circle-linear',
    'gamepad-linear', 'book-2-linear', 'music-notes-linear', 'hamburger-menu-linear',
    'close-linear', 'sun-2-linear', 'moon-linear', 'arrow-right-linear', 'arrow-right-up-linear',
    'alt-arrow-down-linear', 'home-2-linear', 'user-circle-linear',
    'widget-5-linear', 'clapperboard-play-linear', 'letter-linear', 'users-group-rounded-linear',
    'database-linear', 'heart-linear', 'heart-bold', 'share-linear', 'link-round-linear',
    'map-point-linear', 'moon-stars-linear', 'videocamera-record-linear', 'alt-arrow-right-linear', 'bell-linear', 'volume-loud-linear', 'volume-cross-linear',
    'arrow-left-linear', 'magnifer-linear', 'menu-dots-bold', 'add-circle-linear', 'chat-round-dots-linear', 'plain-linear', 'bookmark-linear', 'widget-4-linear', 'paperclip-linear', 'microphone-linear', 'smile-circle-linear', 'book-bookmark-linear', 'star-linear', 'eye-linear', 'lock-linear', 'check-read-linear', 'home-angle-2-linear', 'videocamera-linear', 'user-plus-linear', 'bell-bing-linear', 'compass-big-linear', 'home-smile-linear', 'users-group-two-rounded-linear', 'play-bold', 'arrow-up-linear', 'branching-paths-up-linear', 'copy-linear', 'restart-linear', 'stop-circle-linear', 'power-linear', 'layers-minimalistic-linear', 'compass-linear', 'check-circle-bold', 'flashlight-linear', 'camera-linear',
    'server-2-linear', 'server-square-linear', 'cloud-linear', 'shield-check-linear', 'refresh-circle-linear', 'folder-linear', 'routing-linear', 'programming-linear', 'chart-2-linear',
    // Premium Bold-Duotone & Bold variants
    'home-2-bold-duotone', 'user-circle-bold-duotone', 'moon-stars-bold-duotone',
    'widget-5-bold-duotone', 'clapperboard-play-bold-duotone', 'server-2-bold-duotone',
    'server-square-bold-duotone', 'users-group-rounded-bold-duotone', 'letter-bold-duotone',
    'cloud-bold-duotone', 'code-bold-duotone', 'cpu-bolt-bold-duotone', 'shield-check-bold-duotone',
    'database-bold-duotone', 'folder-bold-duotone', 'chat-round-dots-bold-duotone',
    'rocket-2-bold-duotone', 'global-bold-duotone', 'plug-circle-bold-duotone',
    'videocamera-record-bold-duotone', 'star-bold-duotone', 'star-bold', 'heart-bold-duotone',
    'share-bold-duotone', 'link-round-bold-duotone', 'map-point-bold-duotone',
    'sun-2-bold-duotone', 'moon-bold-duotone', 'volume-loud-bold-duotone', 'volume-cross-bold-duotone',
    'bell-bold-duotone', 'bell-bing-bold-duotone', 'magnifer-bold-duotone', 'compass-big-bold-duotone',
    'book-bookmark-bold-duotone', 'book-2-bold-duotone', 'check-circle-bold-duotone',
    'refresh-circle-bold-duotone', 'chart-2-bold-duotone', 'cart-large-2-bold-duotone',
    'pallete-2-bold-duotone', 'gamepad-bold-duotone', 'music-notes-bold-duotone',
    'arrow-up-bold-duotone', 'arrow-right-bold-duotone', 'arrow-right-up-bold-duotone',
    'alt-arrow-down-bold-duotone', 'alt-arrow-right-bold-duotone', 'flashlight-bold-duotone',
    'camera-bold-duotone', 'lock-bold-duotone', 'add-circle-bold-duotone', 'widget-4-bold-duotone',
    'layers-minimalistic-bold-duotone', 'play-circle-bold-duotone',
    'restart-bold-duotone', 'stop-circle-bold-duotone', 'power-bold-duotone', 'copy-bold-duotone',
    'eye-bold-duotone', 'smile-circle-bold-duotone', 'users-group-two-rounded-bold-duotone'
  ],
  'simple-icons': [
    'youtube', 'instagram', 'telegram', 'github', 'facebook', 'google', 'tailscale', 'ffmpeg', 'playwright', 'githubcopilot', 'cloudflare', 'linux', 'uptimekuma'
  ],
  logos: [
    'python', 'go', 'javascript', 'typescript-icon', 'html-5', 'css-3', 'react', 'fastapi-icon',
    'docker-icon', 'postgresql', 'redis', 'nginx', 'aws', 'ubuntu', 'prometheus', 'grafana', 'supabase-icon', 'git-icon'
  ],
}

await mkdir(new URL('../src/icons/', import.meta.url), { recursive: true })
for (const [prefix, icons] of Object.entries(sets)) {
  const res = await fetch(`https://api.iconify.design/${prefix}.json?icons=${icons.join(',')}`)
  const data = await res.json()
  if (data.not_found?.length) throw new Error(`${prefix}: not found: ${data.not_found.join(', ')}`)
  await writeFile(new URL(`../src/icons/${prefix}.json`, import.meta.url), JSON.stringify(data))
  console.log(prefix, Object.keys(data.icons).length, 'icons')
}
