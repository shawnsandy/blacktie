const Html = require("html-webpack-plugin");
const Extract = require("extract-text-webpack-plugin");
const Dashboard = require("webpack-dashboard/plugin")
const Copy = require('copy-webpack-plugin');
const Uglify = require('uglifyjs-webpack-plugin');
const Cleanup = require('clean-webpack-plugin');
const Webpack = require('webpack');

require("dotenv").config();

const ENV = process.env.APP_ENV;
const isLocal = ENV === "local";
const isProduction = ENV === "production";

function setDevTool() {
  // function to set dev-tool depending on environment
  if (isLocal) {
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
    app: __dirname + "/src/javascripts/app.js",
    print: __dirname + "/src/javascripts/print.js"
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].js",
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
        test: /\.html/,
        loader: "raw-loader"
      },
      {
        test: /\.scss$/,
        use: Extract.extract({
          fallback: "style-loader",
          use: [
            { loader: "css-loader" },
            { loader: "sass-loader" }
          ]
        })
      }
    ]
  },
  plugins: [
    //new Dashboard(),
    new Extract("blacktie.css"),
    new Html({
      template: __dirname + "/src/index.html",
      inject: "body"
    }),
    new Webpack.optimize.CommonsChunkPlugin({
      name: "main"
    })
  ],
  devServer: {
    contentBase: "./dist",
    port: "7700"
  }
};

// Minify and copy assets in production
// plugins to use in a production environment
if(isProduction) {
    config.plugins.push(new Cleanup([
        "dist"
	  ]),
	  new Uglify(),
	  new Copy([
        {
          from: __dirname + "/public/stylesheets"
        }
      ]));
};


module.exports = config;
