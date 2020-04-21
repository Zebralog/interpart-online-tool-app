<template>
  <div class="dialog">
    <div class="dialog-box">
      <div class="dialog-title-bar">
        <nuxt-link :to="{ name: 'map' }">
          <icon :icon="NounClose" />
        </nuxt-link>
      </div>
      <div class="dialog-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "@/components/icon"
import NounClose from "@/assets/noun-close.svg"

export default {
  components: {
    Icon,
  },
  computed: {
    NounClose: () => NounClose,
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables";

.dialog {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: $navbar-height;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  background: rgba(#fff, 0.2);
}

.dialog-box {
  border-radius: 0.4rem;
  background: #fff;
  box-shadow: 0 0.25rem 0.4rem 0 rgba(#000, 0.2);
}

.dialog-title-bar {
  padding: 0.5rem;
  text-align: right;
}

.dialog-content {
  padding: 1.5rem;
}
</style>
