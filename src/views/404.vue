<template>
  <div>
      404
      <button @click="backIndex">回到首页</button>
  </div>
</template>
<script>
export default {
  data(){
    return {}
  },
  methods:{
    backIndex() {
      console.log(this.$router)
      this.$router.replace('/index')
    }
  }
}
</script>