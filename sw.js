const version = "1.4.2";
const cacheName = `web142-Saiful-${version}`;
var appShellFiles = [
		`index.php`,
		`assets/js/main.min.js`,
		`manifest.json`,
		`app/home.html`,
		`app/profile.html`,
        `assets/css/style.css`,
		`assets/img/foto.jpg`,
		`assets/img/fb.svg`,
		`assets/img/icon-128x128.png`,
		`assets/img/icon-144x144.png`,
		`assets/img/icon-152x152.png`,
		`assets/img/icon-192x192.png`,
		`assets/img/icon-384x384.png`,
		`assets/img/icon-512x512.png`,
		`assets/img/icon-72x72.png`,
		`assets/img/icon-96x96.png`,
		`assets/img/icon.png`,
		`assets/img/kuliah.svg`,
		`assets/img/open-book.svg`,
		`assets/img/sd.svg`,
		`assets/img/smk.svg`,
		`assets/img/smp.svg`,
		`assets/img/telepon.svg`,
		`assets/img/user.svg`,
		`assets/img/wa.svg`,
];

var contentToCache = appShellFiles;

self.addEventListener('install', function(e) {
  console.log('[Service Worker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[Service Worker] Caching all: app shell and content');
      return cache.addAll(contentToCache);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(r) {
      console.log('[Service Worker] Fetching resource: '+e.request.url);
      return r || fetch(e.request).then(function(response) {
        return caches.open(cacheName).then(function(cache) {
          console.log('[Service Worker] Caching new resource: '+e.request.url);
          cache.put(e.request, response.clone());
          return response;
        });
      });
    })
  );
});