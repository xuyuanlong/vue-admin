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
      log(123)
      localStorage.setItem('romoteRoutes','');
      this.$router.push('/')
    },
  }
}
</script>