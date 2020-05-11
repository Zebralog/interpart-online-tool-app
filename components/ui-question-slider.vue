<template>
  <div class="slider">
    <transition name="fade">
      <ui-button
        v-if="questionIndex !== 0"
        variant="light"
        class="slider-back-button is-size-7"
        @click="goBack"
      >
        Zurück
      </ui-button>
    </transition>
    <div
      v-if="questionIndex < questions.length"
      class="slider-progress is-size-7"
    >
      {{ questionIndex + 1 }} / {{ questions.length }}
    </div>
    <div class="slider-content">
      <transition :name="'slide-' + direction">
        <div v-if="question" :key="questionIndex" class="slide">
          <img
            v-if="question.image"
            :src="question.image"
            class="slide-image"
          />

          <div
            v-if="typeof question.question == 'string'"
            class="slide-question"
            v-html="question.question"
          />
          <div
            v-else-if="typeof question.question == 'object'"
            class="slide-question"
          >
            <h2 class="question-title" v-html="question.question.title" />
            <small
              class="question-content"
              v-html="question.question.content"
            />
          </div>
          <AnswersEmoji
            v-if="question && question.answers && question.type == 'emoji'"
            :answers="question.answers"
            @answer-selected="saveAndNext"
          />
          <AnswersRadio
            v-else-if="question && question.answers && question.type == 'radio'"
            :answers="question.answers"
            @answer-selected="saveAndNext"
          />
          <ui-socialbar />
        </div>
        <div
          v-else-if="
            ['thanks', 'free-contribution-done'].indexOf(completionState) > -1
          "
          class="dialog-completion-view"
        >
          <div class="thanks">
            <img class="icon-check" src="/img/green-check-mark.png" />
            <h2>Danke!</h2>
            <div
              v-if="completionState == 'free-contribution-done'"
              class="subtitle"
            >
              Deine Nachricht
              <br />
              wurde gesendet.
            </div>
            <div v-else class="subtitle">
              für deine Teilnahme!
            </div>

            <nuxt-link :to="{ name: `map` }">
              <button type="button" class="back-to-map button icon-button">
                Zurück zu Karte
                <icon :icon="NounMap" />
              </button>
            </nuxt-link>
          </div>
          <div
            v-if="completionState == 'thanks' && dialog && dialog.askForMessage"
            class="free-contribution-selection"
          >
            Dir liegt noch etwas auf dem Herzen?<br />Dann teil es uns mit!
            <br />
            <button-weiter
              class="free-contribution button icon-button big"
              @click="next(`free-contribution-choice`)"
            />
          </div>
        </div>
        <div
          v-else-if="completionState == 'free-contribution-choice'"
          class="dialog-free-contribution-select"
        >
          <div class="audio" @click="next(`free-contribution-audio`)">
            audio
            <img class="icon-check" src="/img/green-check-mark.png" />
          </div>
          <div class="text" @click="next(`free-contribution-text`)">
            text
            <img class="icon-check" src="/img/green-check-mark.png" />
          </div>
        </div>
        <div
          v-else-if="completionState == 'free-contribution-text'"
          class="dialog-free-contribution-text"
        >
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
              @click="next(`free-contribution-done`)"
            />
          </div>
        </div>
        <div
          v-else-if="completionState == 'free-contribution-audio'"
          class="dialog-free-contribution-audio"
        >
          <div class="pre">
            <img
              class="icon-check big-message-icon"
              src="/img/green-check-mark.png"
            />
            <br />
            <strong>AUDIO MESSAGE</strong>
          </div>
          <div class="mid">
            <strong>Please leave an audio message</strong>
            <small>(secretely listening to your phone mic...)</small>
          </div>

          <div class="bottom">
            <br />

            <button-weiter
              class="free-contribution button icon-button big"
              @click="next(`free-contribution-done`)"
            />
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import AnswersEmoji from "@/components/ui-question-answers-emoji"
import AnswersRadio from "@/components/ui-question-answers-radio"
import UiButton from "@/components/ui-button"
import UiSocialbar from "@/components/ui-socialbar"
import ButtonWeiter from "@/components/ui-button-weiter"
import NounMap from "@/assets/noun-map.svg"
import Icon from "@/components/icon"

