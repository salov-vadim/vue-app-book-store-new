import Vue from 'vue'
import Vuex from 'vuex'
import book from "./book";
import cart from "./cart";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {book, cart}
})
