<template>
  <div v-if="answers" class="answers emojis">
    <div v-for="(answer, index) in answers" :key="index" class="answer emoji">
      <emoji
        :emoji="answer.emoji"
        set="apple"
        :size="48"
        @click="saveAndNext(answer.emoji)"
      />
    </div>
  </div>
</template>

<script>
import { Emoji } from "emoji-mart-vue"

export default {
  components: {
    Emoji,
  },
  props: {
    answers: { type: Array, required: true },
  },
  data: () => ({
    answer: null,
  }),
  computed: {},
  methods: {
    saveAndNext(value) {
      this.answer = value
      this.$emit("answer-selected", this.answer)
    },
  },
}
</script>

<style lang="scss" scoped>
.answers.emojis {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;

  .answer.emoji:hover {
    background-color: lightgray;
  }
}
</style>
