<template>
  <nuxt-link :to="to" class="link">
    <slot />
  </nuxt-link>
</template>

<script>
export default {
  props: {
    to: { type: Object, default: undefined },
  },
}
</script>

<style lang="scss" scoped>
.link {
  font-weight: bold;
}
</style>
