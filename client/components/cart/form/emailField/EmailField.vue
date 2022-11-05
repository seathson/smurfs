<template>
  <div>
    <span class="text-text">Please, enter your email to proceed</span>
    <input
      type="email"
      required
      class="bg-primary rounded-main w-full mt-2 h-10 pl-2 pr-2 text-white"
      placeholder="Your email*"
      @keydown.space.prevent
      v-model="email"
    />
  </div>
</template>

<script>
export default {
  computed: {
    email: {
      get() {
        return this.$store.getters["customer/customer"].email;
      },
      set(value) {
        this.$store.commit("customer/updateEmail", value);
      },
    },
  },
};
</script>

