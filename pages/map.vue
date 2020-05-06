<template>
  <Places :places="dialogs" />
</template>

<script>
import Places from "@/components/ui-map-places-container"
import config from "@/config"

export default {
  components: {
    Places,
  },
  data: function () {
    return {}
  },
  computed: {
    dialogs: () => config.dialogs,
  },
  render: () => undefined,
}
</script>
