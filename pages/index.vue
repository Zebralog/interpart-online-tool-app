<template>
  <hero
    :to="{ name: 'introduction' }"
    :image-url="imageUrl"
    :image-alt="imageAlt"
  />
</template>

<script>
import imageUrl from "@/config/hero.png"
import config from "@/config"
import Hero from "@/components/hero"

export default {
  layout: "none",
  components: {
    Hero,
  },
  computed: {
    imageUrl: () => imageUrl,
    imageAlt: () => config.heroAlt,
  },
}
</script>
