<template>
  <div class="overlay">
    <div class="dialog">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/variables";

.overlay {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: $navbar-height;
  padding: 2rem;
  background: rgba(#fff, 0.6);
  overflow-y: auto;
}
</style>
