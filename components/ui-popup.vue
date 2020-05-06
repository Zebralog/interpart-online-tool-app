<template>
  <transition name="popup">
    <div
      v-if="isOpen"
      v-click-outside="close"
      :style="{
        borderColor: color,
        [isBottom ? 'top' : 'bottom']: 'calc(100% + 1.5rem)',
      }"
      :class="{ popup: true, 'is-bottom': isBottom }"
    >
      <div class="popup-triangle" :style="{ borderColor: color }" />
      <div class="popup-content">
        <h2 class="title">
          {{ title }}
        </h2>
        <h3 v-if="subtitle" class="subtitle">
          {{ subtitle }}
        </h3>
        <a class="action-link" :href="linkUrl ? linkUrl : `#`">
          {{ linkTitle }}
          <icon :icon="AngleRightCircle" />
        </a>
      </div>
    </div>
  </transition>
</template>

<script>
import Icon from "@/components/icon"
import AngleRightCircle from "@/assets/angle-right-circle.svg"

export default {
  components: {
    Icon,
  },
  props: {
    color: { type: String, required: true },
    title: { type: String, required: true },
    subtitle: { type: String, default: "" },
    linkTitle: { type: String, default: "" },
    linkUrl: { type: String, default: null },
  },
  data: () => ({
    isOpen: false,
    isBottom: false,
  }),
  computed: {
    AngleRightCircle: () => AngleRightCircle,
  },
  methods: {
    open() {
      this.isOpen = true
      this.$nextTick(() => {
        this.$el.style.animation = "none"
        const { y } = this.$el.getBoundingClientRect()
        this.isBottom = y < 0
        this.$el.style.animation = ""
      })
    },
    close() {
      this.isOpen = false
      this.isBottom = false
    },
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables";

.popup {
  position: absolute;
  left: 50%;
  width: 9rem;
  padding: 1rem;
  background: #fff;
  border: 3px solid;
  border-radius: $border-radius-lg;
  font-size: 0.85rem;
  transform: translate(-50%);
  box-shadow: $shadow-lg;

  .popup-content {
    position: relative;
  }

  .title {
    font-weight: 500;
  }

  .action-link {
    font-style: italic;
  }

  .popup-triangle {
    content: "";
    position: absolute;
    left: 50%;
    width: 2rem;
    height: 2rem;
    transform: translate(-50%) scaleX(0.7) rotate(45deg);
    background: #fff;
  }

  &:not(.is-bottom) .popup-triangle {
    bottom: -1.3rem;
    border-right: 3px solid;
    border-bottom: 3px solid;
  }

  &.is-bottom .popup-triangle {
    top: -1.3rem;
    border-left: 3px solid;
    border-top: 3px solid;
  }
}
</style>
