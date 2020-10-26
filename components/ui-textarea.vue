<template>
  <div class="textarea">
    <textarea
      :value="value"
      rows="7"
      :placeholder="placeholder"
      :class="{ 'is-dirty': !!value }"
      @input="$emit('input', $event.target.value)"
    />
    <icon
      class="textarea-edit-icon"
      :icon="EditIcon"
      :size="`medium`"
      aria-hidden
    />
    <span
      class="textarea-counter"
      :class="[
        'textarea-counter',
        { alert: charsLeft < 50 && charsLeft > 0, error: charsLeft < 0 },
      ]"
    >
      {{ charsLeft }} Zeichen
    </span>
  </div>
</template>

<script>
import EditIcon from "@/assets/edit.svg"
import Icon from "@/components/icon"

export default {
  components: {
    Icon,
  },
  props: {
    value: { type: String, default: "" },
    placeholder: { type: String, default: "" },
    maxLength: { type: Number, default: 0 },
  },
  computed: {
    charsLeft() {
      return this.maxLength - this.value.length
    },
    isValid() {
      return this.value.length > 0 && this.charsLeft >= 0
    },
    EditIcon() {
      return EditIcon
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

  textarea {
    display: block;
    resize: none;
    width: 100%;
    border: none;
    padding: 1rem;
    box-shadow: $shadow-md;
    border: 1px solid $grey-lighter;
    border-radius: $border-radius-md;
    font-family: inherit;
    font-size: inherit;
    appearance: none;

    &:focus {
      outline: none;
      border: $border;

      & + .textarea-edit-icon {
        opacity: 0;
      }
    }

    &.is-dirty + .textarea-edit-icon {
      opacity: 0;
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
  padding: 0.5rem 0.75rem;

  &.alert {
    color: orange;
  }

  &.error {
    color: darken(red, 5%);
  }
}

.textarea-edit-icon {
  position: absolute;
  top: 1em;
  left: 1em;
  color: $color-text-light;
  pointer-events: none;
  opacity: 1;
  transition: opacity 0.15s ease-in-out;
}
</style>
