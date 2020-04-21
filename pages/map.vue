<template>
  <Places :places="places" />
</template>

<script>
import Places from "@/components/ui-map-places-container"
import config from "@/config"

export default {
  components: {
    Places,
  },
  data: function () {
    return {
      places: config.places,
    }
  },
  render: () => undefined,
}
</script>
