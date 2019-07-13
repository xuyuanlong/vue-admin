module.export = {
  lintOnSave:false,   //取消编译代码格式校验
  devServer: {
    disableHostCheck: true,
    proxy: {
      '^/api': {
        target: '',
        ws: true,
        changeOrigin: true
      }
    }
  }
}