<template>
  <div>
    <HeaderTopNotification
      ref="headerTopNotification"
      v-if="isTopNotificationVisible"
    ></HeaderTopNotification>
    <div class="relative w-full h-auto">
      <header
        v-bind="$attrs"
        ref="header"
        class="
          header
          flex
          justify-center
          h-16
          fixed
          bg-primaryDark
          border-b border-gray
          w-full
          z-20
        "
        :class="{ 'top-0': !isHeaderOnTop }"
      >
        <div class="container items-center justify-between">
          <div class="flex items-center">
            <NuxtLink :to="'/'" class="pr-8 flex">
              <div class="">
                <img
                  class="w-40"
                  src="@/assets/img/logo/logo-main-transparent.svg"
                  alt="smurfs.lol logo"
                />
              </div>
            </NuxtLink>
            <div class="hidden font-barlow md:flex">
              <NuxtLink :to="'/'" class="pl-3 pr-3 duration-300 hover:text-text"
                >Home</NuxtLink
              >
              <!-- <div class="ml-3 mr-3 relative dropdown1" @mouseover="showServers = true" @mouseleave="showServers = false">
              <NuxtLink
                :to="{ path: '/', hash: '#products' }"
                v-scroll-to="'#products'"
                class="pr-1 duration-200 hover:text-text"
                >Buy Account</NuxtLink
              >
              <i class="fas fa-chevron-down text-xs"></i>
              <transition name="fade">
                <HeaderDropDownMenu v-show="showServers" :contentType="'smurfs'"></HeaderDropDownMenu>
              </transition>
            </div> -->
              <NuxtLink
                :to="{ path: '/', hash: '#products' }"
                v-scroll-to="'#products'"
                class="pl-3 pr-3 duration-200 hover:text-text"
                >Buy Account</NuxtLink
              >
              <NuxtLink
                :to="'/gifting-center'"
                class="pl-3 pr-3 duration-200 hover:text-text"
                >Gifting Center</NuxtLink
              >
              <a
                :href="this.$store.state.myContacts.discordServer"
                class="pl-3 pr-3 duration-200 hover:text-text"
                target="_blank"
              >
                Discord
              </a>
              <a
                class="pl-3 pr-3 duration-200 hover:text-text"
                @click="$store.commit('contactUsModal/toggle')"
                >Contact Us</a
              >
            </div>
          </div>
          <div
            @click="$store.commit('responsiveMenu/toggle')"
            class="
              flex
              items-center
              justify-center
              w-12
              h-full
              cursor-pointer
              md:hidden
            "
          >
            <i class="fas fa-bars text-xl"></i>
          </div>
        </div>
      </header>
    </div>
    <div class="pt-16"></div>
    <HeaderResponsiveMenu></HeaderResponsiveMenu>
  </div>
</template>

<script>
export default {
  props: {
    isTopNotificationVisible: {
      default: true,
      type: Boolean,
    },
  },
  data: function () {
    return {
      isHeaderOnTop: true,
      showServers: false,
    };
  },
  mounted() {
    if (this.isTopNotificationVisible) {
      this.setAbsolutePositions();
      this.scroll();
    }
  },
  methods: {
    scroll() {
      window.onscroll = () => {
        this.setAbsolutePositions();
      };
      window.onresize = () => {
        this.setAbsolutePositions();
      };
    },
    setAbsolutePositions() {
      if (window.pageYOffset > 0) {
        this.$refs.header.style.top = "0px";
        this.isHeaderOnTop = false;
      } else {
        this.$refs.header.style.top =
          this.$refs.headerTopNotification.$refs.headerTopNotification
            .clientHeight + "px";
        this.isHeaderOnTop = true;
      }
    },
  },
};
</script>
