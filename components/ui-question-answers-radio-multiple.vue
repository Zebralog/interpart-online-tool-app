<template>
  <div v-if="answers" class="answers radios multiple">
    <label
      v-for="(answer, index) in answers"
      :key="`answer` + index"
      :class="{
        answer: true,
        radio: true,
        check: true,
        selected: choices.includes(answer.value),
      }"
    >
      <input
        class="input"
        type="checkbox"
        name="answer"
        :value="answer.value"
        :checked="choices && choices.includes(answer.value)"
      />
      <span class="button" @click="clickOnAnswer(answer.value)">
        <span v-if="answer.icon" class="icon-container">
          <icon :icon="answer.icon" :size="`medium`" aria-hidden />
        </span>
        <span v-if="question.showAnswerKey" class="key">{{ answer.key }}</span>
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
          disabled: !choices || choices.length === 0,
        }"
        :disabled="!choices || choices.length === 0"
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
    answers: {
      type: Array,
      required: false,
      default: function () {
        return []
      },
    },
    question: {
      type: Object,
      required: false,
      default: function () {
        return {}
      },
    },
  },
  data: () => ({
    choices: [],
  }),
  computed: {
    AngleRightCircle: () => AngleRightCircle,
  },
  methods: {
    saveAndNext() {
      if (this.choices && this.choices.length > 0) {
        this.$emit("answer-selected", this.choices)
      }
    },
    clickOnAnswer(value) {
      if (typeof this.choices !== "object") {
        this.choices = []
      }
      if (this.choices.includes(value)) {
        // remove the value
        const index = this.choices.indexOf(value)
        if (index > -1) {
          this.choices.splice(index, 1)
        }
      } else {
        // add the value
        this.choices.push(value)
      }
      this.$emit("answer-is-preselected", this.choices.length > 0)
    },
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables";

.answers.radios {
  display: flex;
  flex-direction: column;
  margin: 0 -0.5rem;

  .weiter-button-container {
    margin-left: auto;
    margin-right: 0;
    margin-top: 1rem;
  }

  .button.weiter {
    color: $color-text;
    opacity: 1;
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
