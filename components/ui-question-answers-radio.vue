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
        <span v-if="answer.icon" class="icon-container">
          <icon :icon="answer.icon" :size="`medium`" aria-hidden />
        </span>
        <span class="key">{{ answer.key }}</span>
        <span class="content">{{ answer.content }}</span>
      </span>
    </label>
    <div class="weiter-button-container">
      <ui-button
        variant="extra-small"
        :icon-right="AngleRightCircle"
        :class="{
          button: true,
          isExtraSmall: true,
          weiter: true,
          disabled: !choice || choice.length === 0,
        }"
        :disabled="!choice || choice.length === 0"
        @click="saveAndNext()"
      >
        Weiter
      </ui-button>
    </div>
  </div>
</template>

<script>
import UiButton from "@/components/ui-button"
import Icon from "@/components/icon"
import AngleRightCircle from "@/assets/angle-right-circle.svg"

export default {
  components: { UiButton, Icon },
  props: {
    answers: { type: Array, required: true },
  },
  data: () => ({
    choice: null,
  }),
  computed: {
    AngleRightCircle: () => AngleRightCircle,
  },
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

  .weiter-button-container {
    margin-left: auto;
    margin-right: 0;
  }

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
    .icon-container {
      min-width: 3rem;
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
      display: none;

      &:checked {
        background: $grey;
      }
    }
  }
}
</style>
