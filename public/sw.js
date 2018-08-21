
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('housepoints').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.php',
        '/css/app.css',
        '/js/app.js',
        '/js/onsenui.js'
      ]);
    })
  );
 });

self.addEventListener('push', function(e) {


});

self.addEventListener('notificationclick', function (e) {

});

self.addEventListener('fetch', function(e){

});