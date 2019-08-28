import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import axios from 'axios';
import store from '../store/store'
import Main from '../components/main/index.vue'
const notFound = ()=> import('@/views/404.vue')
Vue.use(Router)

const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

var remoteRoutes;
router.beforeEach((to,from,next)=>{
  // if (!remoteRoutes) {
  //   if (!getRomoteRoutes()) {
  //     axios.post('/api/menu/list').then((res)=>{
  //       remoteRoutes = res.data.data;
  //       setRomoteRoutes(remoteRoutes) //存储路由到localStorage
  //       routerGo(to, next)//执行路由跳转方法
  //     })
  //   } else {
  //     remoteRoutes = getRomoteRoutes()
  //     routerGo(to, next)//执行路由跳转方法
  //   }
  // } else {
  //   next()
  // }
  next()
})

let menuRoutes = routes.filter(function(item) {
  return !item.hidden
})
console.log(menuRoutes)
 store.commit('setNavList',{
    navList: menuRoutes
  })
function routerGo(to, next) {
   //过滤路由
  let getFilterRoutes = filterAsyncRouter(remoteRoutes)
  router.addRoutes(getFilterRoutes) //动态添加路由
  router.addRoutes([{
    path:'*',
    name:'404',
    component:notFound
  }])
  store.commit('setNavList',{
    navList:getFilterRoutes
  })
  next({ ...to, replace: true })
}

function setRomoteRoutes(data) {
  localStorage.setItem('romoteRoutes',JSON.stringify(data))
}
function getRomoteRoutes() {
  if (localStorage.getItem('romoteRoutes')) {
    return JSON.parse(localStorage.getItem('romoteRoutes'))
  }
}
function filterAsyncRouter(asyncRouterMap) { //遍历后台传来的路由字符串，转换为组件对象
  let accessedRouters = asyncRouterMap.filter((route) => {
    if (route.component && route.component === 'Main') {
      route.component = Main
    } else {
      route.component = ()=>import(`@/views${route.path}.vue`)
    }
    if (route.children && route.children.length) {
      route.children = filterAsyncRouter(route.children)
    }
    return true
  })
  return accessedRouters;
}
export default router
