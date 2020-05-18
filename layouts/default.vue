<template>
  <div class="layout">
    <navbar />
    <nuxt
      :class="[
        'layout-content',
        ...($store.getters['modal/exists'] ? ['dialog'] : []),
      ]"
    />
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
.layout {
  height: 100%;
}

.layout-content {
  z-index: 1;
}

.layout-map {
  transition: 0.2s all;

  .dialog + & {
    filter: blur(0.5rem);
  }
}
</style>
