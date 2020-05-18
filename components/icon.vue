<template>
  <component :is="icon" aria-hidden class="icon" v-on="$listeners" />
</template>

<script>
export default {
  props: {
    icon: { required: true, type: Object },
  },
}
</script>

<style lang="scss" scoped>
.icon {
  height: 1em;
  width: auto;
  vertical-align: middle;

  &,
  /deep/ path {
    fill: currentColor;
  }
}
</style>
