
import Main from '../components/main/index.vue'

// const UserList = () => import('../views/user/userList.vue');
// const UserAdd = () => import('@/views/user/userAdd.vue')
const Index = r => require.ensure([],()=>r(require('@/views/index.vue')),'Index');
const UserAdd = r => require.ensure([],()=>r(require('@/views/user/userAdd.vue')),'UserAdd');
const UserList = r => require.ensure([],()=>r(require('@/views/user/userList.vue')),'UserList');
const Login = r => require.ensure([],()=>r(require('@/views/login.vue')),'Login');
const UserDetail = r => require.ensure([],()=>r(require('@/views/user/userDetail.vue')));

const routes = [
  {
    path:'/login',
    component: Login,
    name:'登陆'
  },
  {
    path:'',
    component: Main,
    redirect: '/index',
    children:[{
      path:'/index',
      name:"首页",
      component: Index
    }]
  },
    {
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
export default  routes;

