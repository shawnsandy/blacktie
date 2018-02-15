const Html = require("html-webpack-plugin");
const Extract = require("extract-text-webpack-plugin");
const Dashboard = require("webpack-dashboard/plugin");
const Copy = require("copy-webpack-plugin");
const Uglify = require("uglifyjs-webpack-plugin");
const Cleanup = require("clean-webpack-plugin");
const Webpack = require("webpack");
const Notify = require("webpack-notifier");
const OptimizeCss = require("optimize-css-assets-webpack-plugin");
const Monitor = require("webpack-monitor");

require("dotenv").config();

const ENV = process.env.ENV;
const isDevelopment = ENV === "development";
const isProduction = ENV === "production";

function setDevTool() {
  // function to set dev-tool depending on environment
  if (isDevelopment) {
    return "inline-source-map";
  } else if (isProduction) {
    return "source-map";
  } else {
    return "eval-source-map";
  }
}

const config = {
  devtool: setDevTool(),

  entry: {
    app: __dirname + "/src/js/app.js",
    "hyper-apps": __dirname + "/src/js/hyper/index.js",
    "hyper-icons": __dirname + "/src/js/hyper/Svg.js",
    vendors: ["umbrellajs", "validate", "smooth-scroll", "vue"]
  },

  output: {
    path: __dirname + "/dist",
    filename: "js/[name].js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: [/node_modules/]
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {}
      },
      {
        test: /\.html/,
        loader: "raw-loader"
      },
      {
        test: /\.scss$/,
        use: Extract.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                minimize: isProduction
              }
            },
            {
              loader: "postcss-loader"
            },
            {
              loader: "sass-loader"
            }
          ]
        })
      }
    ]
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js"
    },
    extensions: ["*", ".js", ".vue", ".json"]
  },
  plugins: [
    new Extract("css/[name].min.css"),
    new Html({
      template: __dirname + "/src/index.html",
      inject: "body"
    }),
    new Webpack.optimize.CommonsChunkPlugin({
      name: "vendors"
    }),
    new Copy([
      {
        from: __dirname + "/public/stylesheets"
      },
      {
        from:
          __dirname +
          "/node_modules/bytesize-icons/dist/bytesize-symbols.min.svg",
        to: "./icons"
      },
      {
        from: __dirname + "/www/stencil",
        to: "./components"
      }
    ])
  ],

  devServer: {
    contentBase: "./dist",
    port: "7700",
    open: true
  }
};

// Minify and copy assets in production
// plugins to use in a production environment
if (isProduction) {
  config.plugins.push(
    new Cleanup(["dist"]),
    new Uglify(),
    new Webpack.DefinePlugin({
      "process.env": { NODE_ENV: '"production"' }
    }),
    new Notify({
      title: "BlackTie Notifications",
      message: "Production bundled successfully. You are ready to party",
      sound: true
    })
  );
}

if (isDevelopment) {
  config.plugins.push(new Dashboard());
}

module.exports = config;
