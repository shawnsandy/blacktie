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
    "revision": "e9d2b10c8564bf7189bf24ceb3368288"
  },
  {
    "url": "stencil/app.js",
    "revision": "f90d2cd00e567d17784af83e241321c9"
  },
  {
    "url": "stencil/app/app.core.js",
    "revision": "90ddb328742103aaea8edf478f85349e"
  },
  {
    "url": "stencil/app/app.core.pf.js",
    "revision": "033115e41e157d80f4dc0938785796ee"
  },
  {
    "url": "stencil/app/app.registry.json",
    "revision": "2eeb0ff77afa58c743d35962d4040baf"
  },
  {
    "url": "stencil/app/my-first-component.es5.js",
    "revision": "047da1cfb0e3fc9faa3466af9389466e"
  },
  {
    "url": "stencil/app/my-first-component.js",
    "revision": "ff44708ab0b66691af9e94fbbffdadf7"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
