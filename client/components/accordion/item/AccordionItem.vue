<template>
  <div class="accordion__item" :class="{ accordion__active: isOpen }">
    <div class="accordion__question" @click="itemHandler">
      <div class="pr-2">{{ question }}</div>
      <i class="accordion__openIcon fas fa-chevron-right"></i>
    </div>
    <p class="accordion__answer" ref="answerElement" v-html="answer"></p>
  </div>
</template>

<script>
export default {
  methods: {
    itemHandler: function () {
      this.$emit("itemHandler", { index: this.index, isOpen: this.isOpen });
    },
  },
  watch: {
    isOpen: function (value) {
      if (value == false) {
        this.$refs.answerElement.style.maxHeight = "0px";
      } else {
        this.$refs.answerElement.style.maxHeight =
          this.$refs.answerElement.scrollHeight + "px";
      }
    },
  },
  props: ["question", "answer", "isOpen", "index"],
};
</script>