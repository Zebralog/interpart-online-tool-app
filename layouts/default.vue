<template>
  <div>
    <main class="main">
      <nuxt />
    </main>
    <footer class="navbar">
      <nuxt-link :to="{ name: 'information' }" class="navbar-link">
        Informationen
      </nuxt-link>
      <nuxt-link :to="{ name: 'map' }" class="navbar-link">
        Karte
      </nuxt-link>
      <nuxt-link :to="{ name: 'discussion' }" class="navbar-link">
        Diskussion
      </nuxt-link>
    </footer>
  </div>
</template>
