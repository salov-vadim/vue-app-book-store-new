import axios from "axios";

export default {
  state: {
    books: [],
    loading: false,
    searchText:''
  },
  getters:{
    getSearchBooks(state) {
      return state.books
    },
    getLoading(state) {
      return state.loading
    },
    getSearchText: ({searchText}) => searchText,

  },
  mutations: {
    setBooks(state, payload) {
      state.books = payload
    },
    setLoadingTrue(state) {
      state.loading = true
    },
    setLoadingFalse(state) {
      state.loading = false
    },
    setSearchText(state, payload) {
      state.searchText = payload
    }


  },
  actions: {
    setBooks({commit}, text) {
      commit('setLoadingTrue')
      setTimeout(() => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${text}`)
          .then(res => {
           commit('setBooks', res.data.items)
            commit('setSearchText', text)
            commit('setLoadingFalse')
          })
          .catch(() => commit('setLoadingFalse'))
      }, 500)
    }
  }
}