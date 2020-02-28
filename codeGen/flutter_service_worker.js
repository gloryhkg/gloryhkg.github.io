'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/LICENSE": "6a5dbb7c9f2f978a993e5deb2bc52d51",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/icons/android-icon-144x144.png": "4beb288172cc01f9757a80e95c75b93a",
"/icons/android-icon-192x192.png": "67cfd9014fc17826d5130e4b27f10c85",
"/icons/android-icon-36x36.png": "892ff2429a79c261a2a961740e228886",
"/icons/android-icon-48x48.png": "4049d6a1dad0f5ba4aad173732e9975e",
"/icons/android-icon-72x72.png": "7fb277ce148cb1522e90e5587e2cba34",
"/icons/android-icon-96x96.png": "50f75246cddbe23e725e89850f682cd4",
"/icons/apple-icon-114x114.png": "fa1a9f0b63b2e9cc3e727b8d8fe1b8e6",
"/icons/apple-icon-120x120.png": "998a861a57d0968fb88dc697527493b7",
"/icons/apple-icon-144x144.png": "4beb288172cc01f9757a80e95c75b93a",
"/icons/apple-icon-152x152.png": "fd5684716743c54b0525e54739a60c0a",
"/icons/apple-icon-180x180.png": "6bc4045ce97819f1c2cc3d031ad4ed65",
"/icons/apple-icon-57x57.png": "7a3a95801d85bd8f07c55176711ed3d4",
"/icons/apple-icon-60x60.png": "efb5c5be0a55b5146033e1f637389ffc",
"/icons/apple-icon-72x72.png": "7fb277ce148cb1522e90e5587e2cba34",
"/icons/apple-icon-76x76.png": "14d772e89fcb86c2c3226b78058803d6",
"/icons/apple-icon-precomposed.png": "9b91c310480f6a9ff4b35b2a5e67a2dc",
"/icons/apple-icon.png": "9b91c310480f6a9ff4b35b2a5e67a2dc",
"/icons/browserconfig.xml": "97775b1fd3b6e6c13fc719c2c7dd0ffe",
"/icons/favicon-16x16.png": "3977bc3d91801f7703d7e1c034066748",
"/icons/favicon-32x32.png": "26fd635bd94734deb300aacef14d9323",
"/icons/favicon-96x96.png": "50f75246cddbe23e725e89850f682cd4",
"/icons/favicon.ico": "74e6008f8963042e6df92e58a5603fd5",
"/icons/manifest.json": "e50e6a1c9ed6452635d3211f39501e0d",
"/icons/ms-icon-144x144.png": "4beb288172cc01f9757a80e95c75b93a",
"/icons/ms-icon-150x150.png": "a6a0aac9fca313d94746343ceb47c835",
"/icons/ms-icon-310x310.png": "91e4926818c63a37c9ffb10cade6091e",
"/icons/ms-icon-70x70.png": "f61782f41615432c1f3880e72072a392",
"/index.html": "a29d2d2d761c220535c5dcbe773d8c87",
"/main.dart.js": "115d9375ce61528a2d9361fc2f6a548f",
"/manifest.json": "1237b1375a0b45b32af431f1cf86ded7"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
