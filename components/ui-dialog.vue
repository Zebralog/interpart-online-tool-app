<template>
  <div class="dialog" @click="close">
    <transition name="dialog" appear>
      <div class="dialog-box" @click.stop>
        <div class="dialog-title-bar" :style="titleStyle">
          {{ title }}
          <nuxt-link :to="closeRoute" class="dialog-close">
            <icon :icon="NounClose" />
          </nuxt-link>
        </div>
        <div class="dialog-content">
          <slot />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Icon from "@/components/icon"
import NounClose from "@/assets/noun-close.svg"
import hexContrastColor from "hex-contrast-color"

export default {
  components: {
    Icon,
  },
  props: {
    title: { type: String, required: false, default: null },
    color: { type: String, required: false, default: null },
    bgcolor: { type: String, required: false, default: null },
  },
  computed: {
    NounClose: () => NounClose,
    closeRoute: () => ({ name: "map" }),
    titleStyle() {
      return {
        backgroundColor: this.bgcolor ? this.bgcolor : `#fff`,
        color: this.bgcolor ? hexContrastColor(this.bgcolor) : "#7e7e7e",
      }
    },
  },
  mounted() {
    this.$store.dispatch("modal/create")
  },
  destroyed() {
    this.$store.dispatch("modal/destroy")
  },
  methods: {
    close() {
      this.$router.push(this.closeRoute)
    },
  },
}
</script>

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
  padding: 2rem;
  background: rgba(#fff, 0.2);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.dialog-box {
  border-radius: $border-radius-md;
  background: #fff;
  box-shadow: $shadow-md;
  overflow: hidden;
  flex-shrink: 0;
  margin-top: auto;
  margin-bottom: auto;
}

.dialog-title-bar {
  padding: 0.5rem 2rem;
  position: relative;
  text-align: center;
  font-weight: 500;
}

.dialog-close {
  position: absolute;
  top: 0.1rem;
  right: 0.75rem;
  font-size: $font-size-5;
}

.dialog-content {
  padding: 1rem 2rem;
}
</style>
