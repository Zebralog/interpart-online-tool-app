<template>
  <div class="slider">
    <transition name="fade">
      <ui-button
        v-if="questionIndex !== 0"
        variant="light"
        class="slider-back-button"
        @click="goBack"
      >
        Zurück
      </ui-button>
    </transition>
    <div class="slider-progress">
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
        </div>
      </transition>
    </div>
    <ui-socialbar />
  </div>
</template>

<script>
import AnswersEmoji from "@/components/ui-question-answers-emoji"
import AnswersRadio from "@/components/ui-question-answers-radio"
import UiButton from "@/components/ui-button"
import UiSocialbar from "@/components/ui-socialbar"

export default {
  components: {
    AnswersEmoji,
    AnswersRadio,
    UiButton,
    UiSocialbar,
  },
  props: {
    questions: { type: Array, required: true },
  },
  data: () => ({
    questionIndex: 0,
    direction: undefined,
    answer: null,
  }),
  computed: {
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
      console.log(`saveAndNext ${value} >> ${next}`)
      if (this.questions.length > next) {
        console.log(`moving to question ${next} of ${this.questions.length}`)
        this.setIndex(next)
      } else {
        alert(`out of questions!`)
      }
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
    min-height: 34rem;
    overflow: hidden;
    margin-bottom: 0.5rem;
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
}
</style>
