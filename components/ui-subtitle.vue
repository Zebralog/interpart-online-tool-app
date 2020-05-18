<template>
  <h1 class="subtitle">
    <slot />
  </h1>
</template>

<style lang="scss" scoped>
@import "@/assets/variables";

.subtitle {
  font-size: $font-size-5;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>
