<template>
  <div class="socialbar">
    <a
      v-for="item in items"
      :key="item.name"
      :aria-label="item.name"
      :href="item.link"
      target="_blank"
      class="socialbar-link is-size-4"
    >
      <icon :icon="item.icon" aria-hidden />
    </a>
  </div>
</template>

<script>
import Facebook from "@/assets/facebook.svg"
import Instagram from "@/assets/instagram.svg"
import Twitter from "@/assets/twitter.svg"
import Icon from "@/components/icon"

export default {
  components: {
    Icon,
  },
  computed: {
    items: () => [
      { name: "Facebook", icon: Facebook, link: "https://facebook.com" },
      { name: "Instagram", icon: Instagram, link: "https://instagram.com" },
      { name: "Twitter", icon: Twitter, link: "https://twitter.com" },
    ],
  },
}
</script>

<style lang="scss" scoped>
.socialbar {
  display: flex;
  justify-content: center;
  margin: -1rem;
}

.socialbar-link {
  margin: 1rem;
}
</style>
