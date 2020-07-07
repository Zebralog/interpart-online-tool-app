<template>
  <div v-if="answers" class="answers radios">
    <label
      v-for="(answer, index) in answers"
      :key="index"
      :class="{ answer: true, radio: true, selected: answer.value == choice }"
      @click="selectAnswer(answer.value)"
    >
      <input
        class="input"
        type="radio"
        name="answer"
        :value="answer.value"
        :checked="answer.value === choice"
      />
      <span class="button">
        <span class="key">{{ answer.key }}</span>
        <span class="content">{{ answer.content }}</span>
      </span>
    </label>
    <ui-button
      variant="extra-small"
      :class="{
        button: true,
        isExtraSmall: true,
        weiter: true,
        disabled: !choice || choice.length == 0,
      }"
      :disabled="!choice || choice.length == 0"
      @click="saveAndNext()"
    >
      Weiter
    </ui-button>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    answers: { type: Array, required: true },
  },
  data: () => ({
    choice: null,
  }),
  computed: {},
  methods: {
    saveAndNext() {
      if (this.choice && this.choice.length > 0) {
        this.$emit("answer-selected", this.choice)
      }
    },
    selectAnswer(value) {
      this.choice = value
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

  .button.weiter {
    color: black;
    opacity: 1;
    display: inline-block;
    font-weight: bolder;
    text-align: right;

    &.disabled {
      color: #999;
      opacity: 0.5;
    }
  }

  .answer.radio {
    display: block;
    position: relative;
    margin: 0.5rem;

    &.selected,
    &.selected > span.button {
      background-color: lightgoldenrodyellow;
    }

    .button {
      display: flex;
      align-items: center;
    }
    .key {
      min-width: 2rem;
      font-size: $font-size-4;
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
