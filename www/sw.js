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
    "revision": "57f8536cc825b622971dfdf1a5ebfe5b"
  },
  {
    "url": "stencil/app/app.core.js",
    "revision": "0dfbf5e2806b8dcb6ee4979d26603ad9"
  },
  {
    "url": "stencil/app/app.core.pf.js",
    "revision": "669097b16541d15f586b7ea1009603e8"
  },
  {
    "url": "stencil/app/app.registry.json",
    "revision": "567267af50d6335222a61e205e6774b8"
  },
  {
    "url": "stencil/app/card-elm.es5.js",
    "revision": "4eeff4acada049a4ec355f82e3d06fda"
  },
  {
    "url": "stencil/app/card-elm.js",
    "revision": "9b26075fe62ac82f382955707786e802"
  },
  {
    "url": "stencil/app/my-component.es5.js",
    "revision": "059e36e37773c97de3147161470fd14c"
  },
  {
    "url": "stencil/app/my-component.js",
    "revision": "d568d3633bc659b2d0fd85a5bf6dfadf"
  },
  {
    "url": "stencil/app/my-first-component.es5.js",
    "revision": "f9fd12c8931551284e05965bb4530aa0"
  },
  {
    "url": "stencil/app/my-first-component.js",
    "revision": "f37a87026a84a77722e3e1d79fbbb788"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
