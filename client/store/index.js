export const actions = {
  async nuxtServerInit({ commit }, { req }) {
    // myContact
    let myContactResponse = this.$axios.$get("/my-contact").catch(error => {
      console.log("request to my-contact from store/index.js file failed");
      console.log(error);
    })
    // global
    let globalResponse = this.$axios.$get("/global").catch(error => {
      console.log("request to my-contact from store/index.js file failed");
      console.log(error);
    })

    let myContact = await myContactResponse;
    let global = await globalResponse;

    if (myContact && global) {
      //myContact
      commit('myContacts/setDiscordProfile', myContact.data.attributes.discordProfile);
      commit('myContacts/setDiscordServer', myContact.data.attributes.discordServer);
      commit('myContacts/setSkype', myContact.data.attributes.skype);
      commit('myContacts/setEmail', myContact.data.attributes.email);
      //global
      commit('global/setMaintenance', global.data.attributes.maintenance);
      commit('global/setMaxSmurfsCheckout', global.data.attributes.maxSmurfsCheckout);
    }

  }
}
