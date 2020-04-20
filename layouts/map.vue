<template>
  <div>
    <navbar />
    <ui-map />
    <nuxt />
  </div>
</template>

<script>
import UiMap from "@/components/ui-map"
import Navbar from "@/components/navbar"

export default {
  components: {
    UiMap,
    Navbar,
  },
}
</script>
