const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  filenameHashing: false,
  pages: {
    popup: {
      entry: './src/views/popup/main.js',
      filename: './pages/popup.html',
      title: 'popup'
    }
  },
  configureWebpack: {
    devtool: false,
    watch: true,
    plugins: [
      new CopyWebpackPlugin([
        {
          from: './src/manifest.json',
          to: 'manifest.json'
        },
        {
          from: './src/utils/execute.js',
          to: 'js/execute.js'
        }
      ])
    ]
  },
  chainWebpack: config => {
    config
      .optimization.splitChunks({})
  }
}
