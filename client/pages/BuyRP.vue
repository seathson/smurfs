<template>
  <div>
    <Header :isTopNotificationVisible="false"></Header>
    <section class="mt-14 mb-16 flex justify-center">
      <div class="container flex-col items-center">
        <div class="sectionTitle">Buy LOL Riot Points</div>
        <div class="subTitle mb-4">
          Ordered gifts will be delivered to your account via gifting system
          within 32 hours
        </div>
        <form
          @submit.prevent="checkout"
          class="flex flex-col max-w-lg w-full items-center"
        >
          <div class="flex flex-col w-full mt-3">
            <p class="text-left text-textAction mb-1">Your server</p>
            <select
              class="h-10 pl-3 pr-3 rounded-main bg-secondaryAction border-none"
            >
              <option>North America</option>
              <option>Europe West</option>
              <option>Europe Nordic & East</option>
            </select>
          </div>
          <div class="flex w-full mt-3">
            <div class="flex flex-col w-full min-w-0">
              <p class="text-textAction mb-1">Amount of Riot Points</p>
              <input
                required
                type="text"
                class="h-10 pl-3 pr-3 rounded-main bg-secondaryAction"
              />
            </div>
            <i
              class="
                fas
                fa-exchange-alt
                w-20
                flex
                items-center
                mt-6
                justify-center
              "
            ></i>
            <div class="flex flex-col w-full min-w-0">
              <p class="text-textAction mb-1">You will pay</p>
              <input
                required
                type="text"
                class="h-10 pl-3 pr-3 rounded-main bg-secondaryAction"
              />
            </div>
          </div>
          <div class="flex flex-col w-full mt-3">
            <p class="text-left text-textAction mb-1">Your summoner name</p>
            <input
              required
              type="text"
              class="h-10 pl-3 pr-3 rounded-main bg-secondaryAction"
            />
          </div>
          <div class="flex flex-col w-full mt-3">
            <p class="text-left text-textAction mb-1">Your email</p>
            <input
              required
              type="email"
              class="h-10 pl-3 pr-3 rounded-main bg-secondaryAction"
            />
          </div>
          <div class="flex flex-col w-full mt-3">
            <p class="text-left text-textAction mb-1">Your real name</p>
            <input
              required
              type="text"
              class="h-10 pl-3 pr-3 rounded-main bg-secondaryAction"
            />
          </div>
          <div class="flex flex-col w-full mt-3">
            <p class="text-left text-textAction mb-1">Your order</p>
            <textarea
              required
              class="mainInput h-28 pt-2 pb-2 pl-3 pr-3"
              placeholder="In a free style, list what you would like to receive to your account within the specified amount of RP. This may be any champions, skins, orbs, masterworks, etc."
            ></textarea>
          </div>
          <button
            type="submit"
            class="primaryButton primaryButton_anime w-full mt-5"
          >
            <i class="fas fa-shopping-cart pr-1" aria-hidden="true"></i>Purchase
          </button>
        </form>
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>

<router>
  {
    path: '/buy-rp'
  }
</router>

<script>
export default {
  head: {
    title: "Buy Riot Points | Smurfs LOL",
    meta: [
      {
        name: "description",
        content: "The place to buy League of Legends Riot Points",
      },
    ],
  },
};
</script>
