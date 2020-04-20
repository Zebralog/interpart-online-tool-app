<template>
  <div>
    <navbar />
    <hero tag="main" :image-url="mapUrl" />
    <div class="dialog">
      <nuxt />
    </div>
  </div>
</template>

<script>
import mapUrl from "!url-loader!@/config/map.svg"
import Hero from "@/components/hero"
import Navbar from "@/components/navbar"

export default {
  components: {
    Hero,
    Navbar,
  },
  computed: {
    mapUrl: () => mapUrl,
  },
}
</script>

<style lang="scss" scoped>
.dialog {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 1rem;
  background: #fff;
}
</style>
