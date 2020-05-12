<template>
  <div>
    <img v-if="question.image" :src="question.image" class="question-image" />
    <div class="question-question">
      <div
        v-if="typeof question.question == 'string'"
        class="question-title"
        v-html="question.question"
      />
      <template v-else>
        <h2 class="question-title" v-html="question.question.title" />
        <small class="question-content" v-html="question.question.content" />
      </template>
    </div>
    <component
      :is="answerComponents[question.type]"
      v-if="question && question.answers"
      :answers="question.answers"
      @answer-selected="$emit('answer-selected', $event)"
    />
  </div>
</template>

<script>
import AnswersEmoji from "@/components/ui-question-answers-emoji"
import AnswersRadio from "@/components/ui-question-answers-radio"

export default {
  props: {
    question: { type: Object, required: true },
  },
  computed: {
    answerComponents: () => ({
      emoji: AnswersEmoji,
      radio: AnswersRadio,
    }),
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables";

.question-image {
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
}

.question-title {
  font-size: 1.25rem;
}
</style>
