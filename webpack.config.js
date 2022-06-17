const { join } = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    mode:'development',
  entry: "./src/index.js", //入口路径
  output: {
    path: join(__dirname, "lib"), //出口路径
    filename: "main.js", //文件名
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
  ],
  devServer: {
    port: 3000, // 端口号
    open: true
  }
}
