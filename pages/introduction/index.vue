<template>
  <ui-overlay>
    <ui-title>Introduction</ui-title>
  </ui-overlay>
</template>

<script>
import UiOverlay from "@/components/ui-overlay"
import UiTitle from "@/components/ui-title"
import config from "@/config"

export default {
  components: {
    UiOverlay,
    UiTitle,
  },
  mounted() {
    const first = config.introductionItems[0]
    if (first) {
      this.$router.push({ name: "introduction.id", params: { id: first.id } })
    }
  },
}
</script>
