import Vue from 'vue'
import Vuex from 'vuex'
import ConnectorService from '@/Services/ConnectorService.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    iirdsPackages: []
  },
  mutations: {
    addPackage (e) {
      this.iirdsPackages.push({ name: e.target.value })
      e.target.value = ''
    },
    SET_PACKAGES (state, data) {
      state.iirdsPackages = data
    }
  },
  actions: {
    fetchPackages ({ commit }) {
      ConnectorService.getPackages().then(({ data }) => commit('SET_PACKAGES', data))
    }
  },
  getters: {
    activeIirdsPackages: (state) => {
      return state.iirdsPackages
    }
  }
})
