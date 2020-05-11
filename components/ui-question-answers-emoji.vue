<template>
  <div v-if="answers" class="answers emojis">
    <div class="inside">
      <ui-button
        v-for="(answer, index) in answers"
        :key="index"
        :style="{ fontSize: '2.5rem' }"
        class="answer emoji"
        @click="saveAndNext(answer.value)"
      >
        {{ answer.emoji }}
      </ui-button>
    </div>
  </div>
</template>

<script>
import UiButton from "@/components/ui-button"

export default {
  components: {
    UiButton,
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
@import "@/assets/variables";

.answers.emojis {
  max-width: $max-width-narrow;
  margin-left: auto;
  margin-right: auto;

  .inside {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: -1rem;
  }

  .answer {
    margin: 1rem;
    line-height: 1;
  }
}
</style>
