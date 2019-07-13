module.export = {
  lintOnSave:false,   //取消编译代码格式校验
  devServer: {
    disableHostCheck: true,
    proxy: {
      '^/api': {
        target: 'fmpsit.cnsuning.com',
        ws: true,
        changeOrigin: true
      }
    }
  }
}