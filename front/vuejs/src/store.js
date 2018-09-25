import Vue from 'vue'
import Vuex from 'vuex'
import api from './api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null
  },
  getters: {
    user: state => {
      return state.user
    }
  },
  mutations: {
    storeUser (state, user) {
      state.user = user
    }
  },
  actions: {
    async createUser ({ commit }, user) {
      try {
        let response = await api.createUser(user)
        commit('storeUser', response.data)
      } catch (error) {
        throw error
      }
    },
    async login ({ commit }, loginObject) {
      try {
        let response = await api.login(loginObject)
        commit('storeUser', response.data)
        return response.data
      } catch (error) {
        throw error
      }
    }
  }
})
