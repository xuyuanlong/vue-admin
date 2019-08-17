<template>
  <div style="margin-top:100px;width:100%;text-align:cneter">
      用户名<input type="text" v-model="phone">
      密码<input type="password" v-model="password">
      <button @click="login()">登陆</button>
  </div>
</template>
<script>
// import { log } from 'util';
import crypto from 'crypto'
export default {
  data(){
    return{
      phone:'',
      password: ''
    }
  },
  methods:{
    login() {
      const md5 = crypto.createHash('md5')
      md5.update(this.password)
      let md5password = md5.digest('hex')
      this.$http.post('/api/user/login',{
        phone: this.phone,
        password: md5password
      }).then((res)=>{
        if (res.data.code === 0) {
          this.$router.replace('/')
        }
      })
    },
  }
}
</script>