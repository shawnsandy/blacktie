exports.config = {
  srcDir: "src/js/stencil",
  buildDir: "stencil",
  hashFileNames: false,
  bundles: [
    { components: ["my-first-component", "bt-top-anchor"] },
    { components: ["bt-card-elm", "bt-card-elm-content", "bt-card-elm-header"] }
  ]
};
