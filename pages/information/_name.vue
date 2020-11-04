<template>
  <div>
    <ui-title>Informationen</ui-title>
    <ui-subtitle class="subtitle">
      {{ item.title }}
    </ui-subtitle>
    <ui-content class="content">
      <div v-interpolation v-html="item.content" />
    </ui-content>
    <ui-link :to="{ name: 'information' }">
      Zurück
    </ui-link>
  </div>
</template>

<script>
import UiTitle from "@/components/ui-title"
import UiSubtitle from "@/components/ui-subtitle"
import UiContent from "@/components/ui-content"
import UiLink from "@/components/ui-link"
import config from "@/config"

export default {
  transition: {
    mode: "",
    name: "next",
  },
  components: {
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

<style lang="scss" scoped>
@import "@/assets/variables";

.subtitle {
  font-size: $font-size-3;
}

.content {
  font-size: $font-size-5;
}
</style>
