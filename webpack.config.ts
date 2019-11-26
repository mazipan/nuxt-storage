import webpack from "webpack"
import path from 'path'
import CompressionPlugin from 'compression-webpack-plugin'

const NODE_ENV: string = process.env.NODE_ENV

const getAbsolutePath = function(folderName: string): string {
  return path.join(__dirname, folderName)
}

const config: webpack.Configuration = {
  entry: {
    'nuxt-storage': './nuxt-storage.ts',
    'local-storage': './src/local-storage.ts',
    'session-storage': './src/session-storage.ts'
  },
  output: {
    filename: '[name].min.js',
    path: getAbsolutePath('dist')
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        isStaging: (NODE_ENV === 'development'),
        NODE_ENV: `"${NODE_ENV}"`
      }
    }),
    new CompressionPlugin({
      algorithm: 'gzip'
    })
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  }
}

module.exports = config
