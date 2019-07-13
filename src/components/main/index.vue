<template>
  <div style="height:100%;">
    <el-container style="height:100%">
      <el-header>
        <Header></Header>
      </el-header>
      <el-container>
        <el-aside width="201px">
          <Aside></Aside>
        </el-aside>
        <el-main class="main-content">
          <Main></Main>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import Header from './Header';
import Main from './Main';
import Aside from './Aside';

export default {
  components: {
    Header,
    Main,
    Aside
  },
  data() {
    return {
      
    }
  },
  methods: {
    
  }
}
</script>
<style >
  .el-header {
    padding:0 !important
  }
  .el-main {
    padding: 0 20px !important;
    background: #eee;
  }
</style>
