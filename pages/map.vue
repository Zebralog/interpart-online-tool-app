<template>
  <div>
    <transition name="fade" appear>
      <Places :places="dialogs" />
    </transition>
  </div>
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
