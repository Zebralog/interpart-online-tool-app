<template>
  <ui-overlay>
    <ui-title class="is-sr-only">
      Diskussion
    </ui-title>
    <discussion :messages="messages" />
  </ui-overlay>
</template>

<script>
import UiOverlay from "@/components/ui-overlay"
import UiTitle from "@/components/ui-title"
import Discussion from "@/components/ui-discussion"
import config from "@/config"

export default {
  transition: {
    mode: "",
    name: "slide-up",
  },
  components: {
    UiOverlay,
    UiTitle,
    Discussion,
  },
  data: function () {
    return {
      messages: config.discussion,
    }
  },
}
</script>
