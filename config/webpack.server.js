const { resolve } = require('path');
const fs = require('fs');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const { root } = require('../lib/helpers');

const serverpath = root('src', 'server')
const outputRootPath = root('dist');
const outputPath = resolve(outputRootPath, "./server");

let nodeModules = {};
fs.readdirSync('node_modules')
.filter((x) => {
  return ['.bin'].indexOf(x) === -1;
})
.forEach((mod) => {
  nodeModules[mod] = 'commonjs ' + mod;
});

module.exports = {
  entry: {
    'wcnexus.com': './src/server/wcnexus.com.ts',
  },

  resolve: {
    extensions: ['.ts', '.js']
  },

  target: 'node',

  node: {
    __dirname: false,
    __filename: false
  },

  externals: nodeModules,

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [

          {
            loader: 'awesome-typescript-loader',
            options: {
              configFileName: resolve(serverpath, './tsconfig.server.json')
            }
          }

        ],
        exclude:  /node_modules/
      }

    ]
  },

  plugins: [
    new CleanWebpackPlugin([outputPath], {root: outputRootPath, verbose: true}),
    new CopyWebpackPlugin([
      { 
        from: resolve(serverpath, "./config"),
        to: 'config',
        ignore: [
          ".gitkeep"
        ] 
      },
      { 
        from: resolve(serverpath, "./static"),
        to: 'static',
        ignore: [
          ".gitkeep"
        ]
      }
    ])
  ],

  output: {
    path: outputPath,
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[id].[hash].chunk.js'
  }


}
