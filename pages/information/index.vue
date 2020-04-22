<template>
  <ui-overlay>
    <ui-title>Information</ui-title>
    <ui-list :items="informationItems" />
  </ui-overlay>
</template>

<script>
import UiOverlay from "@/components/ui-overlay"
import UiTitle from "@/components/ui-title"
import UiList from "@/components/ui-list"
import config from "@/config"

export default {
  transition: (to, from) => ({
    mode: "",
    name: from?.name === "information.name" ? "prev" : "slide-up",
  }),
  components: {
    UiOverlay,
    UiTitle,
    UiList,
  },
  computed: {
    informationItems: () =>
      config.informationItems.map((item) => ({
        ...item,
        to: { name: "information.name", params: { name: item.name } },
      })),
  },
}
</script>
