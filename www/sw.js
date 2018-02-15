/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/YYPcyY
 */

importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/3.0.0-alpha.6/workbox-sw.js"
);

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "index.html",
    "revision": "db1faf2534eea791998ad5ce1f8bf884"
  },
  {
    "url": "stencil/app.js",
    "revision": "668c3a6ba7b8fd3a499415191dcf5963"
  },
  {
    "url": "stencil/app/0bg6sfy7.es5.js",
    "revision": "e7410dc0af9b11c7c943a4152e637271"
  },
  {
    "url": "stencil/app/0bg6sfy7.js",
    "revision": "ff44708ab0b66691af9e94fbbffdadf7"
  },
  {
    "url": "stencil/app/app.bv7ddz06.js",
    "revision": "90ddb328742103aaea8edf478f85349e"
  },
  {
    "url": "stencil/app/app.eksg1jlm.js",
    "revision": "033115e41e157d80f4dc0938785796ee"
  },
  {
    "url": "stencil/app/app.registry.json",
    "revision": "0a802458cfe8650b35a6577058d43b13"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
