export const state = () => ({
  isActive: false,
  newsletter: false,
  order: {
    quantity: 1,
    smurf: ""
  },
  notification: {
    status: "",
    text: "",
  },
})

export const getters = {
  cart: state => state,
  order: ({ order }) => order,
  notification: ({ notification }) => notification,
}

export const mutations = {
  toggle(state) {
    state.isActive = !state.isActive
    // Сброс к значениям по умолчанию
    state.order.quantity = 1
  },
  setSmurf({ order }, smurf) {
    order.smurf = smurf
  },
  increaseQuantity({ order }) {
    order.quantity++;
  },
  decreaseQuantity({ order }) {
    if (order.quantity > 1) {
      order.quantity--;
    }
  },
  toggleNewsletter(state) {
    state.newsletter = !state.newsletter
  }
}
