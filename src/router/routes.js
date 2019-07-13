import Home from '../views/Home.vue'
import Main from '../components/main/index.vue'

const UserList = () => import('../views/user/userList.vue');
const UserAdd = () => import('../views/user/userAdd.vue')

const routes = [
    {
      path: '/',
      name: 'main',
      component: Main,
      meta: {
        title: '主页',
        hideMenu: true
      }
    },
    {
      path:'',
      name:'userManage',
      component: Main,
      children:[{
        path:'/userList',
        name:'userList',
        component: UserList
      },{
        path:'/userAdd',
        name:'userAdd',
        component: UserAdd
      }]
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        title: '主页',
        hideMenu: true
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue')
    }
  ]
export default  routes;

