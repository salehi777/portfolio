const CACHE_NAME = 'app-cache-v1.0.0'
const OFFLINE_URL = '/offline.html'

// Static files that don’t change often
const STATIC_ASSETS = [
  OFFLINE_URL,
  '/manifest.webmanifest',
  '/pwa-assets/apple-icon-180.png',
  '/pwa-assets/favicon-196.png',
  '/pwa-assets/manifest-icon-192.maskable.png',
  '/pwa-assets/manifest-icon-512.maskable.png',
]

// Install event - cache static files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS))
  )
  self.skipWaiting()
})

// Activate event - cleanup old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key)
          }
        })
      )
    )
  )
  self.clients.claim()
})

// Fetch event
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return

  const requestURL = new URL(event.request.url)

  // 1. Handle navigation requests (HTML pages)
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(() => caches.match(OFFLINE_URL))
    )
    return
  }

  // 2. Cache-first for Vite hashed assets (e.g. /assets/*.js, /assets/*.css)
  if (
    requestURL.pathname.startsWith('/assets/') &&
    (requestURL.pathname.endsWith('.js') ||
      requestURL.pathname.endsWith('.css'))
  ) {
    event.respondWith(
      caches.match(event.request).then((cached) => {
        if (cached) return cached
        return fetch(event.request).then((response) => {
          const clone = response.clone()
          caches
            .open(CACHE_NAME)
            .then((cache) => cache.put(event.request, clone))
          return response
        })
      })
    )
    return
  }

  // 3. Cache-first for static assets (icons, manifest, etc.)
  if (STATIC_ASSETS.includes(requestURL.pathname)) {
    event.respondWith(
      caches
        .match(event.request)
        .then((cached) => cached || fetch(event.request))
    )
    return
  }

  // 4. Default: try network, fallback to cache
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  )
})
