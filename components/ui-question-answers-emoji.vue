<template>
  <div v-if="answers" class="answers emojis">
    <div class="inside">
      <ui-button
        v-for="(answer, index) in answers"
        :key="index"
        :style="{ fontSize: '2.5rem' }"
        :class="{
          answer: true,
          emoji: true,
          selected: pickedAnswers && pickedAnswers.includes(answer),
        }"
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
    chosenAnswer: {
      type: Array,
      required: false,
      default: function () {
        return []
      },
    },
  },
  data: () => ({
    pickedAnswers: [],
  }),
  computed: {},
  mounted() {
    this.pickedAnswers = this.chosenAnswer
  },
  methods: {
    saveAndNext(value) {
      this.pickedAnswers = [value]
      this.$emit("answer-selected", this.pickedAnswers)
    },
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables";

.answers.emojis {
  margin-left: auto;
  margin-right: auto;

  .inside {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .answer {
    margin: 0.5rem;
    line-height: 1;
  }
}
</style>
