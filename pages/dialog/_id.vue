<template>
  <ui-dialog v-bind="dialogProps">
    <ui-question-slider v-if="dialog" :questions="questions" :dialog="dialog" />
  </ui-dialog>
</template>

<script>
import UiDialog from "@/components/ui-dialog"
import UiQuestionSlider from "@/components/ui-question-slider"
import config from "@/config"

export default {
  components: {
    UiDialog,
    UiQuestionSlider,
  },
  computed: {
    dialogProps() {
      return {
        title: this.dialog && this.dialog.title ? this.dialog.title : ``,
        bgcolor: this.dialog && this.dialog.color ? this.dialog.color : ``,
        color: this.dialog && this.dialog.color ? `#fff` : `inherit`,
      }
    },

    dialog() {
      return config.dialogs[this.$route.params.id]
    },
    questions() {
      return this.dialog.questions || []
    },
  },
}
</script>
