import axios from "axios";
import {getTransformBooks, apiBase} from "@/services/bookApiService";


export default {

  state: {
    books: [],
    currentBook: {
      image: '',
      description: 'https://brodilla.com/assets/images/browsers/pictures/epic_browser_1_2.png'
    },
    loading: false,
    searchText: '',
    dialogVisible: false,
    alert: false
  },

  getters: {
    getSearchBooks: ({books}) => books,
    getLoading: ({loading}) => loading,
    getSearchText: ({searchText}) => searchText,
    getDialogVisible: ({searchText}) => searchText,
    getCurrentBook: ({currentBook}) => currentBook,
    getAlert: ({alert}) => alert,
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
    },

    setCurrentBook(state, book) {
      state.currentBook = book
    },

    showAlert(state) {
      state.alert = true
    },

    hideAlert(state) {
      state.alert = false
    }
  },

  actions: {
    setBooks({commit}, text) {
      commit('setLoadingTrue')
      commit('setSearchText', text)
      axios.get(`${apiBase}${text}`)
        .then(res => {
          commit('setBooks', getTransformBooks(res.data.items))
          commit('setSearchText', text)
          commit('setLoadingFalse')
        })
        .catch((e) => {
          commit('setLoadingFalse')
          console.error(e)
        })
    },

    hideAlert({commit}) {
      setTimeout(() => {
        commit('hideAlert')
      }, 5000)
    }
  }
}