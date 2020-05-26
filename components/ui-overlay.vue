<template>
  <div>
    <transition name="slide-up" appear>
      <div class="overlay">
        <slot />
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/variables";

.overlay {
  display: flex;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: $navbar-height;

  /deep/ > * {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    padding: 2rem 2rem 4rem 2rem;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    background: rgba(#fff, 0.6);
  }
}
</style>
