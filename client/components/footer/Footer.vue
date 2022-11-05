<template>
  <footer
    class="
      footer
      w-full
      pt-7
      pb-5
      flex flex-col
      items-center
      border-t border-gray
      bg-primaryDark
    "
  >
    <div class="container flex-wrap">
      <div
        class="
          text-text text-sm
          flex flex-col
          p-5
          lg:mr-14
          min-w-full
          items-center
          lg:min-w-0 lg:items-start lg:flex-1
        "
      >
        <div>
          <div class="flex justify-center items-center">
            <img
              class="w-52"
              src="@/assets/img/logo/logo-main-transparent.svg"
              alt="Our company logo"
            />
          </div>
          <div class="pt-3 flex justify-center items-center flex-wrap">
            <img
              src="~/assets/img/paymentMethods/creditCards/Visa/Visa-card-dark.png"
              class="w-12 h-full m-1"
            />
            <img
              src="~/assets/img/paymentMethods/creditCards/MasterCard/MasterCard-dark.png"
              class="w-12 h-full m-1"
            />
            <img
              src="~/assets/img/paymentMethods/creditCards/Discover/Discover-card-dark.png"
              class="w-12 h-full m-1"
            />
            <img
              src="~/assets/img/paymentMethods/creditCards/AmericanExpress/AmericanExpress-dark.png"
              class="w-12 h-full m-1"
            />
            <img
              src="~/assets/img/paymentMethods/paymentSystems/Skrill/Skrill-card-dark.png"
              class="w-12 h-full m-1"
            />
            <img
              src="~/assets/img/paymentMethods/paymentSystems/Neteller/Neteller-card-dark.png"
              class="w-12 h-full m-1"
            />
            <img
              src="~/assets/img/paymentMethods/paymentSystems/PaysafeCard/PaysafeCard-card-dark.png"
              class="w-12 h-full m-1"
            />
            <img
              src="~/assets/img/paymentMethods/paymentSystems/Bitcoin/Bitcoin-card-dark.png"
              class="w-12 h-full m-1"
            />
          </div>
          <div
            class="
              flex
              justify-center
              pt-2
              text-center text-white
              font-barlow
              text-sm
            "
          >
            And a lot of other payment methods
          </div>
        </div>
      </div>
      <div
        class="
          text-white text-sm
          flex flex-col
          p-5
          min-w-full
          items-center
          lg:min-w-0 lg:items-start lg:flex-1
        "
      >
        <div
          class="
            font-barlow font-semibold
            text-left text-textAction
            pb-3
            text-base
            whitespace-nowrap
          "
        >
          Information
        </div>
        <ul class="flex flex-col items-center text-sm leading-6 lg:items-start">
          <li class="flex items-center whitespace-nowrap h-10">
            <NuxtLink :to="{ path: '/' }" class="footer__link"
              >Home page</NuxtLink
            >
          </li>
          <li class="flex items-center whitespace-nowrap h-10">
            <NuxtLink
              :to="{ path: '/', hash: '#products' }"
              class="footer__link"
              >Buy account</NuxtLink
            >
          </li>
          <li class="flex items-center whitespace-nowrap h-10">
            <NuxtLink
              :to="'/gifting-center'"
              class="footer__link"
              >Gifting center</NuxtLink
            >
          </li>
          <li class="flex items-center whitespace-nowrap h-10">
            <NuxtLink :to="{ path: '/', hash: '#faq' }" class="footer__link"
              >Frequently asked questions</NuxtLink
            >
          </li>
          <li class="flex items-center whitespace-nowrap h-10">
            <NuxtLink to="/terms-and-conditions" class="footer__link"
              >Terms and Conditions</NuxtLink
            >
          </li>
        </ul>
      </div>
      <div
        class="
          text-white text-sm
          flex flex-col
          p-5
          min-w-full
          items-center
          lg:min-w-0 lg:items-start lg:flex-1
        "
      >
        <div
          class="
            font-barlow font-semibold
            text-left text-textAction
            pb-3
            text-base
            whitespace-nowrap
          "
        >
          Contact Us
        </div>
        <ul class="flex flex-col items-center text-sm leading-6 lg:items-start">
          <li class="flex items-center whitespace-nowrap h-10">
            <a :href="`mailto:${this.$store.state.myContacts.email}`" class="footer__link"
              >{{this.$store.state.myContacts.email}}</a
            >
          </li>
          <li class="flex items-center whitespace-nowrap h-10">
            <a
              :href="`skype:live:${this.$store.state.myContacts.skype}?add`"
              target="_blank"
              class="footer__link"
            >
              <svg
                class="mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
              >
                <path
                  fill="#898F9D"
                  fill-rule="evenodd"
                  d="M3 0h16a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm14.597 12.486a6.51 6.51 0 0 0 .154-1.413c0-3.636-2.988-6.584-6.677-6.584a6.8 6.8 0 0 0-1.142.097A3.89 3.89 0 0 0 7.872 4C5.735 4 4 5.709 4 7.819c0 .704.194 1.363.532 1.931-.088.427-.135.87-.135 1.323 0 3.637 2.99 6.584 6.677 6.584.418 0 .827-.038 1.223-.11a3.9 3.9 0 0 0 1.83.453C16.268 18 18 16.29 18 14.182c0-.61-.145-1.185-.403-1.696zM14.5 14.22c-.309.432-.765.773-1.357 1.015-.585.24-1.287.362-2.086.362-.959 0-1.763-.166-2.391-.495a3.1 3.1 0 0 1-1.1-.962c-.283-.402-.426-.802-.426-1.19 0-.24.093-.449.278-.62a.986.986 0 0 1 .697-.256c.229 0 .427.067.588.201.154.13.285.32.392.564.118.268.247.494.382.67.132.172.32.315.56.428.243.112.57.17.97.17.553 0 1.006-.116 1.346-.345.333-.223.494-.493.494-.822a.807.807 0 0 0-.257-.624 1.869 1.869 0 0 0-.713-.388 14.411 14.411 0 0 0-1.225-.3c-.694-.145-1.282-.318-1.75-.515-.48-.2-.865-.48-1.147-.827-.287-.355-.433-.799-.433-1.32 0-.497.153-.946.454-1.332.298-.384.734-.684 1.296-.888.554-.202 1.213-.304 1.96-.304.595 0 1.12.068 1.558.203.44.134.81.316 1.102.541.294.227.513.468.65.72.138.254.208.506.208.75a.89.89 0 0 1-.274.636.921.921 0 0 1-.685.283c-.247 0-.442-.06-.575-.177-.125-.11-.255-.28-.4-.523a2.183 2.183 0 0 0-.598-.732c-.225-.168-.6-.253-1.116-.253-.477 0-.867.094-1.156.282-.279.18-.414.386-.414.631 0 .15.043.275.134.382.094.116.228.215.397.299.176.087.357.157.538.205.185.051.496.127.923.224.541.114 1.038.243 1.476.382.446.14.83.311 1.144.513.32.206.572.468.752.783.18.318.272.707.272 1.16 0 .543-.158 1.037-.468 1.47z"
                />
              </svg>
              {{this.$store.state.myContacts.skype}}
            </a>
          </li>
          <li class="flex items-center whitespace-nowrap h-10">
            <a
              :href="this.$store.state.myContacts.discordServer"
              target="_blank"
              class="footer__link"
            >
              <svg
                class="mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
              >
                <path
                  fill="#898F9D"
                  fill-rule="evenodd"
                  d="M3 0h16a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm13.615 2.933H5.385c-.947 0-1.718.76-1.718 1.7v11.154c0 .94.77 1.7 1.718 1.7h9.504l-.444-1.527 1.072.982 1.014.924 1.802 1.567v-14.8c0-.94-.77-1.7-1.718-1.7zM13.54 13.567s-.305-.357-.56-.672c1.11-.307 1.534-.987 1.534-.987a4.891 4.891 0 0 1-.974.49c-.424.173-.831.29-1.23.356-.813.15-1.559.108-2.195-.008a7.234 7.234 0 0 1-1.246-.357 5.019 5.019 0 0 1-.618-.282c-.026-.017-.051-.025-.077-.041-.017-.009-.025-.017-.034-.025a2.986 2.986 0 0 1-.237-.141s.407.663 1.483.978c-.254.315-.567.689-.567.689-1.874-.058-2.586-1.261-2.586-1.261 0-2.67 1.22-4.835 1.22-4.835 1.221-.896 2.383-.87 2.383-.87l.084.099c-1.525.43-2.229 1.086-2.229 1.086s.187-.1.5-.24c.907-.39 1.628-.498 1.924-.523.051-.008.094-.017.144-.017a7.328 7.328 0 0 1 1.713-.016c.805.091 1.67.323 2.55.796 0 0-.669-.622-2.11-1.053l.119-.133s1.161-.025 2.382.87c0 0 1.22 2.166 1.22 4.836 0 0-.72 1.203-2.593 1.26zM9.717 9.9a.914.914 0 0 0-.917.917.92.92 0 0 0 .917.916.914.914 0 0 0 .916-.916.909.909 0 0 0-.916-.917zm2.933 0a.914.914 0 0 0-.917.917.92.92 0 0 0 .917.916.914.914 0 0 0 .917-.916.914.914 0 0 0-.917-.917z"
                />
              </svg>
              {{this.$store.state.myContacts.discordProfile}}
            </a>
          </li>
        </ul>
      </div>
      <div
        class="
          text-white text-sm
          flex flex-col
          p-5
          min-w-full
          items-center
          text-center
          lg:min-w-0 lg:text-left lg:items-start lg:flex-1
        "
      >
        <div
          class="
            font-barlow font-semibold
            text-left text-textAction
            pb-3
            text-base
            whitespace-nowrap
          "
        >
          Partnership
        </div>
        <ul class="flex flex-col items-center text-sm leading-6 lg:items-start">
          <li class="flex items-center whitespace-nowrap h-10">
            <a
              class="footer__link"
              target="_blank"
              href="https://elitepvpers.com"
              >Elitepvpers</a
            >
          </li>
          <li class="flex items-center whitespace-nowrap h-10">
            <a class="footer__link" target="_blank" href="https://epicnpc.com"
              >Epicnpc</a
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="text-center font-bold font-barlow tracking-wider pt-3">
      Created by seathson
    </div>
    <div class="text-center leading-5 pt-1 pl-2 pr-2 text-text text-xs">
      *Website is not affiliated, sponsored, endorsed, or associated with League
      of Legends or Riot Games, Inc.*
    </div>
  </footer>
</template>
