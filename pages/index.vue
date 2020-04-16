<template>
  <nuxt-link :to="{ name: 'tour' }" class="hero">
    <img
      :src="imageUrl"
      alt="Willkommen bei Wiesbaden Biebrich! Los gehts"
      class="hero-image"
    />
  </nuxt-link>
</template>

<script>
import imageUrl from "@/assets/wiesbaden.png"

export default {
  layout: "none",
  computed: {
    imageUrl: () => imageUrl,
  },
}
</script>
