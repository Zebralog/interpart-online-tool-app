<template>
  <component :is="tag" :to="to" class="hero">
    <img
      :src="imageUrl"
      :alt="imageAlt"
      :style="{ objectPosition: position }"
      class="hero-image"
    />
  </component>
</template>

<script>
export default {
  props: {
    tag: { type: String, default: "nuxt-link" },
    to: { type: Object, default: undefined },
    imageUrl: { type: String, default: undefined },
    imageAlt: { type: String, default: undefined },
    position: { type: String, default: "50% 0" },
  },
}
</script>

<style lang="scss" scoped>
.hero {
  display: block;
  height: 100%;
}

.hero-image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
