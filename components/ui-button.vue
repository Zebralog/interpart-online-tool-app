<template>
  <button :class="{ button: true, ['is-' + variant]: true }" v-on="$listeners">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    variant: { type: String, default: "normal" },
  },
}
</script>
