<template>
  <component :is="icon" class="icon" />
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
  fill: currentColor;
}
</style>
