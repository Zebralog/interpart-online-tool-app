<template>
  <hero tag="main" :image-url="mapUrl" position="50% 50%" />
</template>

<script>
import Hero from "@/components/hero"
import mapUrl from "!url-loader!@/config/live/map.png"

export default {
  components: {
    Hero,
  },
  computed: {
    mapUrl: () => mapUrl,
  },
}
</script>
