<template>
  <div
    @mousedown.self="$store.commit('cart/toggle')"
    class="flex fixed overlay z-40"
    v-if="this.$store.state.cart.isActive"
  >
    <div
      class="
        relative
        max-w-xl
        w-full
        bg-secondary
        border border-gray
        rounded-main
        flex flex-col
        items-center
        p-5
        m-3
        max-h-almost
        overflow-y-auto
        xs:p-9
      "
    >
      <div
        @click="$store.commit('cart/toggle')"
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
        Checkout
      </div>
      <div class="pt-5 flex flex-col w-full">
        <CartProduct></CartProduct>
        <CartQuantityController></CartQuantityController>
        <CartForm :checkout="checkout"></CartForm>
        <div class="pt-3 text-xs text-center">
          By clicking the button, you agree to our
          <router-link class="link hover:underline" to="/terms-and-conditions"
            >Terms & Conditions.</router-link
          >
        </div>
        <div class="flex justify-center mt-5 xs:mt-7 sm:mt-10">
          <img
            src="../../assets/img/paymentMethods/creditCards/Visa/Visa-card-dark.png"
            class="w-14 h-full ml-1 mr-1"
          />
          <img
            src="../../assets/img/paymentMethods/creditCards/MasterCard/MasterCard-dark.png"
            class="w-14 h-full ml-1 mr-1"
          />
          <img
            src="../../assets/img/paymentMethods/creditCards/Discover/Discover-card-dark.png"
            class="w-14 h-full ml-1 mr-1"
          />
          <img
            src="../../assets/img/paymentMethods/creditCards/AmericanExpress/AmericanExpress-dark.png"
            class="w-14 h-full ml-1 mr-1"
          />
          <img
            src="../../assets/img/paymentMethods/paymentSystems/Skrill/Skrill-card-dark.png"
            class="w-14 h-full ml-1 mr-1"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    async checkout() {
      let payopData = await this.$axios.$post('/checkout/smurf', {
        order: this.$store.state.cart.order,
        newsletter: this.$store.state.cart.newsletter,
        customer: this.$store.state.customer,
        coupon: this.$store.state.coupon.status == 'OK' ? this.$store.state.coupon : ''
      })
      if (payopData.status == 1) {
        window.location.replace("https://checkout.payop.com/en/payment/" + payopData.data);
      }
    },
  },
};
</script>
