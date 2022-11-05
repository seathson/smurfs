<template>
  <div class="flex justify-between w-full">
    <div class="text-lg">
      <i class="fas fa-box-open text-primary pr-2"></i
      ><span class="font-bold">{{getOrder.smurf.title}}</span>
    </div>
    <div class="text-lg md:text-xl font-bold pl-3">USD {{getOrder.smurf.finalPrice}}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      getOrder: 'cart/order'
    })
  },
  mounted() {
    // console.log(this.getOrder.smurf)
  }
};
</script>
