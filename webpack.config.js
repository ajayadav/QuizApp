const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['@babel/polyfill', './src/index.js'],
  output:{
    path:path.join(__dirname,'dist'),
    filename:'main.js'
  },
  devServer: {
      historyApiFallback: true
   },
  devtool: 'source-map',
  module:{
    rules:[
      {
        test:/\.(js|jsx)$/,
        exclude:/node_modules/,
        use:{
          loader:"babel-loader"
        }
      },{
        test:/\.css$/,
        use:['style-loader','css-loader']
      },{
        test: /\.(jpg|png)$/,
        use: {
          loader: 'url-loader',
        },
      },{
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      }
    ]
  },
  plugins:[
    new HTMLWebpackPlugin({
      template:'./src/index.html',
      filename:'./index.html'
    })
  ]
}
