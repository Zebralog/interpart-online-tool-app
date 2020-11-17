<template>
  <div>
    <ui-image
      v-if="question.image"
      variant="exposed"
      :src="question.image ? question.image.src : ``"
      :alt="question.image ? question.image.alt : ``"
      :title="question.image ? question.image.title : ``"
      class="question-image"
    />
    <div :class="['question-question', { 'has-content': content }]">
      <h2 v-if="title" class="question-title" v-html="title" />
      <small v-if="content" class="question-content" v-html="content" />
    </div>
    <component
      :is="answerComponents[question.type]"
      v-if="question && question.answers"
      :question="question"
      :answers="question.answers"
      :chosen-answer="pickedAnswer"
      @answer-selected="handleAnswer"
      @answer-is-preselected="handleAnswerPreselection"
    />
  </div>
</template>

<script>
import UiImage from "@/components/ui-image"
import AnswersEmoji from "@/components/ui-question-answers-emoji"
import AnswersRadio from "@/components/ui-question-answers-radio"
import AnswersRadioMultiple from "@/components/ui-question-answers-radio-multiple"

export default {
  components: {
    UiImage,
  },
  props: {
    question: { type: Object, required: true },
    answer: {
      type: Array,
      required: false,
      default: function () {
        return []
      },
    },
  },
  data: () => ({
    pickedAnswer: null,
  }),
  computed: {
    title() {
      return typeof this.question.question === "string"
        ? this.question.question
        : this.question.question.title
    },
    content() {
      return typeof this.question.question !== "string"
        ? this.question.question.content
        : undefined
    },
    answerComponents: () => ({
      emoji: AnswersEmoji,
      radio: AnswersRadio,
      multiple: AnswersRadioMultiple,
    }),
  },
  mounted() {
    this.pickedAnswer = this.answer
  },
  methods: {
    handleAnswer(answer) {
      this.pickedAnswer = answer
      this.$emit("answer-selected", this.pickedAnswer)
    },
    handleAnswerPreselection(answer) {
      this.$emit("answer-is-preselected", answer)
    },
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables";

.question-image {
  margin-bottom: 1.5rem;
}

.question-question {
  margin-bottom: 1rem;

  &:not(.has-content) {
    max-width: $max-width-narrow;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
  .question-content {
    font-size: $font-size-5;
  }
}

.question-title {
  font-size: $font-size-5;
  font-weight: 500;
}
</style>
