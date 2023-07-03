const path = require('path');
const {VueLoaderPlugin} = require('vue-loader');

module.exports = {
  mode: 'development',
  entry: './src/components/BrowserVersion.vue', // 入口文件路径，根据你的项目结构进行修改
  output: {
    path: path.resolve(__dirname, 'lib'), // 输出文件目录路径
    filename: 'browser-version.js', // 输出文件名
    library: 'BrowserVersion', // 以全局变量形式暴露组件，可根据需要修改
    libraryTarget: 'umd', // 输出文件模块化格式，可根据需要修改
    umdNamedDefine: true, // 支持AMD模块命名定义
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    // 其他插件
    new VueLoaderPlugin(),
  ]
};