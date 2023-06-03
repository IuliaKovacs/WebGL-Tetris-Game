const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: path.join(__dirname, 'src/js/main.js'),
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html')
    }),
    new MiniCssExtractPlugin()
  ],
  module: {
    rules: [
      {
        // CSS
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }, {
        // GLSL
        test: /\.(glsl|vs|fs|vert|frag)$/,
        exclude: /node_modules/,
        use: [
          // 'raw-loader',
          'file-loader',
          'glslify-loader'
        ]
      }, {
        // MD
        test: /\.md$/,
        use: [
          'html-loader',
          'markdown-loader'
        ]
      }
    ]
  }
}
