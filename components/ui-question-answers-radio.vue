<template>
  <div v-if="answers" class="answers radios">
    <div
      v-for="(answer, index) in answers"
      :key="index"
      class="answer radio"
      @click="saveAndNext(answer.value)"
    >
      <span class="key">{{ answer.key }}</span>
      <span class="content">{{ answer.content }}</span>
      <span class="input"><input type="radio" name="answer" /></span>
    </div>
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
.answers.radios {
  display: grid;
  grid-template-columns: 1fr;
  text-align: center;
  .answer.radio {
    border: 1px solid black;
    background-color: lightcyan;

    height: 3rem;
    margin-bottom: 1rem;

    .key {
      display: inline-block;
      width: 15%;
    }
    .content {
      display: inline-block;
      width: 65%;
    }
    .input {
      display: inline-block;
      text-align: right;
      width: 15%;
    }
  }

  .answer.radio:hover {
    background-color: lightgray;
  }
}
</style>
