<template>
  <div style="margin-top:100px;width:100%;text-align:cneter">
      用户名<input type="text">
      密码<input type="password">
      <button @click="login()">登陆</button>
  </div>
</template>
<script>
import { log } from 'util';
export default {
  data(){
    return{

    }
  },
  methods:{
    login() {
      this.$http.post('https://www.easy-mock.com/mock/5d36779da5ab5f6106d524a1/api/menuList').then((data)=>{
        console.log(data);
        // this.romoteRoutes(data)
        this.$router.push('/')
      })
      
    },
  }
}
</script>