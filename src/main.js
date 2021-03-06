import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/store'
import ElementUI from 'element-ui'
import axios from 'axios'
import { Loading } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'

import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-table/dist/bootstrap-table.min.css'
import 'bootstrap-table/dist/bootstrap-table.min.js'
import 'bootstrap-table/dist/locale/bootstrap-table-zh-CN.min.js'

import Main from './components/main/index.vue'
import '@/assets/app.css';


Vue.config.productionTip = false

Vue.prototype.$http = axios;

Vue.use(ElementUI)
const vmMain = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

let loading
let needLoadingRequestCount = 0 // 声明一个对象用于存储请求个数

let loadingInstance;
const options = {
  target: 'main-content',
}

function startLoading () {
  loadingInstance = Loading.service({
    // target: '.main-content',
    lock: true,
    background: 'rgba(0,0,0,0.3)',
    text: '加载中...',
  })
}

function endLoading () {
  vmMain.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
    loadingInstance.close();
  });
}
function showLoading () {
  if (needLoadingRequestCount === 0) {
    startLoading()
  }
  needLoadingRequestCount++
}
function hideLoading () {
  if (needLoadingRequestCount <= 0) return
  needLoadingRequestCount--
  if (needLoadingRequestCount === 0) {
    endLoading()
  }
}
 
// axios
axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? '' : '' // 接口基础路径
axios.defaults.timeout = 10000 // 超时时间 10s
axios.defaults.withCredentials = true // 允许设置cookie(开启的话需后端配置)
// http请求拦截器
axios.interceptors.request.use(config => {
  if (config.isLoading !== false) { // 如果配置了isLoading: false，则不显示loading
    showLoading()
  }
  // config.headers['Content-Type'] = 'application/json;charset=UTF-8'
  return config
}, error => {
  hideLoading()
  return Promise.reject(error.response)
})
// http响应拦截器
axios.interceptors.response.use(data => {
  hideLoading() // 响应成功关闭loading
  if (data.data.code == 4) {
    vmMain.$router.replace('/login')
  } else {
    if (data.data.code !== 0) {
      vmMain.$message.error({
        message: data.data.codemsg,
        center: true
      });
    }
  }
  return data;
}, error => {
  hideLoading()
  let _status = error.response && error.response.status;
  if (_status === 504 || _status === 404) {
    vmMain.$message.error({
      message: '数据请求异常',
      center: true
    });
  }
  return Promise.reject(error)
})

