<template>
  <ui-dialog>
    <ui-question-slider v-if="dialog" :questions="questions" />
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
    dialog() {
      if (this.$route.params.id) {
        const _dialog = config.dialogs[this.$route.params.id]
        console.log(_dialog)
        // return null
        return _dialog
      }
      return null
    },
    questions() {
      if (this.dialog) {
        return this.dialog.questions
      } else {
        console.log(this.dialog)
      }
      return []
    },
  },
}
</script>
