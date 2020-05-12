<template>
  <div class="dialog-free-contribution-text">
    <div class="pre">
      <img
        class="icon-check big-message-icon"
        src="/img/green-check-mark.png"
      />
      Schreibe eine <br />
      <strong>Nachricht</strong>
    </div>
    <div class="mid">
      <strong>Was möchtest du uns noch mitteilen?</strong>
      <textarea v-model="textMessage" class="bigarea" />
      <span id="textarea-counter" :class="textareaCounterClasses">
        <span class="counter-container" v-html="charsLeft" />
        Zeichen
      </span>
    </div>

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
import ButtonWeiter from "@/components/ui-button-weiter"

const maxTextMessageLength = 250

export default {
  components: {
    ButtonWeiter,
  },
  data: () => ({
    textMessage: "",
  }),
  computed: {
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
.dialog-free-contribution-text {
  width: 100%;
  text-align: center;

  img.icon-check {
    max-width: 30vw;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .mid {
    margin-top: 2rem;
    margin-bottom: 2rem;

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
}
</style>
