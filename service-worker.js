self.addEventListener('install', e => {
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  console.log('Service Worker Active');
});

self.addEventListener('fetch', e => {});
