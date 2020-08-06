importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');
 
if (workbox){
 
    const revision = '1';
    workbox.precaching.precacheAndRoute([
        { url: '/', revision },
        { url: '/detail.html', revision },
        { url: '/index.html', revision },
        { url: '/nav.html', revision },
        { url: '/manifest.json', revision },
        { url: '/pages/clubs.html', revision },
        { url: '/pages/favorite-clubs.html', revision },
        { url: '/pages/home.html', revision },
        { url: '/pages/standings.html', revision },
        { url: '/js/api.js', revision },
        { url: '/js/app.js', revision },
        { url: '/js/db.js', revision },
        { url: '/js/detail.js', revision },
        { url: '/js/idb.js', revision },
        { url: '/js/jquery.min.js', revision },
        { url: '/js/main.js', revision },
        { url: '/js/materialize.min.js', revision },
        { url: '/js/nav.js', revision },
        { url: '/js/sweetalert2.all.min.js', revision },
        { url: '/js/components/clubs.js', revision },
        { url: '/js/components/details.js', revision },
        { url: '/js/components/favClubs.js', revision },
        { url: '/js/components/matches.js', revision },
        { url: '/js/components/standings.js', revision },
        { url: '/img/Icon-32.png', revision },
        { url: '/img/Icon-180.png', revision },
        { url: '/img/Icon-192.png', revision },
        { url: '/img/Icon-512.png', revision },
        { url: '/css/materialize.min.css', revision },
        { url: '/css/sweetalert2.min.css', revision },
        { url: '/css/style.css', revision }
    ], {
      ignoreURLParametersMatching: [/.*/]
    });
 
    workbox.routing.registerRoute(
        new RegExp('https://api.football-data.org/v2/'),
        new workbox.strategies.StaleWhileRevalidate()
    );
 
    workbox.routing.registerRoute(
        new RegExp('/pages/'),
        new workbox.strategies.StaleWhileRevalidate({
            cacheName: 'pages',
        })
    );
 
    workbox.routing.registerRoute(
        /.*(?:png|gif|jpg|jpeg|svg)$/,
        new workbox.strategies.CacheFirst({
            cacheName: 'image',
            plugins: [
                new workbox.cacheableResponse.Plugin({
                    statuses: [0, 200]
                }),
                new workbox.expiration.Plugin({
                    maxEntries: 100,
                    maxAgeSeconds: 30 * 24 * 60 * 60,
                }),
            ]
        })
    );
 
    // Caching Google Fonts
    workbox.routing.registerRoute(
      /.*(?:googleapis|gstatic)\.com/,
      workbox.strategies.staleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
    })
      );

    workbox.routing.registerRoute(
      /\.(?:js|css)$/,
      new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'static-resources',
      })
    );
} else {
  console.log(`Workbox gagal dimuat`);
}
 
self.addEventListener('push', function (event) {
  let body;
  if (event.data) {
    body = event.data.text();
  } else {
    body = 'Push message no payload';
  }
  const options = {
    body: body,
    icon: 'img/Icon-512.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    }
  };
  event.waitUntil(
    self.registration.showNotification('Push Notification', options)
  );
});
