const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  filenameHashing: false,
  pages: {
    popup: {
      entry: './src/popup/main.js',
      filename: './pages/popup.html'
    }
  },
  configureWebpack: {
    watch: true,
    plugins: [
      new CopyWebpackPlugin([
        {
          from: './src/manifest.json',
          to: 'manifest.json'
        }
      ])
    ]
  }
}
