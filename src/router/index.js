import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import axios from 'axios';
import store from '../store/store'
import Main from '../components/main/index.vue'

const Index = r => require.ensure([],()=>r(require('@/views/index.vue')),'Index');
const UserAdd = r => require.ensure([],()=>r(require('@/views/user/userAdd.vue')),'UserAdd');
const UserList = r => require.ensure([],()=>r(require('@/views/user/userList.vue')),'UserList');
const Login = r => require.ensure([],()=>r(require('@/views/login.vue')),'Login');
const UserDetail = r => require.ensure([],()=>r(require('@/views/user/userDetail.vue')));

Vue.use(Router)
let mainRoutes= [{
  path:'userManage',
  name:'用户管理',
  component: Main,
  children:[{
    path:'/userList',
    name:'用户列表',
    component: UserList,
    children:[{
      path:'/userDetail',
      name:'用户详情',
      component: UserDetail
    },]
  },{
    path:'/userAdd',
    name:'添加用户',
    component: UserAdd
  }],
},
{
  path: '',
  name:'',
  component: Main,
  children: [{
    path: '/about',
    name: '关于我们',
    component: () => import('../views/about.vue')
  }]
}
]

let routes2 = routes.concat(mainRoutes)
console.log(routes2);

const router =  new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
  // ...MainRoutes
})
let routeArr = []
router.beforeEach((to,from,next)=>{
  if (!routeArr.length) {
    axios.post('https://www.easy-mock.com/mock/5d36779da5ab5f6106d524a1/api/menuList').then((data)=>{
      getRoutes(data)
    })
    next()
  }
  next()
})
store.commit('setNavList',{
  navList: [{
    path:'/',
    name: '首页',
    meta: {
      hideMenu:true
    }
  },{
    path:'user',
    name:'用户管理',
    code: '0011',
    children:[{
      path:'/userList',
      code: '001',
      name:'用户列表'
    },{
      path:'/userAdd',
      code: '002',
      name:'创建用户'
    }]
  },{
    path: '/about',
    code:'003',
    name:'关于我们'
  }]
})
function getRoutes(data) {
  if (data && data.length) {
    console.log(routeArr)
    routeArr = data.filter((item)=> {
      if (item.component == 'Main') {
        item.component = Main
      } else {
        item.component = () => import('@/views/'+item.component)
      }
      if (item.children && item.children.length) {
        getRoutes(item.children)
      }
    })
    console.log(routeArr)
  }
}

// console.log(routeArr)

// let serveRouter;
// router.beforeEach((to,from,next)=>{
//   if (!serveRouter) {
//     if (!getLocalRoutes()) {
//       axios.post('https://www.easy-mock.com/mock/5d36779da5ab5f6106d524a1/api/menuList').then((data)=>{
//         serveRouter = data//后台拿到路由
//         setLocalRoutes('localRoutes', serveRouter) //存储路由到localStorage
//         // routerGo(to, next)//执行路由跳转方法
//         console.log(serveRouter)
//         filterAsyncRouter(serveRouter)
//         next()
//       })
//     } else {
//       console.log(serveRouter)
//       filterAsyncRouter(serveRouter)
//       serveRouter = getLocalRoutes('localRoutes')//拿到路由
//       next()
//       // routerGo(to, next)
//     }
//   } else {
//     next()
//   }
  
//   next();
// })

// // function routerGo(to, next) {
// //    //过滤路由
// //   router.addRoutes(serveRouter) //动态添加路由
// //   global.antRouter = serveRouter //将路由数据传递给全局变量，做侧边栏菜单渲染工作
// //   next({ ...to, replace: true })
// // }

// function setLocalRoutes(data) {
//   localStorage.setItem('localRoutes',JSON.stringify(data))
// }

// function getLocalRoutes() {
//   return JSON.parse(localStorage.getItem('localRoutes'))
// }
// function filterAsyncRouter(asyncRouterMap) { //遍历后台传来的路由字符串，转换为组件对象
//   const accessedRouters = asyncRouterMap.filter((route) => {
//     if (route.component) {
//       if (route.component === 'Main') {//Layout组件特殊处理
//         route.component = Main
//       } else {
//         route.component = _import('@/views/'+route.component)
//       }
//     }
//     if (route.children && route.children.length) {
//       route.children = filterAsyncRouter(route.children)
//     }
//     return true
//   })

//   return accessedRouters
// }
// console.log(accessedRouters)
export default router
