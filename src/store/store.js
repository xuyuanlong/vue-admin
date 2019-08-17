import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navList: [],
    slideOpen:true
  },
  mutations: {
    setNavList(state,payload) {
      state.navList = payload.navList
    },
    setSlideStatus(state,payload) {
      state.slideOpen = payload
    }
  },
  actions: {

  }
})
