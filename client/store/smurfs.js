export const state = () => ({
  smurfs: [],
  isSmurfsLoaded: false,
})

export const mutations = {
  loadSmurfs(state, smurfs) {
    state.smurfs = smurfs
  },
}

export const actions = {}
