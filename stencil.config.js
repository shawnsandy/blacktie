exports.config = {
  srcDir: "src/stencil",
  generateDistribution: true,
  namespace: "btw",
  buildDir: "./build",
  distDir: "./dist/components",
  generateWWW: false,
  indexHtmlSrc: "src/index.html",
  hashFileNames: false,
  bundles: [
    { components: ["my-first-component"] },
    { components: ["bts-card-elm", "bts-card-elm-content", "bts-card-elm-header", "bts-top-anchor", "bts-svg-elm", 'bts-confirm-actions', 'bts-upload-elm'] }
  ]
}
