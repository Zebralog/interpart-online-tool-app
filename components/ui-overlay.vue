<template>
  <div class="overlay">
    <slot />
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
  padding: 2rem 2rem 4rem 2rem;
  background: rgba(#fff, 0.6);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}
</style>
