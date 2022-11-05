export const state = () => ({
  email: ""
})

export const getters = {
  customer: state => state,
}

export const mutations = {
  updateEmail(state, value) {
    state.email = value
  },
}
