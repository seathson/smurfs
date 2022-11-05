export const state = () => ({
  discordProfile: '',
  discordServer: '',
  skype: '',
  email: '',
})

export const mutations = {
  setDiscordProfile(state, value) {
    state.discordProfile = value
  },
  setDiscordServer(state, value) {
    state.discordServer = value
  },
  setSkype(state, value) {
    state.skype = value
  },
  setEmail(state, value) {
    state.email = value
  }
}
