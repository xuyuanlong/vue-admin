<template>
  <el-menu
    class="el-menu-vertical-demo main-menu"  @open="handleOpen" @close="handleClose" :collapse="slideOpen">
      <el-submenu :index="item.name" :key="item.name" v-for="item in navListFilter">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{item.name}}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item @click="toMain(item2.path)" :key="item2.name" v-for="item2 in item.children" :index="item2.name">{{item2.name}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item v-for="item in navListFilter" :key="item.children[0].name"  @click="toMain(item.children[0].path)" :index="item.children[0].name">
        <i class="el-icon-menu"></i>
        <span slot="title">{{item.children[0].name}}</span>
      </el-menu-item>
  </el-menu>
</template>

<script>
import { constants } from 'crypto';
import { mapState } from 'vuex'
import { log } from 'util';
export default {
  data(){
    return{
      
    }
  },
  computed:{
    navListFilter: function() {
      return this.navList.filter(function(item) {
        return item.children && item.name
      })
    },
    navListFilter2:function() {
      return this.navList.filter(function(item) {
        return !item.children ||  !item.name
      })
    },
    ...mapState({
      navList: state => state.navList,
      slideOpen: state => state.slideOpen
    })
  },
  mounted() {
  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
    toMain(path) {
      this.$router.push(path)
    }
  }
}
</script>
<style language="less">
  .main-menu {
    height: 100%;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>