<template>
  <ui-overlay>
    <ui-title>Informationen</ui-title>
    <ui-subtitle>{{ item.title }}</ui-subtitle>
    <ui-content v-html="item.content" />
    <ui-link :to="{ name: 'information' }">
      Zurück
    </ui-link>
  </ui-overlay>
</template>

<script>
import UiOverlay from "@/components/ui-overlay"
import UiTitle from "@/components/ui-title"
import UiSubtitle from "@/components/ui-subtitle"
import UiContent from "@/components/ui-content"
import UiLink from "@/components/ui-link"
import config from "@/config"

export default {
  components: {
    UiOverlay,
    UiTitle,
    UiSubtitle,
    UiContent,
    UiLink,
  },
  computed: {
    item() {
      return config.informationItems.find(
        ({ name }) => name === this.$route.params.name
      )
    },
  },
}
</script>
