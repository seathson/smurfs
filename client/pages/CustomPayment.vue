<template>
  <div>
    <!-- <Header></Header> -->
    <div class="h-screen flex items-center justify-center">
      <div class="container flex-col items-center">
        <div class="sectionTitle">CUSTOM PAYMENT</div>
        <div class="subTitle mb-4">
          Special form to generate custom transaction with the specified value
        </div>
        <div class="w-80 flex justify-center items-center rounded-main">
          <form @submit.prevent="checkout" class="flex flex-col w-full">
            <input
              type="email"
              required
              placeholder="Your email"
              v-model="email"
              class="w-full h-10 pl-3 pr-3 mainInput"
            />
            <input
              required
              type="number"
              min="1"
              step="0.1"
              @keypress="numbersOnly"
              class="mt-3 w-full h-10 pl-3 pr-3 mainInput"
              placeholder="Amount"
              v-model="amountFiltered"
              @keydown.space.prevent
            />
            <select
              v-model="currency"
              class="mt-3 h-10 pl-3 pr-3 mainInput"
            >
              <option>USD</option>
              <option>EUR</option>
            </select>
            <button
              type="submit"
              class="mt-3 primaryButton primaryButton_anime h-12"
            >
              Continue
            </button>
            <div v-if="error" class="text-error mt-3 text-center">
              {{ error }}
            </div>
          </form>
        </div>
        <div class="flex justify-center mt-5">
          <img
            src="~/assets/img/paymentMethods/creditCards/Visa/Visa-card-dark.png"
            class="w-14 h-full ml-1 mr-1"
          />
          <img
            src="~/assets/img/paymentMethods/creditCards/MasterCard/MasterCard-dark.png"
            class="w-14 h-full ml-1 mr-1"
          />
          <img
            src="~/assets/img/paymentMethods/creditCards/Discover/Discover-card-dark.png"
            class="w-14 h-full ml-1 mr-1"
          />
          <img
            src="~/assets/img/paymentMethods/creditCards/AmericanExpress/AmericanExpress-dark.png"
            class="w-14 h-full ml-1 mr-1"
          />
          <img
            src="~/assets/img/paymentMethods/paymentSystems/Skrill/Skrill-card-dark.png"
            class="w-14 h-full ml-1 mr-1"
          />
        </div>
      </div>
    </div>
    <!-- <Footer></Footer> -->
  </div>
</template>

<router>
  {
    path: '/custom-payment'
  }
</router>

<script>
export default {
  data() {
    return {
      email: "",
      amount: "",
      minAmount: 1,
      maxAmount: 500,
      currency: "USD",
      error: false,
    };
  },
  computed: {
    amountFiltered: {
      get() {
        return this.amount;
      },
      set(value) {
        this.amount = value;
        this.error = false;
        if (value < this.minAmount) {
          this.error = `Amount can't be lower than ${this.minAmount} ${this.currency}`;
        }
        if (value > this.maxAmount) {
          this.error = `Amount can't be higher than ${this.maxAmount} ${this.currency}`;
        }
      },
    },
  },
  methods: {
    async checkout() {
      if (!this.error) {
        console.log(this.amount);
        let payopData = await this.$axios.$post("/checkout/custom-payment", {
          email: this.email,
          amount: this.amount,
          currency: this.currency,
        });
        if (payopData.status == 1) {
          window.location.replace(
            "https://checkout.payop.com/en/payment/" + payopData.data
          );
        }
      }
    },
    numbersOnly(evt) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        evt.preventDefault();
      } else {
        return true;
      }
    },
  },
};
</script>
