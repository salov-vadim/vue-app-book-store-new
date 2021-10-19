import { getTransformBooks, apiBase } from '~/services/bookApiServices'

export const state = () => ({
  books: [],
  currentBook: {
    image:
      'https://brodilla.com/assets/images/browsers/pictures/epic_browser_1_2.png',
    description: '',
  },
  loading: false,
  searchText: '',
  alert: false,
})

export const getters = {
  getSearchBooks: ({ books }) => books,
  getLoading: ({ loading }) => loading,
  getSearchText: ({ searchText }) => searchText,
  getCurrentBook: ({ currentBook }) => currentBook,
  getAlert: ({ alert }) => alert,
}

export const mutations = {
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
  },

  cleanSearch(state) {
    state.searchText = ''
    state.books = []
  },
}

export const actions = {
  async setBooks({ commit }, text) {
    commit('setLoadingTrue')
    commit('setSearchText', text)
    this.$axios
      .get(`${apiBase}${text}`)
      .then((res) => {
        commit('setBooks', getTransformBooks(res.data.items))
        commit('setLoadingFalse')
      })
      .catch((e) => {
        commit('setLoadingFalse')
        console.error(e)
      })
    // const books = await this.$axios.get(`${apiBase}${text}`)
    // commit('setBooks', getTransformBooks(books.data.items))
    // commit('setLoadingFalse')
  },

  hideAlert({ commit }) {
    setTimeout(() => {
      commit('hideAlert')
    }, 5000)
  },
}
