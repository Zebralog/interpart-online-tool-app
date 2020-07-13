<template>
  <div>
    <ui-image
      v-if="typeof question.image == 'object'"
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
      :answers="question.answers"
      @answer-selected="handleAnswer"
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
  },
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
  methods: {
    handleAnswer(answer) {
      console.log(`ANSWERED!`)
      console.log(answer)
      this.$emit("answer-selected", answer)
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
  margin-bottom: 1.5rem;

  &:not(.has-content) {
    max-width: $max-width-narrow;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
}

.question-title {
  font-size: $font-size-5;
  font-weight: 500;
}
</style>
