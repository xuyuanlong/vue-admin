<template>
  <div class="header">
    <el-row type='flex' justify="space-between" style="height:40px" align='middle'>
      <el-col :span="12">
        <div class="head-left">
          <!-- <img src="../../assets/index/logo.png" alt="logo"> -->
          <span class="mar5">灵犀群助手</span>
          <i class="el-icon-s-operation" @click="toggleMenu"></i>
        </div>
        
      </el-col>
          
      <el-col :span="12" style="text-align:right;padding-right:20px;">
        <!-- <i class="el-icon-setting"></i> -->
          <span class="mar5">意见反馈</span>
          <!-- <div class="headImg" ></div> -->
          <span class="mar5">1212121</span>
          <span class="exitBtn" @click="exit"><i class="el-icon-switch-button"></i>退出</span>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import {mapState} from 'vuex'
import state from '@/store/store'
export default {

  data() {
    return {
      
    }
  },
  computed:{
    ...mapState({
      slideOpen:(state)=> state.slideOpen
    })
  },
  methods: {
    exit() {
      this.$http.post('/api/user/lgnout',{}).then((res)=>{
        if (res.data && res.data.code === 0) {
          this.$router.push('/login');
        }
      })
      
    },
    toggleMenu() {
      state.commit('setSlideStatus',!this.slideOpen)
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
  .head-left {
    text-align:left;
    margin-left:20px;
    font-size:16px;
    font-weight:bold;
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