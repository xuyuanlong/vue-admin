<template>
  <el-menu
    class="el-menu-vertical-demo main-menu" >
    <div :key="item.code" v-for="item in navList">
        <template v-if="!item.meta">
          <el-submenu v-if="item.children" :index="item.code">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{item.name}}</span>
            </template>
            <el-menu-item-group  >
              <el-menu-item @click="toMain(item2.path)" :key="item2.code" v-for="item2 in item.children" :index="item2.code">{{item2.name}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item v-else @click="toMain(item.path)" :index="item.code">
            <i class="el-icon-menu"></i>
            <span slot="title">{{item.name}}</span>
          </el-menu-item>
        </template>
    </div>
  </el-menu>
</template>
<script>
import { constants } from 'crypto';
import { mapState } from 'vuex'
export default {
  data(){
    return{
      
    }
  },
  computed:{
    ...mapState({
      navList: state => state.navList,
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
<style>
  .main-menu {
    height: 100%;
  }
</style>