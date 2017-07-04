var path    = require('path'),
    webpack = require('webpack');

module.exports = {
  entry: {
    index: [
      __dirname + '/src/index.jsx'
    ]
  },
  output: { 
    path: __dirname + '/dist', 
    filename: '[name].js',
    publicPath: '/dist/' 
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  devtool: 'source-map',

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: 'babel-loader'
      }
    ]
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '\'DEV\''
      },
      'NODE_ENV': '\'DEV\''
    })
  ]
};

