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
    "revision": "57fd3313d35fcbbf11a7f6878e579b54"
  },
  {
    "url": "stencil/app/0gvjaxcy.es5.js",
    "revision": "d5f147bf67110dcaf70a30062f0b0546"
  },
  {
    "url": "stencil/app/0gvjaxcy.js",
    "revision": "d568d3633bc659b2d0fd85a5bf6dfadf"
  },
  {
    "url": "stencil/app/app.5xfahmc9.js",
    "revision": "669097b16541d15f586b7ea1009603e8"
  },
  {
    "url": "stencil/app/app.hnteciro.js",
    "revision": "0dfbf5e2806b8dcb6ee4979d26603ad9"
  },
  {
    "url": "stencil/app/app.registry.json",
    "revision": "f6fd503cd2752457265ca6e36c9b59ac"
  },
  {
    "url": "stencil/app/gp5xne7w.es5.js",
    "revision": "11473e869478c16e6dbed02cea347ef5"
  },
  {
    "url": "stencil/app/gp5xne7w.js",
    "revision": "615f0919a1b41ffecccc60fd757fb6bc"
  },
  {
    "url": "stencil/app/hlvasici.es5.js",
    "revision": "d3e3542331f7d38ed3d457ead30f11ec"
  },
  {
    "url": "stencil/app/hlvasici.js",
    "revision": "f37a87026a84a77722e3e1d79fbbb788"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
