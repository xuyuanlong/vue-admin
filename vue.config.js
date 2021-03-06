const name = 'vue Admin' // page title

const webpack = require('webpack')
module.exports = {
  lintOnSave:false,   //取消编译代码格式校验
  devServer: {
    open: true,
    port: '8081',
    proxy: {
      '^/api': {
        target: 'http://localhost:8080',
        ws: true,
        changeOrigin: true,
        open: true, //配置自动启动浏览器
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
	configureWebpack: {
    //关闭 webpack 的性能提示
    performance: {
      hints:false
    },
    //警告 webpack 的性能提示
    performance: {
      hints:'warning',
      //入口起点的最大体积
      maxEntrypointSize: 50000000,
      //生成文件的最大体积
      maxAssetSize: 30000000,
      //只给出 js 文件的性能提示
      assetFilter: function(assetFilename) {
        return assetFilename.endsWith('.js');
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        $:"jquery",
        jQuery:"jquery",
        "windows.jQuery":"jquery"
      })
    ]
  }
}
