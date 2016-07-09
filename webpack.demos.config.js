var webpack = require('webpack');
var path = require('path');

var ENV = process.env.NODE_ENV;

module.exports = {
  debug: true,
  devtool: '#inline-source-map',
  entry: {
    demo0: ['whatwg-fetch',
      'fetch-jsonp',
      './example/index.jsx'],
  },
  contentBase: './example',
  output: {
    filename: 'bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'example')
  },
  module: {
    preLoaders: [
      {
        test: /\.js[x]?$/,
        loader: 'eslint',
        exclude: /node_modules|lib/
      },
    ],
    loaders: [
      {
        test: /\.js[x]?$/,
        loaders: ENV === 'development'
          ? ['react-hot', 'babel']
          : ['babel'],
        exclude: /node_modules|lib/
      },
      {
        test: /\.(svg|jpg|jpeg|png)[\?]?.*$/,
        loader: 'url-loader?limit=1',
        exclude: /node_modules|lib/
      }
    ]
  },
  resolve: {
    root: [path.resolve('./src')],
    extensions: ['', '.js', '.jsx']
  },
  plugins: ENV === 'development'
    ? [new webpack.HotModuleReplacementPlugin()]
    : [],
  eslint: {configFile: '.eslintrc'},
  node: {
    fs: 'empty'
  }
};
