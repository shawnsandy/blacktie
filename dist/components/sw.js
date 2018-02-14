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
    "url": "build/app.js",
    "revision": "9546a6bccdacf4bc0936ed5cf92b6da6"
  },
  {
    "url": "build/app/app.kuro4mu9.js",
    "revision": "1be618f3b3bf1ec6c27cd674089f47af"
  },
  {
    "url": "build/app/app.qui07g2v.js",
    "revision": "a4d712dffd6c140f22ee7822ed9b60d6"
  },
  {
    "url": "build/app/app.registry.json",
    "revision": "5292f0882b87ee2b0ca62c1c19bc7095"
  },
  {
    "url": "build/app/hfhje7pg.es5.js",
    "revision": "1e9a2f297c772b85627b5c46daca890c"
  },
  {
    "url": "build/app/hfhje7pg.js",
    "revision": "8ba8182e5b024f3a14ebb024f8313dc8"
  },
  {
    "url": "index.html",
    "revision": "6d6707bfb045d423ac4db0c568b39a96"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
