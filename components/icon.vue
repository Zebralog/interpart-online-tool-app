<template>
  <component
    :is="icon"
    aria-hidden
    :class="{ icon: true, big: size == `big`, medium: size == `medium` }"
    v-on="$listeners"
  />
</template>

<script>
export default {
  props: {
    icon: { required: true, type: Object },
    size: { required: false, type: String, default: "" },
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

  &,
  /deep/ path {
    fill: currentColor;
  }
}
</style>
