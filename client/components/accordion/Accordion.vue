<template>
  <div class="accordion">
    <AccordionItem
      v-for="(item, index) in information"
      v-on:itemHandler="itemHandler"
      :key="item.id"
      :index="index"
      :question="item.question"
      :answer="item.answer"
      :isOpen="item.isOpen"
    ></AccordionItem>
  </div>
</template>

<script>
import AccordionItem from "@/components/accordion/item/AccordionItem";

export default {
  data: () => ({
    information: [
      {
        question: "Can I change my account details after purchase?",
        answer: `Of course! After purchase, you will receive all the necessary information to attach your own email address to the account and change the password. This is easy and fast procedure, but in case you need in any assistanse, please <a class="link hover:underline" href="/how-to-attach-email">follow this guide</a> or contact us, we're always ready to help!`,
        isOpen: false,
      },
      {
        question: "How quickly will I get my account?",
        answer: `Account details will be sent to your email right after purchase. Our automatic delivery system work 24/7.`,
        isOpen: false,
      },
      // {
      //   question:
      //     "What the difference between botted and handleveled accounts?",
      //   answer: `<b>Handleveled</b> accounts were leveled in the usual way by a real person and it makes them absolutely safe. <b>Botted</b> accounts, also called lol smurfs, in turn, were leveled by our special software and always have clean ranked MMR, which means they were unranked during all League of Legends seasons and no ranked games have been played on it.`,
      //   isOpen: false,
      // },
      {
        question: "Can I play ranked matches right after purchase?",
        answer: `Sure, if the account you bought has at least 20 champions you can start ranked games right away!`,
        isOpen: false,
      },
      {
        question: "Why is Smurfs the right place to buy an account?",
        answer: `Comprehensive lifetime warranty, 24/7 instant delivery and loyal prices make Smurfs the right place to buy a League of Legends account.`,
        isOpen: false,
      },
      {
        question: "Can I pick my summoner name?",
        answer: `All accounts already have a summoner name, but if you want, you can always change it via ingame store using Blue Essence or Riot Points.`,
        isOpen: false,
      },
      {
        question: "Your prices in USD, but my currency is EUR or different",
        answer: `There is no problem, during the payment process currency conversion will occur automatically according to the exchange rate at the time of payment.`,
        isOpen: false,
      },
    ],
  }),
  methods: {
    itemHandler: function (item) {
      for (let x of this.information) {
        x.isOpen = false;
      }
      this.information[item.index].isOpen = !item.isOpen;
    },
  },
  components: {
    AccordionItem,
  },
};
</script>
