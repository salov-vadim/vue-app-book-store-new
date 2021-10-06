export default {
  state: {
    cartItems:[],
    total:0
  },
  getters: {
    getCartItems: (state) => state.cartItems,
    getTotal(state) {
      return state.cartItems.reduce((sum, current) => sum + current.price, 0)
    }
  },
  mutations: {
    addBookToCart(state, book) {
      const newItemBook = {
        image: book.volumeInfo.imageLinks.smallThumbnail,
        description:book.volumeInfo.description,
        price:  book.saleInfo.listPrice.amount

      }
      state.cartItems.push(newItemBook)
    },
    setTotal(state, total){
      state.total = total
      state.cartItems = []
    }
  }
}
