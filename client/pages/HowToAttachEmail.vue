<template>
  <div>
    <Header></Header>
    <section class="pt-16 pb-16 flex justify-center w-full bg-primary">
      <div class="container-text flex-col">
        <div class="flex flex-col justify-start items-center max-w-4xl">
          <h1 class="pageTitle">
            How to attach email address to the new <br />league of legends
            account?
          </h1>
          <h2 class="subTitle mt-4">
            This instruction contains simple information about how to attach
            email address to the lol account you've got from us.
          </h2>
        </div>
        <div class="divider dividerGradient w-full mt-12"></div>
        <div class="textSheet">
          <!-- <h3 class="textSheet__title">General information</h3> -->
          <!-- <p class="textSheet__text">
            In case after purhase your account already have our email attached,
            then
            <a class="link hover:underline" href="/how-to-change-email"
              >follow different guide.</a
            >
            Follow current guide only if your account don't have email attached.
            Procedure is very simple and shouldn't take more than 3 minutes.
          </p> -->
          <h3 class="textSheet__title">
            Step 1: login on the account via the official Riot Games website
          </h3>
          <p class="textSheet__text">
            Go to
            <a
              href="https://leagueoflegends.com"
              class="link hover:underline"
              target="_blank"
              >official Riot Games website</a
            >
            and log in to your new account, using login and password we've sent
            to you after purchasing.
          </p>
          <img
            class="textSheet__img"
            src="@/assets/img/articles/lol-log-in-window.jpg"
            alt="lol log in window"
          />
          <h3 class="textSheet__title">
            Step 2: Type your email address in the "personal information"
            section
          </h3>
          <p class="textSheet__text">
            Type your own email in the "email address" field, then click "save
            and verify"
          </p>
          <img
            class="textSheet__img"
            src="@/assets/img/articles/change-email-address-official-website.jpg"
            alt="changing personal information on Riot Website"
          />
          <h3 class="textSheet__title">Step 3: Check your own email</h3>
          <p class="textSheet__text">
            Check your own email, you'll see new message from Riot Games, it
            will contain link, follow it and your email will be attached. After
            this you will need to change the password, it's almost same way as
            we did it for email, but this time you need to use different "Riot
            Account Sign-in" section, screenshot below.
          </p>
          <img
            class="textSheet__img mb-5"
            src="@/assets/img/articles/lol-riot-account-sign-in.jpg"
            alt="sign in settings on Riot Games website"
          />
          <p class="textSheet__text">
            Now it's done, email and password was changed on your! You have full
            access to the account!
          </p>
        </div>
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>

<router>
  {
    path: '/how-to-attach-email'
  }
</router>

<script>
export default {
  head: {
    title: "How to attach email to the league of legends account | Smurfs LOL",
    meta: [
      {
        name: "description",
        content:
          "Instruction on how to attach email address to the new account.",
      },
    ],
  },
};
</script>
