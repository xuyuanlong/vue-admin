<template>
  <el-menu
    class="el-menu-vertical-demo main-menu"  @open="handleOpen" @close="handleClose" :collapse="slideOpen" background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <template v-for="item in navList">
        <el-submenu v-if="item.path" :index="item.code"  >
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{item.name}}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item @click="toMain(itemSub.path)" v-for="itemSub in item.children" :index="itemSub.code">{{itemSub.name}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item v-else @click="toMain(item.children[0].path)" :index="item.children[0].code">
        <i class="el-icon-menu"></i>
        <span slot="title">{{item.children[0].name}}</span>
      </el-menu-item>
      </template>
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
    console.log(this.navListFilter)
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