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
    <textarea v-model="textMessage" class="bigarea" />
    <span id="textarea-counter" :class="textareaCounterClasses">
      <span class="counter-container" v-html="charsLeft" />
      Zeichen
    </span>

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

const maxTextMessageLength = 250

export default {
  components: {
    Icon,
    ButtonWeiter,
  },
  props: {
    dialog: { type: Object, required: true },
  },
  data: () => ({
    textMessage: "",
  }),
  computed: {
    SpeechBubble: () => SpeechBubble,
    charsLeft() {
      return maxTextMessageLength - this.textMessage.length
    },
    textareaCounterClasses() {
      return {
        textareaCounter: true,
        alert: this.charsLeft < 50 && this.charsLeft > 0,
        error: this.charsLeft <= 0,
      }
    },
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

  .bigarea {
    width: 91%;
    min-height: 15vh;
    border-radius: 3px;
    margin: 5px 1px 3px 0;

    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    outline: none;
    padding: 3px 0 3px 3px;
    border: 1px solid #dddddd;
  }

  #textarea-counter {
    color: #888888dd;
    font-size: 0.9rem;
    display: inline-block;
    padding: 0.5rem;
  }

  #textarea-counter.alert {
    background-color: lightyellow;
    color: #000;
  }

  #textarea-counter.error {
    background-color: lightsalmon;
    color: #000;
  }
}
</style>
