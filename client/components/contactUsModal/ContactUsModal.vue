<template>
  <div
    @click.self="$store.commit('contactUsModal/toggle')"
    v-if="this.$store.state.contactUsModal.isActive"
    class="flex fixed overlay z-50"
  >
    <div
      class="
        relative
        max-w-md
        w-full
        bg-secondary
        border border-gray
        rounded-main
        flex flex-col
        items-center
        p-7
        xs:p-9
        ml-3
        mr-3
      "
    >
      <div
        @click="$store.commit('contactUsModal/toggle')"
        class="
          flex
          absolute
          justify-center
          items-center
          right-0
          top-0
          w-12
          h-12
          cursor-pointer
        "
      >
        <i class="fas fa-times text-2xl"></i>
      </div>
      <div
        class="
          text-2xl
          font-barlow font-semibold
          tracking-wide
          text-left
          w-full
        "
      >
        Contact us
      </div>
        <div
          class="
            text-base text-left
            font-barlow
            text-text
            font-semibold
            w-full
            pt-2
            pb-5
          "
        >
          <!-- You can always contact us with 24/7 chat at the bottom right. -->
          You can always contact us in any way
        </div>
      <a
        :href="this.$store.state.myContacts.discordServer"
        target="blank"
        class="
          primaryButton
          bg-discord
          hover:bg-discordDark
          h-10
          w-full
          font-barlow
        "
      >
        <i class="fab fa-discord pr-1"></i>{{this.$store.state.myContacts.discordProfile}}
      </a>
      <a
        :href="`skype:${this.$store.state.myContacts.skype}?add`"
        target="blank"
        class="
          primaryButton
          bg-skype
          hover:bg-skypeDark
          h-10
          mt-3
          w-full
          font-barlow
        "
        ><i class="fab fa-skype pr-1"></i>{{this.$store.state.myContacts.skype}}</a
      >
      <div
        class="
          text-base
          font-barlow
          text-text
          font-semibold
          text-left
          pt-4
          w-full
        "
      >
        Or contact us at
        <a
          :href="`mailto:${this.$store.state.myContacts.email}`"
          class="text-whiteDarker duration-300 hover:text-white"
          >{{this.$store.state.myContacts.email}}</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
