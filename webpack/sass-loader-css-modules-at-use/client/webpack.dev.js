const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const { merge } = require("webpack-merge");

const baseConfig = require("./webpack.config");

/**
 * @type {import("webpack-dev-server").Configuration}
 */
 const devServer = {
  host: "0.0.0.0",
  port: 3450,
  writeToDisk: true,
  watchOptions: {
    poll: 500,
    aggregateTimeout: 500
  },
  contentBase: path.resolve(__dirname, "public"),
  watchContentBase: true,
  hot: false,
  liveReload: true,
  overlay: true
}

/**
 * @type import("webpack").Configuration
 */
const webpackConfigDev = {
  mode: "development",
  devtool: "eval-source-map",
  devServer: devServer,
  plugins: [
    new MiniCssExtractPlugin({
      filename: "public/bundle/styles/[name].css",
      chunkFilename: "public/bundle/styles/[id].chunk.css"
    }),    
    // new FaviconsWebpackPlugin({
    //   logo:"./src/assets/logo/kemono-logo.svg",
    //   inject: htmlPlugin => path.basename(htmlPlugin.options.filename) === "shell.html",
    //   prefix: "static/assets/logo"
    // })
  ],
  module: {
    rules: [
      {
        test: /\.(m?js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            // presets: [
            //   [
            //     '@babel/preset-env', 
            //     { targets: "defaults" }
            //   ],
            // ],
            plugins: [
              '@babel/plugin-transform-runtime'
            ]
          }
        }
      },
      {
        test: /\.module.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true
            }
          },
          'sass-loader'
        ],
      },
      {
        test: /\.(c|s[ac])ss$/i,
        exclude: /\.module.(c|s[ac])ss$/i,
        use: [
          MiniCssExtractPlugin.loader, 
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.svg$/i,
        type: 'asset/resource',
      }
    ]
  },
  output: {
    filename: "public/bundle/scripts/[name].bundle.js",
    assetModuleFilename: "public/bundle/assets/[name][ext][query]",
  }
}

module.exports = merge(baseConfig, webpackConfigDev);
