<template>
  <div>
    <main class="hero">
      <img :src="mapUrl" class="hero-image" />
    </main>
    <nuxt class="dialog" />
    <footer class="navbar">
      <nuxt-link
        v-for="item in items"
        :key="item.title"
        :to="item.to"
        class="navbar-link"
      >
        <component :is="item.icon" :aria-label="item.title" class="icon" />
      </nuxt-link>
    </footer>
  </div>
</template>

<script>
import NounInfo from "@/assets/noun-info.svg"
import NounMap from "@/assets/noun-map.svg"
import NounTalk from "@/assets/noun-talk.svg"
import mapUrl from "!url-loader!@/assets/map.svg"

export default {
  computed: {
    mapUrl: () => mapUrl,
    items: () => [
      { icon: NounInfo, title: "Informationen", to: { name: "information" } },
      { icon: NounMap, title: "Karte", to: { name: "map" } },
      { icon: NounTalk, title: "Diskussion", to: { name: "discussion" } },
    ],
  },
}
</script>
