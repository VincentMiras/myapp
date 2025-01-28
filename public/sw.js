self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('le_cache')
        .then((cache) => {
          return cache.addAll([
            './',
            'offline.html',
            'stylesheets/offline.css',
            'images/a.jpg',
            'images/b.jpg',
            'images/c.jpg',
            'images/d.jpg'
         ]);
        })
        .then(() => {
          return self.skipWaiting();
        })
    );
  });
  
  // fetch event
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  