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
              <div class="bread">
                <Breadcrumb></Breadcrumb>
              </div>
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
import Breadcrumb from './Breadcrumb';

export default {
  components: {
    Header,
    Main,
    Aside,
    Breadcrumb
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
    .bread {
    padding: 15px 0;
    text-align: left;
    background: #eee;
  }
  .el-main {
    padding: 0 20px !important;
    background: #eee;
  }
</style>
