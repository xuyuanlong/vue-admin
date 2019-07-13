<template>
  <div>
      用户列表
  </div>
</template>
<script>
export default {
  data() {
    return{
      
    }
  },
  mounted() {
    this.$http.post('/api/platform/NB/retrieveLink',{
      startTime: "2019-07-13 00:00:00", 
      endTime: "2019-07-13 23:59:59", 
      businessId: "130100000000"
    })
  },
  methods: {

  }
}
</script>