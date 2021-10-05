import Vue from 'vue'
import Vuex from 'vuex'
import bookModule from "./bookModule";
import cartModule from "./cartModule";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    bookModule,
    cartModule
  }
})
