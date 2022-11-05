<template>
  <div class="w-full flex justify-center">
    <form
      @submit.prevent="checkout"
      class="flex flex-col items-center cart__form pt-5 xs:pt-7 sm:pt-10"
    >
      <CartFormEmailField></CartFormEmailField>
      <CartFormCoupon></CartFormCoupon>
      <CartFormNewsletter></CartFormNewsletter>
      <CartFormCheckoutButton></CartFormCheckoutButton>
      <CartFormNotification></CartFormNotification>
    </form>
  </div>
</template>

<script>
export default {
  props: ['checkout'],
};
</script>
