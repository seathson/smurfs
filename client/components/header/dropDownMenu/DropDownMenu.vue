<template>
  <div class="dropDownMenu">
    <HeaderDropDownMenuSmurfs v-if="this.contentType == 'smurfs'"></HeaderDropDownMenuSmurfs>
  </div>
</template>

<script>
export default {
  props: ["contentType"],
};
</script>
