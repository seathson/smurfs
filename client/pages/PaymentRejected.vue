<template>
  <div>
    <section
      class="flex justify-center items-center w-full h-screen bg-primary"
    >
      <div class="container flex-col items-center">
        <i class="text-8xl text-error fas fa-times"></i>
        <div class="pageTitle pt-4">Payment error occurred</div>
        <div class="subTitle">
          Please, try again or contact us in case you need any assistance!
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
    path: '/payment-rejected'
  }
</router>

<script>
export default {
  head: {
    title: "Payment Rejected | Smurfs LOL",
    meta: [
      {
        name: "description",
        content: "Payment error",
      },
    ],
  },
};
</script>
