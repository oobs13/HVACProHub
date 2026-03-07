const CACHE_NAME = 'hvac-pro-hub-v1';
const ASSETS_TO_CACHE = [
    'index.html',
    'style.css',
    'script.js',
    'manifest.json'
];

// Install Event: Caches the essential files
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('Caching app shell');
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

// Activate Event: Cleans up old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.filter(key => key !== CACHE_NAME)
                    .map(key => caches.delete(key))
            );
        })
    );
});

// Fetch Event: Serves files from cache if offline
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});