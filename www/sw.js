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
    "revision": "5b7e742e06f55b4302a2d207b5d025af"
  },
  {
    "url": "stencil/app/app.core.js",
    "revision": "07844b66884a3b9932efd3fab847f9d5"
  },
  {
    "url": "stencil/app/app.core.pf.js",
    "revision": "4e23985c02fe0c4348b22c1b79e4dfbf"
  },
  {
    "url": "stencil/app/app.registry.json",
    "revision": "e5d9e77f4ea89559459e3090e5543441"
  },
  {
    "url": "stencil/app/bt-card-elm.es5.js",
    "revision": "08e0df75b21231003cbbfb291136483b"
  },
  {
    "url": "stencil/app/bt-card-elm.js",
    "revision": "934eae4ea4b2c4ed10fef4e05b9731f6"
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
