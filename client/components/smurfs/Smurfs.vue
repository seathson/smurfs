<template>
  <ul>
    <SmurfsSmurf
      v-for="smurf in list"
      :key="smurf.id"
      :smurf="smurf"
    ></SmurfsSmurf>
    <li
      class="font-bold text-error text-center"
      v-if="this.list.length == 0"
    >
      At the moment there is no available accounts in selected region. Please,
      select another region or visit website later.
    </li>
  </ul>
</template>

<script>
export default {
  async fetch() {
    const smurfs = await this.$axios.$get("/smurfs");
    let bottedSmurfs = [];
    let handleveledSmurfs = [];

    // Отбор только валидных смурфов для дальнейшего использования
    // smurf.server == проверка, что в strapi у smurf сущности указана связь с каким-либо сервером
    const validatedSmurfs = smurfs.filter((smurf) => smurf.server != null);

    // Сортировка по цене
    let smurfsSortedByPrice = validatedSmurfs.sort(
      (a, b) => a.originalPrice - b.originalPrice
    );

    // Сортировка на Botted и Handleveled
    smurfsSortedByPrice.forEach(function (item) {
      if (item.levelingType == "botted") {
        bottedSmurfs.push(item);
      }
      if (item.levelingType == "handleveled") {
        handleveledSmurfs.push(item);
      }
    });

    // В зависимости от того, что с чем конкатанировать меняется порядок отображения
    // Смурфов на странице, либо сначала botted, либо сначала handleveled
    this.$store.commit("smurfs/loadSmurfs", bottedSmurfs.concat(handleveledSmurfs));
  },
  computed: {
    list() {
      return this.$store.state.smurfs.smurfs.filter(
        (smurf) =>
          smurf.server.acronym === this.$store.state.servers.currentServer
      );
    },
  },
};
</script>
