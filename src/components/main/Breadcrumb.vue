<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item v-for="item in levelList" :key="item.path">
        <span  class="no-redirect">{{ item.name }}</span>
      </el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script>

export default {
  data() {
    return {
      levelList: []
    }
  },
  watch: {
    $route() {
      this.getBreadcrumb()
    }
  },
  created() {
    this.getBreadcrumb()
  },
  methods: {
    getBreadcrumb() {
      let matched = this.$route.matched.filter(item => item.name)
      const first = matched[0];
      if (!first.name || first.name != '首页') {
        if (first.meta && first.meta.pathName) {
          let pathNameArr = first.meta.pathName.split('-');
          matched = [{ path: '/index', name: '首页'}]
          for (let i=0;i<pathNameArr.length;i++) {
            let pathObj = {
              path: i,
              name: pathNameArr[i]
            }
            matched.push(pathObj)
          }
        } else {
          matched = [{ path: '/index', name: '首页'}].concat(matched)
        }
      }
      this.levelList = matched.filter(item => item)
    },
  }
}
</script>

