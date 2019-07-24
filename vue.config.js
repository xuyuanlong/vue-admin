const name = 'vue Admin' // page title
module.exports = {
  lintOnSave:false,   //取消编译代码格式校验
  devServer: {
    open: true,
    port: '8080',
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
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.vue$/,
  //       loader: 'vue-loader',
  //       options: {
  //         // vue-loader options go here
  //       }
  //     }
  //   ]
  // }
  chainWebpack(config) {
    // config.plugins.delete('preload') // TODO: need test
    // config.plugins.delete('prefetch') // TODO: need test

    // // set svg-sprite-loader
    // config.module
    //   .rule('svg')
    //   .exclude.add(resolve('src/icons'))
    //   .end()
    // config.module
    //   .rule('icons')
    //   .test(/\.svg$/)
    //   .include.add(resolve('src/icons'))
    //   .end()
    //   .use('svg-sprite-loader')
    //   .loader('svg-sprite-loader')
    //   .options({
    //     symbolId: 'icon-[name]'
    //   })
    //   .end()

    // set preserveWhitespace
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.preserveWhitespace = true
        return options
      })
      .end()
  }
}