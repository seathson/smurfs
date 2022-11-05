<template>
  <div
    ref="headerTopNotification"
    class="
      sm:flex
      hidden
      justify-center
      items-center
      pb-3
      pt-3
      text-sm
      w-full
      headerTopNotification
      bg-black
    "
  >
    <div class="container justify-between items-center flex-nowrap">
      <span class="text-white"
        >🎁 Join our discord for regular giveaways and access to our Gifting
        Store to buy Riot Points 50% cheaper!</span
      >
      <a
        :href="this.$store.state.myContacts.discordServer"
        target="_blank"
        class="
          text-sm
          primaryButton
          whitespace-nowrap
          bg-discord
          hover:bg-discordDark
          rounded-main
          h-auto
          flex
          ml-4
          pt-1
          pb-1
          duration-200
        "
        ><i class="fab fa-discord pr-1"></i
        ><span>Join to our community</span></a
      >
    </div>
  </div>
  <!-- <div></div> -->
</template>
