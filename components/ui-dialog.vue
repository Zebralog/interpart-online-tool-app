<template>
  <div class="dialog">
    <div class="dialog-content">
      <slot />
    </div>
  </div>
</template>

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

.dialog-content {
  padding: 2rem;
  border-radius: 0.4rem;
  background: #fff;
  box-shadow: 0 0.25rem 0.4rem 0 rgba(#000, 0.2);
}
</style>
