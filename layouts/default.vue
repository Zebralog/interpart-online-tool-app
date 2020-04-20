<template>
  <div>
    <navbar />
    <nuxt class="layout-content" />
    <ui-map class="layout-map" />
  </div>
</template>

<script>
import UiMap from "@/components/ui-map"
import Navbar from "@/components/navbar"

export default {
  components: {
    UiMap,
    Navbar,
  },
}
</script>

<style lang="scss" scoped>
.layout-content {
  z-index: 1;
}

.layout-map {
  transition: 0.2s all;

  .dialog-container + & {
    filter: blur(0.5rem);
  }
}
</style>
