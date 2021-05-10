import Vue from 'vue'
import Vuex from 'vuex'
import items from '../helpers/productos.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: items,
    shoppingCart: []
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getProducts: (state) => {
      return state.products
    },
    checkCart: (state) => {
      return state.shoppingCart
    }
  }
})