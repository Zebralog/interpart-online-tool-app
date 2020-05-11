<template>
  <div class="slider">
    <transition :name="'slide-' + direction">
      <div v-if="question" :key="questionIndex" class="slide">
        <div class="question-top-header">
          <span
            :class="{ 'answer-back-link': true, hidden: questionIndex == 0 }"
          >
            <button
              type="button"
              class="answer-back-link-button button"
              @click="goBack"
            >
              Zurück
            </button>
          </span>
          <div class="question-progress">
            {{ questionIndex + 1 }} / {{ questions.length }}
          </div>
        </div>

        <img v-if="question.image" :src="question.image" class="slide-image" />

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
          <small class="question-content" v-html="question.question.content" />
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
        <div class="social-bar">
          <span class="share facebook">F</span>
          <span class="share instagram">I</span>
          <span class="share twitter">T</span>
        </div>
      </div>
      <div
        v-else-if="completionState == 'thanks'"
        class="dialog-completion-view"
      >
        <div class="thanks">
          <img class="icon-check" src="/img/green-check-mark.png" />
          <h2>Danke</h2>
          <div class="subtitle">
            für deine Teilnahme!
          </div>

          <nuxt-link :to="{ name: `map` }">
            <button type="button" class="back-to-map button icon-button">
              Zurück zu Karte <icon :icon="NounMap" />
            </button>
          </nuxt-link>
        </div>
        <div
          v-if="dialog && dialog.askForMessage"
          class="free-contribution-selection"
        >
          Dir liegt noch etwas auf dem Herzen?<br />Dann teil es uns mit!
          <br />
          <button
            type="button"
            class="free-contribution button icon-button big"
            @click="next(`free-contribution-choice`)"
          >
            Weiter <icon :icon="AngleRightCircle" />
          </button>
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
          <textarea class="bigarea"></textarea>
        </div>

        <div class="bottom">
          <br />
          <button
            type="button"
            class="free-contribution button icon-button big"
            @click="next(`free-contribution-choice`)"
          >
            Weiter <icon :icon="AngleRightCircle" />
          </button>
        </div>
      </div>
      <div
        v-else-if="completionState == 'free-contribution-audio'"
        class="dialog-free-contribution-audio"
      >
        AUDIO FREE CONTRIBUTION
      </div>
    </transition>
  </div>
</template>

<script>
import AnswersEmoji from "@/components/ui-question-answers-emoji"
import AnswersRadio from "@/components/ui-question-answers-radio"
import Icon from "@/components/icon"
import AngleRightCircle from "@/assets/angle-right-circle.svg"
import NounMap from "@/assets/noun-map.svg"

export default {
  components: {
    AnswersEmoji,
    AnswersRadio,
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
    answer: null,
  }),
  computed: {
    AngleRightCircle: () => AngleRightCircle,
    NounMap: () => NounMap,
    question() {
      return this.questionIndex in this.questions
        ? this.questions[this.questionIndex]
        : null
    },
    prevIndex() {
      return this.questionIndex > 0
        ? this.questionIndex - 1
        : this.questions.length - 1
    },
    nextIndex() {
      return (this.questionIndex + 1) % this.questions.length
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
$image-height: 10rem;

.slider {
  display: flex;
  position: relative;
  min-height: 28rem;
  overflow: hidden;

  .slide {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    flex-shrink: 0;

    .slide-content {
      margin-top: 5rem;
    }

    .slide-image {
      align-self: center;
      height: $image-height;
      width: auto;
    }

    .question-top-header {
      padding-top: 5px;

      .answer-back-link {
        padding: 0.5rem;
        border: 1px solid #000;
      }
      .answer-back-link.hidden {
        visibility: hidden;
      }
    }

    .question-progress {
      text-align: center;
    }

    .slide-question {
      text-align: center;
      margin-bottom: 2rem;

      .question-title {
        font-weight: bold;
        font-size: 120%;
      }
    }

    .social-bar {
      text-align: center;
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
}
</style>
