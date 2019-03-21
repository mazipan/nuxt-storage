const path = require('path');
const webpack = require('webpack');
const CompressionPlugin = require("compression-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;

const getAbsolutePath = function (folderName) {
  return path.join(__dirname, folderName);
}

const config = {
  entry: {
    ['nuxt-storage']: './nuxt-storage.js',
    ['local-storage']: './src/local-storage.js',
    ['session-storage']: './src/session-storage.js'
  },
  output: {
    filename: '[name].min.js',
    path: __dirname + '/dist',
    libraryTarget: 'commonjs2'
  },
  mode: 'production',
  resolveLoader: {
    modules: [
      getAbsolutePath('node_modules')
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        isStaging: (NODE_ENV === 'development'),
        NODE_ENV: '"' + NODE_ENV + '"'
      }
    }),
    new CompressionPlugin({
      algorithm: 'gzip'
    }),
    new CopyWebpackPlugin([{
      from: path.resolve(getAbsolutePath('dist/local-storage.min.js')),
      to: path.resolve(getAbsolutePath('local-storage/index.js'))
    }, {
      from: path.resolve(getAbsolutePath('dist/local-storage.min.js.gz')),
      to: path.resolve(getAbsolutePath('local-storage/index.js.gz'))
    }, {
      from: path.resolve(getAbsolutePath('dist/session-storage.min.js')),
      to: path.resolve(getAbsolutePath('session-storage/index.js'))
    }, {
      from: path.resolve(getAbsolutePath('dist/session-storage.min.js.gz')),
      to: path.resolve(getAbsolutePath('session-storage/index.js.gz'))
    }]),
  ],
  module: {
    rules: [{
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }]
  }
};

module.exports = config;