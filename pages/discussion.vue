<template>
  <ui-overlay>
    <ui-title class="is-sr-only">
      Diskussion
    </ui-title>
    <discussion :messages="messages" :last-message="lastMessage" />
  </ui-overlay>
</template>

<script>
import UiOverlay from "@/components/ui-overlay"
import UiTitle from "@/components/ui-title"
import Discussion from "@/components/ui-discussion"

export default {
  components: {
    UiOverlay,
    UiTitle,
    Discussion,
  },
  computed: {
    messages() {
      return this.$store.getters["messages/all"]
    },
    lastMessage() {
      return this.$store.getters["messages/lastCreatedMessage"]
        ? this.$store.getters["messages/lastCreatedMessage"].id
        : null
    },
  },
  mounted() {
    this.$store.dispatch("messages/loadItems")
  },
}
</script>
