<template>
  <div class="mt-3 text-xs flex items-center">
    <label class="flex justify-center items-center">
      <input type="checkbox" class="mr-2 w-6 h-6 sm:w-4 sm:h-4" v-model="newsletter"/>
      Click the checkbox to get free RP and giveaways from our mailing list!
    </label>
  </div>
</template>

<script>

export default {
  computed: {
    newsletter: {
      get() {
        return this.$store.state.cart.newsletter
      },
      set() {
        this.$store.commit("cart/toggleNewsletter")
      }
    }
  }
}

</script>
