<template>
  <div class="text-sm pt-3 cart__notification" :class="notificationStyle">{{notification.text}}</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    notificationStyle() {},
    ...mapGetters({
      notification: "cart/notification"
    })
  },
}
</script>
