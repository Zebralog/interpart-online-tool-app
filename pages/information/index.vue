<template>
  <div>
    <ui-title>Information</ui-title>
    <ui-list :items="informationItems" />
  </div>
</template>

<script>
import UiTitle from "@/components/ui-title"
import UiList from "@/components/ui-list"
import config from "@/config"

export default {
  components: {
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
