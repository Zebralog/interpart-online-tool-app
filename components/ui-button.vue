<template>
  <component
    :is="tag"
    v-bind="$attrs"
    :class="['button', 'is-' + variant]"
    v-on="$listeners"
  >
    <slot />
    <icon v-if="iconRight" :icon="iconRight" class="icon-right" />
  </component>
</template>

<script>
import Icon from "@/components/icon"

export default {
  components: {
    Icon,
  },
  props: {
    tag: { type: String, default: "button" },
    variant: { type: String, default: "normal" },
    iconRight: { type: Object, default: undefined },
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables";

.icon-right {
  margin-left: 0.5rem;
  font-size: 1.3em;
}
</style>
