<template>
  <component :is="tag" :to="to" class="hero">
    <img :src="imageUrl" :alt="alt" class="hero-image" />
  </component>
</template>

<script>
export default {
  props: {
    tag: { type: String, default: "nuxt-link" },
    to: { type: Object, default: undefined },
    imageUrl: { type: String, default: undefined },
    alt: { type: String, default: undefined },
  },
}
</script>

<style lang="scss" scoped>
.hero {
  display: block;
}

.hero-image {
  width: 100%;
  height: 100vh;
  object-fit: cover;
  display: block;
}
</style>
