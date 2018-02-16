exports.config = {
  srcDir: "src/js/stencil",
  buildDir: "stencil",
  hashFileNames: false,
  bundles: [
    { components: ["my-first-component"] },
    { components: ["card-elm", "card-elm-content", "card-elm-header"] }
  ]
};
