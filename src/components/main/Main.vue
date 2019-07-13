<template>
  <div class="main">
    <div class="bread">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
     <transition name="el-fade-in">
       <router-view style="margin-top：10px"></router-view>
     </transition>
    
  </div>
</template>
<script>

export default {
  data() {
    return {
    }
  },
  methods: {

  }
}
</script>
<style >
  .main {
    background: #fff;
    height: 100%;
  }
  .bread {
    padding: 15px 0;
    text-align: left;
    background: #eee;
  }
</style>