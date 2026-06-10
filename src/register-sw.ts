if ('serviceWorker' in navigator) {
  if (import.meta.env.PROD) {
    // Production: register service worker
    window.addEventListener('load', () =>
      navigator.serviceWorker
        .register('/sw.js')
        .then(() => {})
        .catch((err) =>
          console.error('Service Worker registration failed:', err),
        ),
    )
  } else {
    // Development: unregister service worker
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      for (const reg of registrations) {
        reg
          .unregister()
          .then(() => console.log('Service Worker unregistered (dev mode)'))
      }
    })
  }
}
