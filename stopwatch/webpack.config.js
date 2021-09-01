const path = require('path');
const CopyWebpackPlugin = require("copy-webpack-plugin");

const env = process.env.NODE_ENV || 'development';
const isDev = env === 'development';

module.exports = {
  entry: './dev/index.js',
  output: { 
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  devtool: isDev && 'eval-source-map',
  mode: env,
  watch: isDev,
  devServer: {
    static: {
      directory: path.join(__dirname, 'build'),
    },
    host: 'localhost',
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        },
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({ 
      patterns: [
        { 
          from: path.resolve('./dev/static'),
          to: path.resolve('./build')
        }
      ]
    })
  ]
};
