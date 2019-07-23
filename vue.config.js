module.exports = {
  lintOnSave:false,   //取消编译代码格式校验
  devServer: {
    port: '8088',
    // proxy: {
    //   '^/api': {
    //     target: 'http://10.48.17.83:8010',
    //     ws: true,
    //     changeOrigin: true,
    //     open: true, //配置自动启动浏览器
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   }
    // }
  }
}