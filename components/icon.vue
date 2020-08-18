<template>
  <component
    :is="icon"
    aria-hidden
    :class="{
      icon: true,
      big: size == `big`,
      medium: size == `medium`,
      'original-color': originalColor,
    }"
    v-on="$listeners"
  />
</template>

<script>
export default {
  props: {
    icon: { required: true, type: Object },
    size: { required: false, type: String, default: "" },
    originalColor: { required: false, type: Boolean, default: false },
  },
}
</script>

<style lang="scss" scoped>
.icon {
  height: 1em;
  width: auto;
  vertical-align: middle;

  &.medium {
    height: 2em;
    width: auto;
  }

  &.big {
    height: 3em;
    width: auto;
  }

  &.giant {
    height: 5em;
    width: auto;
  }

  &:not(.original-color),
  &:not(.original-color) /deep/ path {
    fill: currentColor;
  }
}
</style>
