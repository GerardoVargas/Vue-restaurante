import Vue from 'vue'
import Vuex from 'vuex'
import items from '../helpers/productos.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: items,
    shoppingCart: {}
  },
  mutations: {
    NEW_DISH(state, dishItem){
      state.products.push(dishItem)
    }
  },
  actions: {
    addNewDish({commit}, dishItem){
      commit('NEW_DISH', dishItem)
    }
  },
  modules: {
  },
  getters: {
    getProducts: (state) => {
      return state.products
    }
  }
})