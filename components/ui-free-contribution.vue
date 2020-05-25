<template>
  <div class="dialog-free-contribution">
    <icon
      class="speech-bubble"
      :icon="SpeechBubble"
      :style="{ color: dialog.color }"
    />
    <div class="subtitle">
      Schreibe eine <br />
      <strong>Nachricht</strong>
    </div>
    <div class="call-to-action">
      Was möchtest du uns noch mitteilen?
    </div>
    <ui-textarea v-model="textMessage" :max-length="maxTextMessageLength" />

    <div class="bottom">
      <br />

      <button-weiter
        class="free-contribution button icon-button big"
        @click="next"
      />
    </div>
  </div>
</template>

<script>
import SpeechBubble from "@/assets/speech-bubble.svg"
import ButtonWeiter from "@/components/ui-button-weiter"
import Icon from "@/components/icon"
import UiTextarea from "@/components/ui-textarea"

export default {
  components: {
    Icon,
    ButtonWeiter,
    UiTextarea,
  },
  props: {
    dialog: { type: Object, required: true },
  },
  data: () => ({
    textMessage: "",
  }),
  computed: {
    SpeechBubble: () => SpeechBubble,
    maxTextMessageLength: () => 250,
  },
  methods: {
    next() {
      if (this.charsLeft < 0) {
        alert(`Your message is too long.`)
        return
      }
      this.$emit("answer-selected", "contribution-done")
    },
  },
}
</script>

<style lang="scss" scoped>
.dialog-free-contribution {
  text-align: center;

  .speech-bubble {
    height: auto;
  }

  .subtitle {
    margin-bottom: 2rem;
  }

  .call-to-action {
    text-align: left;
    font-weight: 500;
  }
}
</style>
