<template>
  <div>
    <div
      class="overlay"
      @click.self="$store.commit('responsiveMenu/toggle')"
      :class="{ flex_important: $store.state.responsiveMenu.isActive }"
    ></div>
    <div
      v-bind="$attrs"
      :class="{
        responsiveMenu_active: $store.state.responsiveMenu.isActive,
      }"
      class="responsiveMenu"
    >
      <div class="flex flex-col items-center pl-4 pr-4 pt-7 w-full">
        <img
          class="w-4/5"
          src="@/assets/img/logo/logo-main-transparent.svg"
          alt="smurfs.lol logo"
        />
        <div class="flex flex-col w-full pt-6 items-center">
          <NuxtLink
            @click="this.$emit('responsive-menu-handler')"
            :to="{ path: '/' }"
            class="text-lg pb-4 pt-4 duration-300 hover:text-text"
            >Home</NuxtLink
          >
          <div class="divider dividerGradient w-1/2"></div>
          <NuxtLink
            @click="this.$emit('responsive-menu-handler')"
            :to="{ path: '/', hash: '#products' }"
            v-scroll-to="'#products'"
            class="text-lg pb-4 pt-4 duration-300 hover:text-text"
            >Buy Account</NuxtLink
          >
          <div class="divider dividerGradient w-1/2"></div>
          <a
            href="https://discord.gg/77uGyWJczT"
            class="text-lg pb-4 pt-4 duration-300 hover:text-text"
            target="_blank"
          >
            Discord
          </a>
          <div class="divider dividerGradient w-1/2"></div>
          <a
            @click="
              $store.commit('responsiveMenu/toggle');
              $store.commit('contactUsModal/toggle');
            "
            class="text-lg pb-4 pt-4 duration-300 hover:text-text"
            >Contact Us</a
          >
          <div class="divider dividerGradient w-1/2"></div>
          <div
            @click="$store.commit('responsiveMenu/toggle')"
            class="
              flex
              items-center
              justify-center
              w-16
              h-16
              mt-5
              cursor-pointer
            "
          >
            <i class="text-4xl fas fa-times text-white"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
