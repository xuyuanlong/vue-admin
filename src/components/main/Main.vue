<template>
  <div class="main" id="main">
     <transition :name="transitionName">
       <router-view style="margin-top：10px"></router-view>
     </transition>
  </div>
</template>
<script>

export default {
  data() {
    return {
      transitionName:''
    }
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  },
  methods: {

  }
}
</script>
<style slot-scope>
  .main{
    background: #fff;
    height: 100%;
  }

  .fade-enter {
    opacity: 0;
  }
  .fade-leave {
    opacity: 1;
  }
  .fade-enter-active {
    transition: opacity .5s;
  }
  .fade-leave-active {
    opacity: 0;
    transition: opacity .5s;
  }
</style>