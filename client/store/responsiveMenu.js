export const state = () => ({
  isActive: false
})

export const mutations = {
  toggle(state) {
    state.isActive = !state.isActive
  }
}
