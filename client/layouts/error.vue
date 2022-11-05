<template>
  <div>
    <Header></Header>
    <section
      class="flex justify-center items-center w-full mt-28 mb-28 bg-primary"
    >
      <div class="container flex-col items-center">
        <i class="text-8xl text-error fas fa-times"></i>
        <div class="pageTitle pt-4" v-if="error.statusCode === 404">Unfortunately this page does not exist</div>
        <div class="pageTitle pt-4" v-else>Oops, something went wrong! Sorry!</div>
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
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>
