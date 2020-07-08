<template>
  <img :class="['image', 'is-' + variant]" :alt="alt" :title="title" />
</template>

<script>
export default {
  props: {
    variant: { type: String, default: "normal" },
    alt: { type: String, default: "", required: false },
    title: { type: String, default: "", required: false },
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
