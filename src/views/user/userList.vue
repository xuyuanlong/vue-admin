<template>
  <div class="content">
      <el-form :inline="true" :model="query" class="demo-form-inline">
  <el-form-item label="姓名/手机">
    <el-input v-model="query.user" placeholder="姓名或手机号"></el-input>
  </el-form-item>
<!--   <el-form-item label="活动区域">
    <el-select v-model="query.region" placeholder="活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item> -->
  <el-form-item>
    <el-button type="primary" @click="search">查询</el-button>
  </el-form-item>
</el-form>
  <el-table
    :data="tableData"
    style="width: 100%">
    
    <el-table-column label="名字" prop="name"></el-table-column>
    <el-table-column label="手机号" prop="phone"></el-table-column>
    <el-table-column label="年龄" prop="age"></el-table-column>

    <el-table-column
      align="right">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [],
        query: {
          user: '',
          region: ''
        }
      }
    },
    mounted:function(){
      this.getData();
    },
    methods: {
      search() {

      },
      getData() {
        this.$http.post('/api/user/list',{}).then((data)=> {
          if(data.data.result) {
            this.tableData = data.data.result;
          }
        })
      },
      handleEdit(index, row) {
        console.log(row)
        this.$router.push({
          path: '/userAdd',
          query:{
            _id: row._id
          }
        })
      },
      handleDelete(index, row) {
         this.$confirm('确定要删除此用户么?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$http.post('/api/user/remove',{
            id: row._id
          }).then((res)=>{
              if(res.data && res.data.code == 0) {
                this.$message({
                  type: 'success',
                  message: '删除成功!'
                });
                this.tableData.splice(index, 1);
              }
            })
        })
      }
    },
  }
</script>