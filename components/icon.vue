<template>
  <component :is="icon" aria-hidden class="icon" />
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
  fill: currentColor;
  vertical-align: middle;
}
</style>
