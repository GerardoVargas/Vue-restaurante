import Vue from 'vue'
import Vuex from 'vuex'
import items from '../helpers/productos.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productos: items
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getProducts: state => {
      return state.productos
    }
  }
})