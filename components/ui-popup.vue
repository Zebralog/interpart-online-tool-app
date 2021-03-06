<template>
  <transition name="popup">
    <nuxt-link v-if="linkRoute" class="action-link" :to="linkRoute">
      <div
        v-if="value"
        v-click-outside="clickOutsideOptions"
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
          <nuxt-link v-if="linkRoute" class="action-link" :to="linkRoute">
            {{ linkTitle }}
            <icon :icon="AngleRightCircle" />
          </nuxt-link>
        </div>
      </div>
    </nuxt-link>
    <div
      v-else-if="value"
      v-click-outside="clickOutsideOptions"
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
        <nuxt-link v-if="linkRoute" class="action-link" :to="linkRoute">
          {{ linkTitle }}
          <icon :icon="AngleRightCircle" />
        </nuxt-link>
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
    value: { type: Boolean },
    color: { type: String, required: true },
    title: { type: String, required: true },
    subtitle: { type: String, default: "" },
    linkTitle: { type: String, default: "" },
    linkRoute: { type: Object, default: undefined },
  },
  data: () => ({
    isBottom: true,
    clickOutsideActive: false,
  }),
  computed: {
    AngleRightCircle: () => AngleRightCircle,
    clickOutsideOptions() {
      return {
        isActive: this.clickOutsideActive,
        handler: () => this.$emit("input", false),
      }
    },
  },
  watch: {
    value() {
      if (this.value) {
        this.$nextTick(() => {
          this.$el.style.animation = "none"

          this.isBottom = true
          this.$el.style.animation = ""
          this.clickOutsideActive = true
        })
      } else {
        this.isBottom = false
        this.clickOutsideActive = false
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables";

.popup {
  left: 50%;
  position: absolute;
  min-width: 14rem;
  text-align: center;
  padding: 1rem;
  background: #fff;
  border: 3px solid;
  border-radius: $border-radius-xl;
  font-size: $font-size-7;
  transform: translate(-55%);
  box-shadow: $shadow-lg;

  .popup-content {
    position: relative;
  }

  .title {
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  .action-link {
    font-style: inherit;
  }

  .popup-triangle {
    content: "";
    position: absolute;
    left: 55%;
    width: 26px;
    height: 26px;
    transform: translate(-50%) scaleX(0.7) rotate(45deg);
    background: #fff;
  }

  &:not(.is-bottom) .popup-triangle {
    bottom: -15px;
    border-right: 3px solid;
    border-bottom: 3px solid;
  }

  &.is-bottom .popup-triangle {
    top: -15px;
    border-left: 3px solid;
    border-top: 3px solid;
  }
}
</style>
