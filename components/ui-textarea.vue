<template>
  <div class="textarea">
    <textarea
      :value="value"
      rows="9"
      @input="$emit('input', $event.target.value)"
    />
    <span
      class="textarea-counter"
      :class="[
        'textarea-counter',
        { alert: charsLeft < 50 && charsLeft > 0, error: !isValid },
      ]"
    >
      {{ charsLeft }} Zeichen
    </span>
  </div>
</template>

<script>
export default {
  props: {
    value: { type: String, default: "" },
    maxLength: { type: Number, default: 0 },
  },
  computed: {
    charsLeft() {
      return this.maxLength - this.value.length
    },
    isValid() {
      return this.charsLeft >= 0
    },
  },
  watch: {
    isValid: {
      immediate: true,
      handler() {
        this.$emit("valid-change", this.isValid)
      },
    },
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables";

.textarea {
  position: relative;
  border: $border;
  border-radius: $border-radius-md;
  overflow: hidden;
  padding: 1rem;
  box-shadow: $shadow-md;

  textarea {
    display: block;
    resize: none;
    width: 100%;
    border: none;

    &:focus {
      outline: none;
    }
  }
}

.textarea-counter {
  position: absolute;
  bottom: 0;
  right: 0;
  color: #888888dd;
  font-size: 0.8rem;
  display: inline-block;
  padding: 0.5rem;

  &.alert {
    color: orange;
  }

  &.error {
    color: darken(red, 5%);
  }
}
</style>
