<template>
  <ui-overlay>
    <nuxt-child />
  </ui-overlay>
</template>

<script>
import UiOverlay from "@/components/ui-overlay"

export default {
  components: {
    UiOverlay,
  },
}
</script>
