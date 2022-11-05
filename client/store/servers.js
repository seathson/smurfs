export const state = () => ({
  currentServer: 'NA',
  servers: []
})

export const mutations = {
  setServer(state, value) {
    state.currentServer = value
  },
  loadServers(state, value) {
    state.servers = value
  }
}

export const getters = {
  // Надо чекать сток будет, а не просто длину смурфа на серве
  getServersWithSmurfs: (state) => {
    let serversWithSmurfs = [];
    for (let i = 0; i < state.servers.length; i++) {
      if (state.servers[i].smurfs.length > 0) {
        serversWithSmurfs.push(state.servers[i]);
      }
    }
    return serversWithSmurfs
  }
}

export const actions = {}
