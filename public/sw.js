const CACHE_VERSION = 'v1.0.3'; // Increment for each change to service worker logic
const CACHE_NAME = `portfolio-cache-${CACHE_VERSION}`;

// Assets to precache (focus on essential app shell and icons)
const precacheAssets = [
  // '/' is crucial to be precached for initial load, but for offline, we'll try network first
  '/favicon/favicon.ico',
  '/favicon/android-chrome-192x192.png',
  '/favicon/android-chrome-512x512.png',
  '/manifest.json',
  // "/icons/maskable_icon.png",
  '/offline.html', // CRUCIAL: precache your dedicated offline page
  // Add any other truly static, non-hashed assets from your public directory
  // e.g., '/images/logo.png', '/styles/my-global.css' (if not bundled by Next.js)
];

// Install event: precache assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        return Promise.all(
          precacheAssets.map((url) => {
            return cache.add(url).catch((error) => {
              // Crucial: If '/offline.html' fails, the install might be problematic.
              // For other assets, you might tolerate a failure and log it.
              return Promise.resolve(); // Allow other successful precaches to continue
            });
          })
        );
      })
      .then(() => {
        self.skipWaiting(); // Force the waiting service worker to become active
      })
      .catch((error) => {})
  );
});

// Activate event: clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((name) => {
            if (name !== CACHE_NAME) {
              return caches.delete(name);
            }
          })
        );
      })
      .then(() => {
        self.clients.claim(); // Ensure the service worker claims clients immediately
      })
  );
});

// Fetch event: Implement caching strategies
self.addEventListener('fetch', (event) => {
  // Only handle GET requests and exclude Chrome extensions
  if (
    event.request.method !== 'GET' ||
    event.request.url.startsWith('chrome-extension://')
  ) {
    return;
  }

  const requestUrl = new URL(event.request.url);
  const isDocument =
    event.request.mode === 'navigate' ||
    event.request.destination === 'document';
  const isNextAsset =
    requestUrl.pathname.includes('/_next/static/') ||
    requestUrl.pathname.includes('/_next/image');

  // Strategy for Navigation (HTML pages) and Next.js assets:
  // For navigation requests: Network-First with Offline Fallback
  // For Next.js assets: Cache-First, then Network
  if (isDocument) {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          // If network is available and response is OK, cache it and return
          if (
            networkResponse.ok &&
            requestUrl.origin === self.location.origin
          ) {
            const clonedResponse = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, clonedResponse);
            });
          }
          return networkResponse;
        })
        .catch((error) => {
          // Network failed (likely offline). Try to serve from cache first.

          return caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
              return cachedResponse;
            } else {
              // If not in cache either, serve the offline page

              return caches.match('/offline.html');
            }
          });
        })
    );
    return;
  }

  // Strategy for Next.js static assets (JS, CSS, images bundled by Next.js):
  // Cache-First, then Network, with no specific offline fallback (will just fail if not cached)
  if (isNextAsset) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }

        // If not in cache, go to network
        return fetch(event.request)
          .then((networkResponse) => {
            if (
              networkResponse.ok &&
              requestUrl.origin === self.location.origin
            ) {
              const clonedResponse = networkResponse.clone();
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, clonedResponse);
              });
            }
            return networkResponse;
          })
          .catch((error) => {
            // Don't return offline.html for assets, just let them fail if not cached
            return new Response(null, {
              status: 503,
              statusText: 'Service Unavailable (Offline)',
            });
          });
      })
    );
    return;
  }

  // Default strategy for all other requests (e.g., API calls, external resources):
  // Network-First, then Cache (optional, only if needed for specific routes)
  // For most APIs, you want network-first and if offline, they just fail.
  event.respondWith(
    fetch(event.request).catch((error) => {
      // You could add specific fallbacks for API calls here if needed,
      // e.g., return a cached placeholder for a specific API.
      return new Response(null, {
        status: 503,
        statusText: 'Service Unavailable (Offline)',
      });
    })
  );
});

// Optional: Listen for 'message' events from the page to update the service worker
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
