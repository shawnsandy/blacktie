exports.config = {
  srcDir: "src/js/stencil",
  generateDistribution: true,
  buildDir: "./build",
  generateWWW: false,
  indexHtmlSrc: "src/js/stencil/index.html",
  hashFileNames: false,
  bundles: [
    { components: ["my-first-component", "bt-top-anchor"] },
    { components: ["bt-card-elm", "bt-card-elm-content", "bt-card-elm-header"] }
  ]
};
