<template>
  <h1 class="title">
    <slot />
  </h1>
</template>

<style lang="scss" scoped>
@import "@/assets/variables";

.title {
  position: relative;
  font-size: $font-size-4;
  font-weight: bold;
  padding-left: 2rem;
  padding-bottom: 2rem;
  margin-left: -2rem;
  margin-right: -2rem;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    right: 3rem;
    bottom: 0;
    border-top: 1px solid #707070;
  }
}
</style>
