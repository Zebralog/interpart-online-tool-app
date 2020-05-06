<template>
  <ui-dialog v-bind="dialogProps">
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
    dialogProps() {
      return {
        title: this.dialog && this.dialog.title ? this.dialog.title : ``,
        bgcolor: this.place && this.place.color ? this.place.color : ``,
        color: this.place && this.place.color ? `#fff` : `inherit`,
      }
    },

    dialog() {
      if (this.$route.params.id) {
        const _dialog = config.dialogs[this.$route.params.id]
        return _dialog
      }
      return null
    },
    place() {
      if (this.$route.params.id) {
        return config.places.find(({ id }) => id === this.$route.params.id)
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
