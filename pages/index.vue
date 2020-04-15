<template>
  <div class="hero">
    <div class="hero-top">
      <h1 class="hero-title">
        Willkommen!
      </h1>
      <nuxt-link :to="{ name: 'tour' }" class="hero-subtitle hero-cta">
        Los gehts
      </nuxt-link>
    </div>
    <div class="hero-middle">
      <div class="hero-title">
        Wiesbaden
      </div>
      <div class="hero-subtitle is-uppercase">
        Biebrich
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "none",
}
</script>
