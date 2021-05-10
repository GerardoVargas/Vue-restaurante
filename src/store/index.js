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
    NEW_PRODUCT({state}, new_cart_product){
      state.shoppingCart.push(new_cart_product)
    }
  },
  actions: {
    addProductCart({commit}, new_cart_product){
      commit('NEW_PRODUCT', new_cart_product)
    }
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