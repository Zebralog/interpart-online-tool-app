<template>
  <div v-if="answers" class="answers radios">
    <label
      v-for="(answer, index) in answers"
      :key="index"
      class="answer radio"
      @click="saveAndNext(answer.value)"
    >
      <input class="input" type="radio" name="answer" />
      <span class="button">
        <span class="key is-size-4">{{ answer.key }}</span>
        <span class="content">{{ answer.content }}</span>
      </span>
    </label>
  </div>
</template>

<script>
export default {
  components: {},
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

.answers.radios {
  display: flex;
  flex-direction: column;
  margin: -0.5rem;

  .answer.radio {
    display: block;
    position: relative;
    margin: 0.5rem;

    .button {
      display: flex;
      align-items: center;
    }
    .key {
      min-width: 2.5rem;
    }
    .content {
      flex-grow: 1;
    }
    .input {
      position: absolute;
      right: 1rem;
      top: 50%;
      transform: translateY(-50%);
      appearance: none;
      width: 1rem;
      height: 1rem;
      background: $grey-lightest;
      border-radius: 100%;

      &:checked {
        background: $grey;
      }
    }
  }
}
</style>
