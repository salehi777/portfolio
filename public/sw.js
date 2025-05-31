const CACHE_VERSION = 'v1.0.4'; // Increment for each change to service worker logic
const CACHE_NAME = `portfolio-cache-${CACHE_VERSION}`;

// Assets to precache (focus on essential app shell and icons)
const precacheAssets = [
  '/', // The root HTML file, crucial for initial load
  '/index.html', // Vite's default entry point
  '/favicon/favicon.ico',
  '/favicon/android-chrome-192x192.png',
  '/favicon/android-chrome-512x512.png',
  '/manifest.json',
  // "/icons/maskable_icon.png",
  '/offline.html', // CRUCIAL: precache your dedicated offline page
  // Add any other truly static, non-hashed assets from your `public` directory:
  // e.g., '/images/logo.png', '/fonts/my-font.woff2'
];

// Install event: precache assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Pre-caching assets...');
        return Promise.all(
          precacheAssets.map((url) => {
            // It's good practice to log which assets fail to cache
            return cache.add(url).catch((error) => {
              console.error(
                `Service Worker: Failed to precache ${url}:`,
                error
              );
              // For non-critical assets, you might resolve the promise to allow install
              // For critical assets like '/offline.html', you might re-throw the error
              return Promise.resolve();
            });
          })
        );
      })
      .then(() => {
        console.log('Service Worker: Pre-caching complete. Skipping waiting.');
        self.skipWaiting(); // Force the waiting service worker to become active
      })
      .catch((error) => {
        console.error('Service Worker: Installation failed:', error);
      })
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
              console.log('Service Worker: Deleting old cache:', name);
              return caches.delete(name);
            }
          })
        );
      })
      .then(() => {
        console.log('Service Worker: Activation complete. Claiming clients.');
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

  // Determine if it's a static asset (JS, CSS, images, etc.) from our own origin
  // This will catch Vite-generated assets within the `dist` folder.
  // Note: For Vite, these often have hashes, so a simple `includes('/assets/')`
  // might be too broad if you have other non-cached '/assets/' paths.
  // A better approach for assets is generally precaching or runtime caching by type.
  const isAppAsset =
    requestUrl.origin === self.location.origin &&
    (requestUrl.pathname.endsWith('.js') ||
      requestUrl.pathname.endsWith('.css') ||
      requestUrl.pathname.match(
        /\.(png|jpe?g|gif|svg|webp|ico|json|woff2?|ttf|eot)$/i
      ));

  // --- Strategy for Navigation (HTML pages) ---
  // Network-First with Offline Fallback
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
          console.warn(
            'Service Worker: Navigation failed, falling back to cache/offline page:',
            error
          );
          return caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
              return cachedResponse;
            } else {
              // If not in cache either, serve the precached offline page
              return caches.match('/offline.html');
            }
          });
        })
    );
    return;
  }

  // --- Strategy for App Assets (JS, CSS, Images, etc. from our origin) ---
  // Cache-First, then Network for these assets. This assumes they are immutable (hashed).
  // If assets are not hashed and can change, consider a Stale-While-Revalidate strategy.
  if (isAppAsset) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          console.log(
            'Service Worker: Serving asset from cache:',
            requestUrl.pathname
          );
          return cachedResponse;
        }

        // If not in cache, go to network
        console.log(
          'Service Worker: Fetching asset from network:',
          requestUrl.pathname
        );
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
            console.error('Service Worker: Failed to fetch asset:', error);
            // Don't return offline.html for assets, just let them fail if not cached
            // You might want to return a placeholder image for failed image requests.
            return new Response(null, {
              status: 503,
              statusText: 'Service Unavailable (Offline)',
            });
          });
      })
    );
    return;
  }

  // --- Default strategy for all other requests (e.g., API calls, external resources) ---
  // Network-First, without a specific offline fallback. These will generally fail if offline.
  event.respondWith(
    fetch(event.request).catch((error) => {
      console.warn(
        'Service Worker: Network request failed for:',
        requestUrl.href,
        error
      );
      // You could add specific fallbacks for API calls here if needed,
      // e.g., return a cached placeholder for a specific API response.
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
