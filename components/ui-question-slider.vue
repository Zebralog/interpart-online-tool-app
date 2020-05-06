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
    </transition>
  </div>
</template>

<script>
import AnswersEmoji from "@/components/ui-question-answers-emoji"
import AnswersRadio from "@/components/ui-question-answers-radio"

export default {
  components: {
    AnswersEmoji,
    AnswersRadio,
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
}
</style>
