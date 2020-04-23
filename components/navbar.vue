<template>
  <header class="navbar">
    <nuxt-link
      v-for="item in items"
      :key="item.title"
      :to="item.to"
      class="navbar-item"
    >
      <icon :icon="item.icon" :aria-label="item.title" />
    </nuxt-link>
  </header>
</template>

<script>
import NounInfo from "@/assets/noun-info.svg"
import NounMap from "@/assets/noun-map.svg"
import NounTalk from "@/assets/noun-talk.svg"
import Icon from "@/components/icon"

export default {
  components: {
    Icon,
  },
  computed: {
    items: () => [
      { icon: NounInfo, title: "Informationen", to: { name: "information" } },
      { icon: NounMap, title: "Karte", to: { name: "map" } },
      { icon: NounTalk, title: "Diskussion", to: { name: "discussion" } },
    ],
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables";

.navbar {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: $navbar-height;
  display: flex;
  background: #fff;
  box-shadow: $shadow-sm;
  z-index: 1;
}

.navbar-item {
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;

  &:not(.is-active) {
    color: #d1d1d1;
  }

  &.is-active {
    position: relative;
    background: #fff;
    color: #7e7e7e;

    &:before {
      content: "";
      position: absolute;
      left: 50%;
      top: -1rem;
      width: 2rem;
      height: 2rem;
      transform: translate(-50%) rotate(45deg);
      background: #fff;
      box-shadow: $shadow-sm;
      z-index: -1;
    }
  }

  .icon {
    display: block;
  }
}
</style>
