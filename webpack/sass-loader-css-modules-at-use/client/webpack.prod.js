// const path = require("path");
const { merge } = require("webpack-merge");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

const baseConfig = require("./webpack.config");

/**
 * @type import("webpack").Configuration
 */
 const webpackConfigProd = {
  mode: "production",
  // devtool: "source-map",
  plugins: [
    new MiniCSSExtractPlugin({
      filename: "public/bundle/styles/[name]-[contenthash].css",
      chunkFilename: "public/bundle/styles/[id]-[contenthash].chunk.css"
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(m?js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env', 
                { targets: "defaults" }
              ],
            ],
            plugins: [
              '@babel/plugin-transform-runtime'
            ]
          }
        }
      },
      {
        test: /\.module.s[ac]ss$/i,
        use: [
          MiniCSSExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true
            }
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  ["postcss-preset-env"]
                ]
              }
            }
          },
          'sass-loader'
        ],
      },
      {
        test: /\.(c|s[ac])ss$/i,
        exclude: /\.module.(c|s[ac])ss$/i,
        use: [
          MiniCSSExtractPlugin.loader, 
          {
            loader: 'css-loader',
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  ["postcss-preset-env"]
                ]
              }
            }
          },
          "sass-loader"
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: "public/bundle/assets/[name]-[contenthash][ext][query]"
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: "public/bundle/fonts/[name]-[contenthash][ext][query]"
        }
      },
      {
        test: /\.svg$/i,
        type: 'asset/resource',
        generator: {
          filename: "public/bundle/svg/[name]-[contenthash][ext][query]"
        }
      },
    ]
  },
  output: {
    filename: "public/bundle/scripts/[name]-[contenthash].bundle.js",
    assetModuleFilename: "public/bundle/assets/[name]-[contenthash][ext][query]",
    // sourceMapFilename: "source-maps/[file].map[query]",
  },
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  }
}

module.exports = merge(baseConfig, webpackConfigProd);
