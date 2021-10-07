export default {

  state: {
    cartItems: [],
    totalOrder: 0
  },

  getters: {
    getCartItems: (state) => state.cartItems,
    getTotal(state) {
      return state.cartItems.reduce((sum, current) => sum + current.price, 0)
    },
    getTotalOrder: ({totalOrder}) => totalOrder
  },

  mutations: {

    addBookToCart(state, book) {
      const newItemBook = {
        image: book.image,
        description: book.description,
        price: book.price,
        currency: book.currency
      }
      state.cartItems.push(newItemBook)
    },

    setTotal(state, total) {
      state.totalOrder = total
      state.cartItems = []
    }
  }
}
