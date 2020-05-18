<template>
  <img :class="['image', 'is-' + variant]" />
</template>

<script>
export default {
  props: {
    variant: { type: String, default: "normal" },
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables";

.image {
  &.is-exposed {
    border-radius: $border-radius-lg;
    box-shadow: $shadow-lg;
  }
}
</style>
