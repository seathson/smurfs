<template>
  <div>
    <section
      class="flex justify-center items-center w-full h-screen bg-primary"
    >
      <div class="container flex-col items-center">
        <i class="text-8xl text-success far fa-check-circle"></i>
        <div class="pageTitle pt-4">Payment Completed Successfully</div>
        <div class="subTitle">
          Login details was sent to your email address, you will recieve it
          within 2 minutes.
        </div>
        <router-link
          to="/"
          class="flex items-center justify-center mt-5 text-1.5xl link group"
        >
          <i class="animate-goBack no-underline pr-2 fas fa-angle-left"></i>
          <span class="group-hover:underline">Go back to the main page</span>
        </router-link>
      </div>
    </section>
  </div>
</template>

<router>
  {
    path: '/payment-completed'
  }
</router>

<script>
export default {
  head: {
    title: "Payment Completed | Smurfs LOL",
    meta: [
      {
        name: "description",
        content: "The payment was made successfully",
      },
    ],
  },
};
</script>
