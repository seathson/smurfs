<template>
  <div>
    <Header></Header>
    <section class="w-full flex justify-center pt-10 pb-20">
      <div class="container flex-col items-center">
        <picture class="xs:w-6/12 md:w-96">
          <source srcset="~/assets/img/webp/loot-mwchest-min.webp" type="image/webp" />
          <source srcset="~/assets/img/loot-mwchest-min.png" type="image/png" />
          <img src="~/assets/img/PhaseRush-min.png" alt="lol phase rush" />
        </picture>
        <div class="sectionTitle pt-10">Riot Points Gifting Store</div>
        <p class="subTitle tracking-wider leading-relaxed">
          The cheapest way to buy League of Legends Riot Points.<br />Approximate
          50% OFF.
        </p>
        <a
          :href="this.$store.state.myContacts.discordServer"
          target="_blank"
          class="
            discord_highlight
            primaryButton
            bg-discord
            hover:bg-discordDark
            duration-200
            mt-7
          "
        >
          JOIN TO THE DISCORD SERVER
        </a>
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>

<router>
  {
    path: '/gifting-center'
  }
</router>

<script>
export default {
  head: {
    title: "Gifting Center | Smurfs LOL",
    meta: [
      {
        name: "description",
        content: "The cheapest way to buy RP in League of Legends",
      },
    ],
  },
};
</script>
