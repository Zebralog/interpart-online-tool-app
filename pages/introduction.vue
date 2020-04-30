<template>
  <ui-dialog>
    <ui-slider :slides="items" />
  </ui-dialog>
</template>

<script>
import UiDialog from "@/components/ui-dialog"
import UiSlider from "@/components/ui-slider"
import config from "@/config"

export default {
  components: {
    UiDialog,
    UiSlider,
  },
  computed: {
    items: () => config.introductionItems,
  },
}
</script>
