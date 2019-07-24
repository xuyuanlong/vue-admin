import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import axios from 'axios';
import store from '../store/store'
import Main from '../components/main/index.vue'

Vue.use(Router)

const router =  new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
})

var getRoutes;
router.beforeEach((to,from,next)=>{
  if (!getRoutes) {
    if (!getLocalRoutes()) {
      axios.post('https://www.easy-mock.com/mock/5d36779da5ab5f6106d524a1/api/menuList').then((res)=>{
        getRoutes = res.data.data;
        
        setLocalRoutes(getRoutes) //存储路由到localStorage
        routerGo(to, next)//执行路由跳转方法
      })
    } else {
      getRoutes = getLocalRoutes()
      routerGo(to, next)//执行路由跳转方法
    }
  } else {
    next()
  }
})

function routerGo(to, next) {
   //过滤路由
  let handleRouter = filterAsyncRouter(getRoutes)
  console.log(handleRouter)
  router.addRoutes(handleRouter) //动态添加路由
  store.commit('setNavList',{
    navList:handleRouter
  })
  next({ ...to, replace: true })
}

function setLocalRoutes(data) {
  localStorage.setItem('localRoutes',JSON.stringify(data))
}

function getLocalRoutes() {
  return JSON.parse(localStorage.getItem('localRoutes'))
}
function filterAsyncRouter(asyncRouterMap) { //遍历后台传来的路由字符串，转换为组件对象
  const accessedRouters = asyncRouterMap.filter((route) => {
    if (route.component) {
      if (route.component === 'Main') {
        route.component = Main
      } else {
        route.component = ()=>import(`@/views${route.path}.vue`)
      }
    }
    if (route.children && route.children.length) {
      route.children = filterAsyncRouter(route.children)
    }
    return true
  })

  return accessedRouters;
}
export default router
