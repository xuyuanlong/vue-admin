<template>
  <div class="content">
    <table id="table" ></table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        query: {
          user: '',
          region: ''
        }
      }
    },
    mounted:function(){
      //记录页面bootstrap-table全局变量$table，方便应用
      var queryUrl = '/TestUser/FindWithPager?rnd=' + Math.random()
      $('#table').bootstrapTable({
          url: queryUrl,                      //请求后台的URL（*）
          method: 'POST',                      //请求方式（*）
          pagination: true,                   //是否显示分页（*）
          sidePagination: "server",           //
          pageNumber: 1,                      //初始化加载第一页，默认第一页,并记录
          pageSize: 10,                     //每页的记录行数（*）
          pageList: [10, 25, 50, 100],        //可供选择的每页的行数（*）
          //得到查询的参数
          queryParams : function (params) {
              //这里的键的名字和控制器的变量名必须一致，这边改动，控制器也需要改成一样的
              var temp = {   
                  rows: params.limit,                         //页面大小
                  page: (params.offset / params.limit) + 1,   //页码
              };
              return temp;
          },
          columns: [{
              field: 'Name',
              title: '姓名',
              align:'center'
          }, {
              field: 'Mobile',
              title: '手机',
              align:'center'
          },{
              field: 'Mobile',
              title: '操作',
              align:'center'
          }]
      })
    },
    methods: {
    }
  }
</script>