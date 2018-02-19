exports.config = {
  srcDir: "src/js/stencil",
  generateDistribution: true,
  buildDir: "./build",
  distDir: "./dist/components",
  generateWWW: false,
  indexHtmlSrc: "src/index.html",
  hashFileNames: false,
  bundles: [
    { components: ["my-first-component", "btw-top-anchor"] },
    { components: ["btw-card-elm", "btw-card-elm-content", "btw-card-elm-header"] }
  ]
};