export default {
  components: {
    AnswersEmoji,
    AnswersRadio,
    UiButton,
    UiSocialbar,
    ButtonWeiter,
    Icon,
  },
  props: {
    questions: { type: Array, required: true },
    dialog: { type: Object, required: false, default: null },
  },
  data: () => ({
    completionState: null,
    questionIndex: 0,
    direction: undefined,
    textMessage: undefined,
    answer: null,
    maxTextMessageLength: 250,
  }),
  computed: {
    NounMap: () => NounMap,
    question() {
      return this.questionIndex in this.questions
        ? this.questions[this.questionIndex]
        : null
    },
    charsLeft() {
      return this.textMessage
        ? this.maxTextMessageLength - this.textMessage.length
        : this.maxTextMessageLength
    },
    prevIndex() {
      return this.questionIndex > 0
        ? this.questionIndex - 1
        : this.questions.length - 1
    },
    nextIndex() {
      return (this.questionIndex + 1) % this.questions.length
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
    setIndex(index) {
      this.direction = index < this.questionIndex ? "left" : "right"
      this.questionIndex = index
    },
    saveAndNext(value) {
      this.answer = value
      const next = this.questionIndex + 1
      if (next < this.questions.length) {
        console.log(`saveAndNext ${value} >> ${next}`)
        console.log(`moving to question ${next} of ${this.questions.length}`)
        this.setIndex(next)
      } else if (next == this.questions.length) {
        this.completionState = "thanks"
        this.questionIndex += 1
      } else if (this.completionState == "thanks") {
        this.completionState = "free-contribution-choice"
        this.questionIndex += 1
      } else if (this.completionState == "free-contribution-text") {
        this.completionState = "final-thanks"
        this.questionIndex += 1
      } else if (this.completionState == "free-contribution-audio") {
        this.completionState = "final-thanks"
        this.questionIndex += 1
      }
    },
    next(state) {
      if (this.completionState === `free-contribution-text`) {
        // let's check the message before submitting
        if (this.charsLeft < 0) {
          alert(`Your message is too long.`)
          return
        }
      }
      this.questionIndex += 1
      this.completionState = state
    },
    goBack() {
      if (this.questionIndex > 0) {
        const next = this.questionIndex - 1
        console.log(`moving to question ${next} of ${this.questions.length}`)
        this.setIndex(next)
      } else {
        console.warn(
          `already on first question, this button should not be visible.`
        )
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables";

$image-height: 10rem;

h2,
strong {
  font-weight: bold;
}

.slider {
  position: relative;
  padding-top: 1.5rem;

  .slider-back-button {
    position: absolute;
    left: 0;
    top: 0;
  }

  .slider-progress {
    margin-bottom: 1.5rem;
    text-align: center;
    color: $color-text-light;
  }

  .slider-content {
    display: flex;
    position: relative;
    min-height: 32rem;
    overflow: hidden;
    padding-bottom: 0.5rem;
  }

  .slide {
    display: flex;
    flex-direction: column;
    width: 100%;
    flex-shrink: 0;

    .slide-content {
      margin-top: 5rem;
    }

    .slide-image {
      border-radius: $border-radius-lg;
      box-shadow: $shadow-lg;
      margin-bottom: 1.5rem;
    }

    .slide-question {
      max-width: $max-width-narrow;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
      margin-bottom: 1.5rem;
      font-size: 1.25rem;
    }
  }

  .dialog-completion-view {
    width: 100%;
    text-align: center;

    .thanks {
      img.icon-check {
        max-width: 50vw;
      }
    }

    .free-contribution {
      margin-top: 5vh;
    }

    .icon-button {
      padding: 2vw;
      border: 1px solid #00000033;

      -webkit-box-shadow: 0 10px 6px -6px #777;
      -moz-box-shadow: 0 10px 6px -6px #777;
      box-shadow: 0 10px 6px -6px #777;

      &.big {
        font-size: 1.5rem;
        padding: 0.75rem;
      }
    }
  }

  .dialog-free-contribution-select {
    width: 100%;
    text-align: center;

    .audio,
    .text {
      height: 30vh;

      img.icon-check {
        max-width: 50vw;
      }
    }
  }

  .dialog-free-contribution-text,
  .dialog-free-contribution-audio {
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
}
</style>
