<template>
  <li class="smurf">
    <div class="w-full flex flex-col items-center p-5">
      <div class="w-full flex justify-center pb-5 text-center">
        <div class="flex text-whiteDarker text-xl font-semibold">
          {{ smurf.server.acronym + " " + smurf.title }}
        </div>
      </div>
      <div class="row">
        <i class="fas fa-brain"></i>
        <span :class="isHandleveled">{{ makeFirstLetterUppercase(smurf.levelingType) }}</span>
      </div>
      <div class="row">
        <i class="fas fa-box"></i>
        <span>{{ smurf.resource }}</span>
      </div>
      <div class="row">
        <i class="fas fa-level-up-alt"></i>
        <span :class="isUnranked">{{ makeFirstLetterUppercase(smurf.rank) }}</span>
      </div>
      <div class="row">
        <i class="fas fa-bookmark"></i>
        <span>{{ smurf.level }}</span>
      </div>
      <div class="row">
        <i class="fas fa-lock"></i>
        <span class="smurfLighted">{{ makeFirstLetterUppercase(smurf.warranty) }} warranty</span>
      </div>
      <div class="row">
        <i class="fas fa-envelope"></i>
        <span class="smurfLighted">Full e-mail access</span>
      </div>
      <div class="row mt-6">
        <div class="relative flex items-center">
          <div class="text-text pr-3 line-through text-lg">
            ${{ smurf.originalPrice }}
          </div>
          <div class="text-primary font-roboto font-semibold text-xl">
            ${{ smurf.finalPrice }}
          </div>
        </div>
        <div class="primaryButton primaryButton_anime h-9" @click="addToCart">
          Buy Now
        </div>
      </div>
    </div>
  </li>
</template>

<script>

export default {
  props: ["smurf"],
  computed: {
    isHandleveled: function () {
      return {
        "text-textAction":
          this.smurf.levelingType.toLowerCase() == "handleveled",
      };
    },
    isUnranked: function() {
      return {
        "underline": this.smurf.rank.toLowerCase() == "unranked / never played"
      }
    }
  },
  methods: {
    addToCart() {
      this.$store.commit('cart/setSmurf', this.smurf)
      this.$store.commit('cart/toggle')
    },
    makeFirstLetterUppercase(value) {
      return value[0].toUpperCase() + value.substr(1).toLowerCase();
    }
  }
};
</script>
