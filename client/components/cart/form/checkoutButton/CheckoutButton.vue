<template>
  <div class="w-full">
    <button
      type="submit"
      class="mt-4 primaryButton primaryButton_anime w-full items-center"
    >
      <i class="fas fa-shopping-cart pr-1"></i><span>Checkout ${{totalPrice}}</span>
    </button>
    <!-- <div class="mt-4 primaryButton w-full items-center">
      <svg
        class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
      Processing
    </div> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    totalPrice() {
    // итоговая стоимость в случае отсутствия активного купона
     let basicCost = this.order.quantity * this.order.smurf.finalPrice
    // возврат итоговой стоимости в случае активного купона с процентной скидкой
     if (this.coupon.discountType == 'percentage' && this.coupon.status == 'OK') {
       return (basicCost - basicCost * this.coupon.value / 100).toFixed(2)
     }
    // возврат итоговой стоимости в случае активного купона с фиксированной скидкой
     if (this.coupon.discountType == 'fixed' && this.coupon.status == 'OK') {
       let result = basicCost - this.coupon.value;
       if (result < 0.1) {
         return 0.1
       } else {
         return result.toFixed(2);
       }
     }
    // возврат итоговой стоимости в случае отсутствия активного купона
     return basicCost.toFixed(2)
    },
    ...mapGetters({
      order: "cart/order",
      coupon: "coupon/coupon"
    }),
  }
}

</script>
