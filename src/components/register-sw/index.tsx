'use client';

import { useEffect } from 'react';

export default function RegisterSW() {
  useEffect(() => {
    // Check if the environment is production AND service workers are supported
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js', { scope: '/' }) // Register your service worker
        .then((registration) => {})
        .catch((error) => {
          console.error('Service Worker registration failed:', error);
        });
    } else if (process.env.NODE_ENV === 'development') {
      // Optional: Log a message in development mode to confirm it's being skipped

      // Optional: In development, you might want to unregister existing SWs
      // to avoid caching issues during development. Be careful with this in prod.
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistrations().then((registrations) => {
          for (const registration of registrations) {
            registration.unregister();
          }
        });
      }
    }
  }, []);

  return null;
}
