<template>
  <ui-dialog>Willkommen zur Einführung!</ui-dialog>
</template>

<script>
import UiDialog from "@/components/ui-dialog"

export default {
  transition: {
    mode: "",
    name: "next",
  },
  components: {
    UiDialog,
  },
}
</script>
