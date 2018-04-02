'use strict'

// Node Modules
import UglifyJsPlugin from 'uglifyjs-webpack-plugin'
import webpack from 'webpack'
import path from 'path'

let config = {
  mode: process.env.NODE_ENV,
  output: {
    publicPath: path.join( __dirname, 'backend/assets' ),
    path: path.join( __dirname, 'backend/assets/js' ),
    filename: 'components.js'
  },
  module: {
    rules: [
      {
        test: [ /\.jsx*$/ ],
        use: { loader: 'babel-loader' },
        exclude: /node_modules/
      }
    ]
  }
}

if ( process.env.NODE_ENV === 'development' ) {
  config.devtool = 'inline-source-map';
}

if ( process.env.NODE_ENV === 'porduction' ) {
  config.plugins = [
    new UglifyJsPlugin()
  ];
}

export default config
