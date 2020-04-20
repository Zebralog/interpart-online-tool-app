<template>
  <div>
    <navbar />
    <ui-map class="blur" />
    <ui-dialog>
      <nuxt />
    </ui-dialog>
  </div>
</template>

<script>
import UiMap from "@/components/ui-map"
import Navbar from "@/components/navbar"
import UiDialog from "@/components/ui-dialog"

export default {
  components: {
    UiMap,
    Navbar,
    UiDialog,
  },
}
</script>
