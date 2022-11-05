<template>
  <ul>
    <li
      v-for="server in this.$store.state.servers.servers"
      :key="server.id"
      class="flex items-center justify-start mt-2 mb-2"
    >
      <div @click="$store.commit('servers/setServer', server.acronym)">
        <NuxtLink
          :to="{ path: '/', hash: '#products' }"
          class="flex justify-start hover:text-text duration-200"
        >
          <img :src="getServerImage(server.acronym)" class="h-8 pr-1" />
          <div class="flex items-center">
            {{ server.name }}
          </div>
        </NuxtLink>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  mounted() {
    console.log(this.$store.state.smurfs.smurfs);
  },
  methods: {
    getServerImage(server) {
      return require(`~/assets/img/servers/${server}.png`);
    },
  },
};
</script>
