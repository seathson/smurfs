export const state = () => ({
  maintenance: false,
  maxSmurfsCheckout: 10,
})

export const mutations = {
  setMaintenance(state, value) {
    state.maintenance = value;
  },
  setMaxSmurfsCheckout(state, value) {
    state.maxSmurfsCheckout = value;
  }
}
