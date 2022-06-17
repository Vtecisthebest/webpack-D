const { join } = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
  mode: 'development',
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
  },
  module: {
    rules: [ // loader的规则
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", 'less-loader']
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/i,
        type: 'asset',
       generator:{
        filename:'images/[hash:6][ext]'
       }
      } ,
      { // webpack5默认内部不认识这些文件, 所以当做静态资源直接输出即可
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        type: 'asset/resource',
        generator: {
          filename: 'font-[name].[hash:6][ext]'
        }
    }, 
    ]
  }
}
