//-----------  Requirements -----------//

const path = require('path');

//-----------  Exports  -----------//

module.exports = {
  devtool : 'eval', //'inline-source-map',
  module: {
    loaders: [
      {
        test    : /\.scss$/,
        loaders : ['style', 'raw', 'sass'],
      // },{
      //   test: /\.(eot|svg|ttf|woff|woff2)$/,
      //   loader: 'file?name=[path][name].[ext]',
      //   include : path.resolve(__dirname, '../source/fonts')
      // },{
      //   test: /\.(jpg|jpeg|gif|png|svg)$/,
      //   loader: 'file?name=[path][name].[ext]',
      //   include : path.resolve(__dirname, '../source/images')
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};
