<template>
  <form class="dialog-free-contribution" @submit.prevent="submit">
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
    <ui-textarea
      v-model="textMessage"
      class="textarea"
      :max-length="maxTextMessageLength"
      @valid-change="isValid = $event"
    />

    <div>
      <ui-button :icon-right="AngleRight" :disabled="!isValid">
        Weiter
      </ui-button>
    </div>
  </form>
</template>

<script>
import SpeechBubble from "@/assets/speech-bubble.svg"
import AngleRight from "@/assets/angle-right.svg"
import Icon from "@/components/icon"
import UiTextarea from "@/components/ui-textarea"
import UiButton from "@/components/ui-button"

export default {
  components: {
    Icon,
    UiTextarea,
    UiButton,
  },
  props: {
    dialog: { type: Object, required: true },
  },
  data: () => ({
    textMessage: "",
    isValid: true,
  }),
  computed: {
    AngleRight: () => AngleRight,
    SpeechBubble: () => SpeechBubble,
    maxTextMessageLength: () => 250,
  },
  methods: {
    submit() {
      this.$store.dispatch("messages/add", {
        dialogId: this.dialog.id,
        type: "text",
        author: "Ich",
        date: new Date(),
        content: this.textMessage,
      })
      this.$emit("answer-selected", "contribution-done")
    },
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables";

.dialog-free-contribution {
  text-align: center;

  .speech-bubble {
    height: auto;
  }

  .subtitle {
    margin-bottom: 2rem;
  }

  .call-to-action {
    font-size: $font-size-5;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  .textarea {
    text-align: left;
    margin-bottom: 2rem;
  }
}
</style>
