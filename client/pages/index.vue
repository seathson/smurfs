<template>
  <div>
    <Header></Header>
    <section class="welcome" id="welcome">
      <div class="container">
        <div class="w-full z-10 text-white">
          <h2
            class="
              text-primary text-lg
              uppercase
              tracking-wider
              font-barlow font-semibold
            "
          >
            Lol smurfs, covered by lifetime warranty
          </h2>
          <h1
            class="
              font-barlow
              pt-4
              pb-8
              text-h1
              leading-h1
              tracking-wide
              font-semibold
              uppercase
            "
          >
            Buy a League of Legends account
            <br />with instant delivery
          </h1>
          <div class="flex">
            <NuxtLink
              :to="{ path: '/', hash: '#products' }"
              v-scroll-to="'#products'"
              class="primaryButton primaryButton_anime w-36 mr-5"
              >Pick Account</NuxtLink
            >
            <NuxtLink
              :to="{ path: '/', hash: '#products' }"
              v-scroll-to="'#products'"
              class="secondaryButton secondaryButton_anime w-36"
              >Select Region</NuxtLink
            >
          </div>
        </div>
      </div>
      <div class="welcomeBackground"></div>
    </section>
    <section class="flex flex-col items-center pt-12 w-full pb-10 bg-primary">
      <div class="container flex-col justify-start items-center" id="products">
        <hr class="divider" />
        <h2 class="sectionTitle">Select your smurf</h2>
        <h3 class="subTitle">
          Below, you can browse from different types of unranked smurf accounts.
          <br />Select the one that meets your needs, and by completing your
          payment, you receive the account's log in details.
        </h3>
        <ServerButtons></ServerButtons>
      </div>
      <Smurfs
        class="
          container-fluid
          flex flex-wrap
          w-full
          max-w-ultima
          items-start
          pt-6
        "
      ></Smurfs>
    </section>
    <section class="pt-6 pb-8 flex justify-center bg-primary" id="reviews">
      <div class="container flex-col items-center">
        <hr class="divider" />
        <h2 class="sectionTitle">Why choose us?</h2>
        <h3 class="subTitle">
          We are constantly improving our service to deliver mind-blowing
          experiences to our
          <br />customers for every order, every day. Buy lol account from us
          and be satisfied!
        </h3>
      </div>
    </section>
    <section class="pb-12 flex justify-center bg-primary">
      <div class="container">
        <div class="advantage">
          <div class="advantage__img">
            <picture>
              <source
                srcset="~/assets/img/webp/ArcaneComet.webp"
                type="image/webp"
              />
              <source
                srcset="~/assets/img/ArcaneComet-min.png"
                type="image/png"
              />
              <img
                src="~/assets/img/ArcaneComet-min.png"
                alt="lol arcane comet"
              />
            </picture>
          </div>
          <div class="advantage__title">Highest Quality Smurfs</div>
          <div class="advantage__text">
            Maintaining an impeccable reputation is a top priority for us, as a
            consequence providing accounts of the highest quality is laid down
            in the core principles of our service.
          </div>
        </div>
        <div class="advantage">
          <div class="advantage__img">
            <picture>
              <source
                srcset="~/assets/img/webp/SummonAery.webp"
                type="image/webp"
              />
              <source
                srcset="~/assets/img/SummonAery-min.png"
                type="image/png"
              />
              <img
                src="~/assets/img/SummonAery-min.png"
                alt="lol summon aery"
              />
            </picture>
          </div>
          <div class="advantage__title">Lifetime Warranty</div>
          <div class="advantage__text">
            We fully control the process of leveling our accounts. This allows
            us to be fully confident in their reliability and provide a lifetime
            warranty for free on absolutely every account we sell.
          </div>
        </div>
        <div class="advantage">
          <div class="advantage__img">
            <picture>
              <source
                srcset="~/assets/img/webp/PhaseRush.webp"
                type="image/webp"
              />
              <source
                srcset="~/assets/img/PhaseRush-min.png"
                type="image/png"
              />
              <img src="~/assets/img/PhaseRush-min.png" alt="lol phase rush" />
            </picture>
          </div>
          <div class="advantage__title">Instant Delivery</div>
          <div class="advantage__text">
            Our automatic delivery system works 24/7, account details will be
            sent to your email address instantly after the payment.
          </div>
        </div>
      </div>
    </section>
    <section class="pb-16 flex justify-center bg-primary" id="faq">
      <div class="container flex-col items-center">
        <hr class="divider" />
        <h2 class="sectionTitle pt-2">Frequently asked question(s)</h2>
        <h3 class="subTitle">
          Answers to the most frequently asked questions related to our lol
          smurfs service!
        </h3>
        <Accordion class="pt-8"></Accordion>
        <div class="flex justify-center w-full container-md pt-5">
          <router-link
            :to="{ path: '/', hash: '#products' }"
            class="
              primaryButton primaryButton_anime
              w-full
              bg-coloredPrimary
              border border-gray
              mr-2
              group
            "
            >Buy LOL Smurf
            <i
              class="
                fas
                fa-angle-right
                pl-3
                transform
                duration-300
                sm:group-hover:translate-x-1
              "
            ></i>
          </router-link>
          <div
            class="
              hidden
              secondaryButton secondaryButton_anime
              w-full
              ml-2
              border
              group
              xs:flex
            "
            @click="$store.commit('contactUsModal/toggle')"
          >
            Contact Us
            <i
              class="
                fas
                fa-angle-right
                pl-3
                transform
                duration-300
                sm:group-hover:translate-x-1
              "
            ></i>
          </div>
        </div>
      </div>
    </section>
    <section class="flex w-full mb-12 relative">
      <div class="giftingBackground"></div>
      <div class="giftingGradient"></div>
      <div class="flex w-full justify-center">
        <div class="container w-full items-center justify-center pt-20 pb-20">
          <div class="flex-col relative items-center">
            <div class="sectionTitle">
              GIFTING STORE!
              <span class="text-primary">GET RIOT POINTS ~50% CHEAPER</span>
            </div>
            <p class="subTitle mt-5 leading-loose">
              Discover the cheapest way to buy Riot Points in league of legends
              using our Gifting Center.<br />
              To do it join to the our discord server and check out the full
              information and prices!<br />
              Also, we in our discord server, we hold regular giveaways, in
              which absolutely anyone can win.
            </p>
            <div class="flex justify-center w-full">
              <a
                :href="this.$store.state.myContacts.discordServer"
                target="_blank"
                class="
                  whitespace-nowrap
                  discord_highlight
                  primaryButton
                  bg-discord
                  hover:bg-discordDark
                  duration-200
                  mt-7
                "
                >JOIN TO THE DISCORD SERVER</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="flex justify-center w-full pb-12">
      <div class="container flex-col items-center">
        <hr class="divider" />
        <h2 class="sectionTitle">Why buy lol account?</h2>
        <h3 class="subTitle">
          A lot of players looking to buy lol smurf, here, we will explain why
          and what benefits it provides.
        </h3>
        <div class="flex flex-col items-start pt-7 w-full">
          <div class="text-xl pb-3 pt-5 text-primary">
            New smurf will allow you to practice new champions
          </div>
          <p class="text-sm-base leading-6 text-text">
            When new champion is released in League of Legends, you may need to
            try it, practice. Champion may interest you, or, if not, you at
            least should know how to play versus him. Ranked players are
            constantly faced with this when they strive to take higher on the
            rating ladder. Of course, normal games is not the best place to test
            something, because in this game mode people usually do not try to
            play hard and don't pay to much attention about result, or even
            troll, so it can be real waste of time. This is where a great
            opporunity comes in, test new features on your new lol smurf,
            without having to lose any rating on the main account.
          </p>
          <div class="text-xl pb-3 pt-5 text-primary">
            As your own challenge
          </div>
          <p class="text-sm-base leading-6 text-text">
            Trying to boost your new lol smurf to the same rating as your main
            account can be an interesting challenge, it will allow you to prove
            yourself that you can get high rating twice. Also, you may do it
            using new champions you have never used in ranked, this is really
            good experience and fun. A lot of professional players have 2 or
            even 3 different accounts and some of them already done with this
            challenge.
          </p>
          <div class="text-xl pb-3 pt-5 text-primary">
            Perfect opporunity to teach your friends
          </div>
          <p class="text-sm-base leading-6 text-text">
            Friends want to play ranked with you, but your league very high, you
            can't start ranked queue together, or, maybe, you don't want to lost
            rating on your main account? Obviously, buying league of legends
            account from us forever and ever resolve this problem. Your friend
            will not uncomfortable, because of losing lane every game, since
            using new unranked smurf you will be playing on the same rating with
            the same MMR and your friend will play versus absolutely the same
            enemies he was played before. Teach your friend play or just enjoy
            together!
          </p>
          <div class="text-xl pb-3 pt-5 text-primary">
            Main account was banned for toxicity or by any other reason
          </div>
          <p class="text-sm-base leading-6 text-text">
            Popular situation, when you have repeatedly broken the community
            rules and was permamently banned. But the ability to buy a lol
            account completely solve this problem. We sell different accounts
            and you can buy an account with any amount of champions.
          </p>
          <div class="text-xl pb-3 pt-5 text-primary">
            Desire to play in another region
          </div>
          <p class="text-sm-base leading-6 text-text">
            Maybe you have an account in one region, but want to try your skill
            in ranked ladder of another region, or, you have a friend who
            doesn't play on the same region with you. Of course, there is no way
            to level new account to 30 from stratch, after farm Blue Essence for
            needed champions and etc, because it will take a lot of time. Much
            easier just buy lol smurf and instantly join the game on new region,
            without using transfer on your main account and paying money for it.
          </p>
        </div>
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  head: {
    title: "Buy a League of Legends Account | Smurfs LOL",
    meta: [
      {
        name: "description",
        content:
          "The reliable place to buy 30+ level Unranked League of Legends & LoL accounts. All of our smurfs covered by lifetime warranty and will be delivered immediately after purchase. ",
      },
    ],
  },
};
</script>
