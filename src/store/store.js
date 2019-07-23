import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navList: []
  },
  mutations: {
    setNavList(state,payload) {
      state.navList = payload.navList
    }
  },
  actions: {

  }
})
