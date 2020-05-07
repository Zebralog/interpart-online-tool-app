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

<style lang="scss">
.icon {
  height: 1em;
  width: auto;
  vertical-align: middle;

  &,
  path {
    fill: currentColor;
  }
}
</style>
