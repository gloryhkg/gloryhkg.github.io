'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "253da152f4df4ce29ca5dcd7e80e86a9",
"/main.dart.js": "363828b27ee500973b99e934e3a01a37",
"/icons/favicon-16x16.png": "3977bc3d91801f7703d7e1c034066748",
"/icons/favicon.ico": "74e6008f8963042e6df92e58a5603fd5",
"/icons/apple-icon.png": "9b91c310480f6a9ff4b35b2a5e67a2dc",
"/icons/apple-icon-144x144.png": "4beb288172cc01f9757a80e95c75b93a",
"/icons/android-icon-192x192.png": "67cfd9014fc17826d5130e4b27f10c85",
"/icons/apple-icon-precomposed.png": "9b91c310480f6a9ff4b35b2a5e67a2dc",
"/icons/apple-icon-114x114.png": "fa1a9f0b63b2e9cc3e727b8d8fe1b8e6",
"/icons/ms-icon-310x310.png": "91e4926818c63a37c9ffb10cade6091e",
"/icons/ms-icon-144x144.png": "4beb288172cc01f9757a80e95c75b93a",
"/icons/apple-icon-57x57.png": "7a3a95801d85bd8f07c55176711ed3d4",
"/icons/apple-icon-152x152.png": "fd5684716743c54b0525e54739a60c0a",
"/icons/ms-icon-150x150.png": "a6a0aac9fca313d94746343ceb47c835",
"/icons/android-icon-72x72.png": "7fb277ce148cb1522e90e5587e2cba34",
"/icons/android-icon-96x96.png": "50f75246cddbe23e725e89850f682cd4",
"/icons/android-icon-36x36.png": "892ff2429a79c261a2a961740e228886",
"/icons/apple-icon-180x180.png": "6bc4045ce97819f1c2cc3d031ad4ed65",
"/icons/favicon-96x96.png": "50f75246cddbe23e725e89850f682cd4",
"/icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"/icons/android-icon-48x48.png": "4049d6a1dad0f5ba4aad173732e9975e",
"/icons/apple-icon-76x76.png": "14d772e89fcb86c2c3226b78058803d6",
"/icons/apple-icon-60x60.png": "efb5c5be0a55b5146033e1f637389ffc",
"/icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"/icons/android-icon-144x144.png": "4beb288172cc01f9757a80e95c75b93a",
"/icons/apple-icon-72x72.png": "7fb277ce148cb1522e90e5587e2cba34",
"/icons/apple-icon-120x120.png": "998a861a57d0968fb88dc697527493b7",
"/icons/favicon-32x32.png": "26fd635bd94734deb300aacef14d9323",
"/icons/ms-icon-70x70.png": "f61782f41615432c1f3880e72072a392",
"/manifest.json": "0480e6772eada3270056987966db86a5",
"/assets/LICENSE": "9435bf69dff3b3ed021af50d7cb6f4eb",
"/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16"
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
