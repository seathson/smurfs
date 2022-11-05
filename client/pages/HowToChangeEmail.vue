<template>
  <div>
    <Header></Header>
    <section class="pt-16 pb-16 flex justify-center w-full bg-primary">
      <div class="container-text flex-col">
        <div class="flex flex-col justify-start items-center max-w-4xl">
          <h1 class="pageTitle">
            How to change email address on the lol account?
          </h1>
          <h2 class="subTitle mt-4">
            This guide describes detailed instruction on how to change email
            address on the account you've purchased from us.
          </h2>
        </div>
        <div class="divider dividerGradient w-full mt-12"></div>
        <div class="textSheet">
          <h3 class="textSheet__title">General information</h3>
          <p class="textSheet__text">
            Usually, accounts we provide do not have a current email address and
            you can just attach your own email without any additional actions,
            if this is your case then you need to follow a
            <a class="link hover:underline" href="/how-to-attach-email"
              >different guide.</a
            >
            Follow this instruction only if after purchase our email already
            attached to the account and you need to change this.
          </p>
          <h3 class="textSheet__title">
            Step 1: Login on the current email attached to the account
          </h3>
          <p class="textSheet__text">
            If your new account already has our email attached, then after
            purchasing in addition to username and password, you will receive
            this email address. Follow this link and login to the email
            (password is not required)
            <a
              class="link hover:underline"
              target="_blank"
              href="https://getnada.com/"
              >Follow this link</a
            >
            and log in on the email (password is not required)
            <img
              class="textSheet__img"
              alt="instruction step 1 how to change email"
              src="@/assets/img/articles/how-to-change-email-step-1.jpg"
            />
          </p>
          <img
            class="textSheet__img mb-5"
            src="@/assets/img/articles/how-to-change-email-step-2.jpg"
            alt="changing email step 2"
          />
          <p class="textSheet__text">
            After that you'll be logged in, let's move on to <b>step 2</b>
          </p>
          <h3 class="textSheet__title">
            Step 2: Login on the account via official Riot website
          </h3>
          <p class="textSheet__text">
            Follow
            <a
              href="https://leagueoflegends.com/"
              target="_blank"
              class="link link_underline"
              >the official Riot Games website</a
            >
            and log in on your account in the normal way, using login and
            password you've received from us.
          </p>
          <img
            class="textSheet__img mb-5"
            src="@/assets/img/articles/change-email-address-official-website.jpg"
            alt="changing personal information on Riot Website"
          />
          <p class="textSheet__text">
            Type your own email address and click "save and verify" and move on
            to the last <b>step number 3</b>.
          </p>
          <h3 class="textSheet__title">Step 3: Final actions</h3>
          <p class="textSheet__text">
            Check "getnada" email address, you've logged in before in step one,
            you will see the new message from Riot Games, it will contain a link
            or code. if link - just click on it, if code - copy it and paste in
            the appropriate field on the Riot website. After this, you'll
            receive a new message on your own email that you're trying to attach
            to the account, follow the link it contains. Now it's finished and
            you have full access to the account. Don't forget to change the
            password before starting any game. If you still have any questions
            you can always contact us and we will help you!
          </p>
        </div>
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>

<router>
  {
    path: '/how-to-change-email'
  }
</router>

<script>
export default {
  head: {
    title: "How to change email on the lol account | Smurfs LOL",
    meta: [
      {
        name: "description",
        content:
          "Guide on how to change the email address on the purchased account.",
      },
    ],
  },
};
</script>
