
import Main from '../components/main/index.vue'

const Index = r => require.ensure([],()=>r(require('@/views/index.vue')),'Index');
const Login = r => require.ensure([],()=>r(require('@/views/login.vue')),'Login');
const UserDetail = r => require.ensure([],()=>r(require('@/views/user/userDetail.vue')));
const UserList = r => require.ensure([],()=>r(require('@/views/user/userList.vue')));
const UserAdd = r => require.ensure([],()=>r(require('@/views/user/userAdd.vue')));

const routes = [
  {
    path:'/login',
    component: Login,
    name:'登陆',
    hidden:true,
  },
  {
    path:'',
    component: Main,
    redirect: '/index',
    code: '1000',
    children:[{
      code: '1001',
      path:'/index',
      name:"首页",
      component: Index
    }]
  },
  {
    path:'/user',
    component: Main,
    hidden:true,
    children:[{
        path:'/user/userDetail',
        name:'用户详情',
        component: UserDetail,
        meta: {
          pathName:'用户管理-用户列表-用户详情',
        }
      }]
  },
    {
      path:'userManage',
      name:'用户管理',
      code: '1100',
      component: Main,
      children:[{
        code: '1101',
        path:'/userList',
        name:'用户列表',
        component: UserList,
      },{
        code: '1102',
        path:'/userAdd',
        name:'添加用户',
        component: UserAdd
      }],
    },
    {
      path: '',
      name:'',
      code: '1200',
      component: Main,
      children: [{
        code: '1201',
        path: '/about',
        name: '关于我们',
        component: () => import('../views/about.vue')
      }]
    }
  ]
export default  routes;

