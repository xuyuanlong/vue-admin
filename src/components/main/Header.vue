<template>
  <div class="header">
    <el-row type='flex' justify="space-between" style="height:60px" align='middle'>
      <el-col :span="12">
        <div style="text-align:left;margin-left:20px;"><img src="../../assets/index/logo.png" alt="logo"></div>
      </el-col>
          
      <el-col :span="12" style="text-align:right;padding-right:20px;">
          
          <span class="mar5"><i class="el-icon-setting"></i>系统设置</span>
          <span class="mar5">|</span>
          <div class="headImg" ></div>
          <span class="mar5">张三</span>
          <span class="mar5">|</span>
          <span class="exitBtn" @click="exit"><i class="el-icon-switch-button"></i>退出</span>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {

  data() {
    return {
    }
  },
  computed:{
    
  },
  methods: {
    exit() {
      localStorage.setItem('romoteRoutes','')
      this.$router.push('/login')
    }
  }
}
</script>
<style>
  .mar5 {
    margin-right: 20px;
  }
  .header {
    background: #545C64;
    color: #fff;
    font-size: 14px;
  }
  .headImg {
    vertical-align:middle;
    display:inline-block;
    height:35px;
    width:35px;
    margin-right: 5px;
    border-radius:50%;
    background: url('../../assets/index/header.png') no-repeat center;
    background-size: cover;
  }
  .exitBtn {
    color: rgb(96, 176, 255);
    cursor: pointer;
  }
    
</style>