const path = require('path');// importamos la libreria path
const HtmlWebpackPlugin = require('html-webpack-plugin'); // importamos la libreria html-webpack-plugin
const CopyWebpackPlugin = require('copy-webpack-plugin'); // importamos la libreria copy-webpack-plugin

module.exports = {
  entry: './index.js', // archivo de entrada
  output: {
    path: path.resolve(__dirname, 'dist'), // carpeta donde se guardara el proyecto
    filename: 'main.js' // nombre del archivo de salida
  },
  resolve: {
    extensions: ['.js'], // extensiones que vamos a utilizar
  },
  module: {
    rules: [
      {
        test: /\.js?$/, // expresion regular para identificar los archivos js
        exclude: /node_modules/, // excluir la carpeta node_modules
        use: {
          loader: 'babel-loader', // utilizar el loader de babel
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        inject: true,
        template: './public/index.html',
        filename: './index.html',
      }
    ),
    new CopyWebpackPlugin({
        patterns: [{ from: './src/styles/styles.css',
        to: 'styles.css' }],
      })
  ]
}