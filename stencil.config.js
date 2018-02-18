exports.config = {
  srcDir: "src/js/stencil",
  generateDistribution: true,
  buildDir: "./build",
  distDir: "./dist/components",
  generateWWW: false,
  indexHtmlSrc: "src/index.html",
  hashFileNames: false,
  bundles: [
    { components: ["my-first-component", "bt-top-anchor"] },
    { components: ["bt-card-elm", "bt-card-elm-content", "bt-card-elm-header"] }
  ]
};
