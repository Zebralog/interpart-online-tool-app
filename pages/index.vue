<template>
  <hero
    :to="{ name: 'tour' }"
    :image-url="imageUrl"
    alt="Willkommen bei Wiesbaden Biebrich! Los gehts"
  />
</template>

<script>
import imageUrl from "@/assets/wiesbaden.png"
import Hero from "@/components/hero"

export default {
  layout: "none",
  components: {
    Hero,
  },
  computed: {
    imageUrl: () => imageUrl,
  },
}
</script>
