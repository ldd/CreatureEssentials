/*eslint-env node*/
var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output:{
    path: './plugins',
    filename: 'CreatureEssentials.js',
    publicPath: '/'
  },
  devtool: 'cheap-module-source-map',
  //devServer: {
  //  inline: true,
  //  contentBase: './public'
  //},
  eslint:{
    configFile: '.eslintrc'
  },
  module:{
    preLoaders: [
      {
        test: /(\.js$|\.jsx$)/,
        exclude: /(node_modules|bower_components)/,
        loader: 'eslint-loader'
      }
    ]
    //loaders: [
    //  {
    //    test: /\.jsx?$/,
    //    exclude: /(node_modules|bower_components)/
    //    loader: 'babel',
    //    query:{
    //      presets: ['es2015']
    //    }
    //  }
    //]
  },
  plugins:[
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    })
  //  new webpack.ProvidePlugin({
  //    'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
  //  })
  ]
};