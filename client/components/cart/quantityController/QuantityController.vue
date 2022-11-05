<template>
  <div class="pt-3 flex items-center">
    <span class="mr-4">Quantity:</span>
    <div
      @click="$store.commit('cart/decreaseQuantity')"
      class="
        mr-2
        cursor-pointer
        flex
        h-6
        w-6
        justify-center
        items-center
        bg-secondaryLight
        rounded-full
      "
    >
      <i class="fas fa-minus text-xs"></i>
    </div>
    <input
      type="text"
      class="
        text-center
        pl-2
        pr-2
        w-12
        h-8
        bg-primary
        border border-gray
        font-bold
        rounded-main
      "
      v-model="getOrder.quantity"
      disabled
    />
    <div
      @click="$store.commit('cart/increaseQuantity')"
      :class="{ hidden: getOrder.quantity == getOrder.smurf.stock || getOrder.quantity == $store.state.global.maxSmurfsCheckout }"
      class="
        ml-2
        cursor-pointer
        flex
        h-6
        w-6
        justify-center
        items-center
        bg-secondaryLight
        rounded-full
      "
    >
      <i class="fas fa-plus text-xs"></i>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      getOrder: "cart/order",
    }),
  },
};
</script>
