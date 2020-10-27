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
  components: {
    UiOverlay,
    UiTitle,
    Discussion,
  },
  computed: {
    messages() {
      // return this.$store.getters["messages.static/all"]
      return this.$store.getters["messages/all"]
    },
  },
  mounted() {
    this.$store
      .dispatch("messages/login", {
        email: config.api.rest.messages.auth.user,
        password: config.api.rest.messages.auth.password,
      })
      .then(() => {
        this.$store.dispatch("messages/loadItems")
      })
  },
}
</script>
