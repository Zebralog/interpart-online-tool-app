<template>
  <hero tag="main" :image-url="mapUrl" />
</template>

<script>
import Hero from "@/components/hero"
import mapUrl from "!url-loader!@/config/map.svg"

export default {
  components: {
    Hero,
  },
  computed: {
    mapUrl: () => mapUrl,
  },
}
</script>
