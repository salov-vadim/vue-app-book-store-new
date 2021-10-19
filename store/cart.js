export const state = () => ({
  cartItems: [],
  totalOrder: 0
})

export const getters = {
  getCartItems: ({cartItems}) => cartItems,
  getTotal: ({cartItems}) => cartItems.reduce((sum, current) => sum + current.price, 0),
  getTotalOrder: ({totalOrder}) => totalOrder
}

export const mutations = {
  addBookToCart(state, {image, description, price, currency}) {
    state.cartItems.push({image, description, price, currency})
  },

  setTotal(state, total) {
    state.totalOrder = total
    state.cartItems = []
  }
}
