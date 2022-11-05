<template>
  <div class="flex w-full items-center mt-2">
    <input
      type="text"
      class="bg-primary rounded-main w-full h-10 pl-2 pr-2"
      :class="{ 'text-text': this.coupon.status != 'wait' }"
      placeholder="Coupon"
      @keydown.space.prevent
      v-model="couponCode"
    />
    <div
      class="
        bg-secondary
        whitespace-nowrap
        ml-2
        h-full
        flex
        items-center
        pl-3
        pr-3
        text-center
        justify-center
        font-barlow
        text-base
        border border-gray
        rounded-main
        cursor-pointer
        hover:bg-secondaryLight
      "
      :class="{ hidden: coupon.status != 'wait' }"
      @click="$store.dispatch('coupon/verifyCoupon')"
    >
      Apply Coupon
    </div>
    <div
      class="
        whitespace-nowrap
        ml-2
        h-full
        flex
        items-center
        pl-3
        pr-3
        text-center
        justify-center
        font-barlow
        text-base
        border border-gray
        rounded-main
        cursor-pointer
      "
      :class="{
        hidden: coupon.status == 'wait',
        'bg-success': coupon.status == 'OK',
        'bg-error': coupon.status == 'warning',
      }"
    >
      {{ resultContent }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    couponCode: {
      get() {
        return this.$store.getters["coupon/coupon"].code;
      },
      set(value) {
        this.$store.commit("coupon/updateCode", value);
      },
    },
    resultContent() {
      if (this.coupon.status == "OK") {
        if (this.coupon.discountType == "percentage") {
          return this.coupon.value + "% Coupon applied";
        }
        if (this.coupon.discountType == "fixed") {
          return "$" + this.coupon.value + " Coupon applied";
        }
      } else {
        return "Wrong Coupon";
      }
    },
    ...mapGetters({
      coupon: "coupon/coupon",
    }),
  },
};
</script>
