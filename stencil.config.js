exports.config = {
  srcDir: "./src/js/stencil",
  buildDir: "./stencil/build",
  indexHtmlSrc: "./src/js/stencil/index.html",
  generateWWW: false,
  bundles: [{ components: ["my-first-component"] }]
};
