<template>
  <div
    v-if="place && !place.disabled"
    v-click-outside="clickOutsidePin"
    :style="elementStyle"
    :class="['map-place', { 'is-popup-open': isPopupOpen }]"
  >
    <button
      type="button"
      class="map-place-button"
      :aria-label="place.title"
      :style="{ fontSize: '4.5rem', color: pinColor }"
      @click="clickOnPin"
    >
      <icon :icon="Pin" />
    </button>

    <ui-popup
      v-model="isPopupOpen"
      :color="place.color"
      :title="place.title"
      :subtitle="place.subtitle"
      :link-title="
        !place.closed && place.buttonLabel ? place.buttonLabel : `Los geht’s`
      "
      :link-route="
        !place.closed ? { name: 'dialog.id', params: { id: place.id } } : null
      "
    />
  </div>
</template>

<script>
import Icon from "@/components/icon"
import Pin from "@/assets/pin.svg"
import UiPopup from "@/components/ui-popup"

export default {
  components: {
    Icon,
    UiPopup,
  },
  props: {
    place: { type: Object, required: true },
  },
  data: () => ({
    isPopupOpen: false,
  }),
  computed: {
    Pin: () => Pin,
    elementStyle() {
      return {
        left: `${this.place.trigger.x}%`,
        top: `calc(50% - 52vw ${
          this.place.trigger.y > 0 ? "+" : "-"
        } ${Math.abs(this.place.trigger.y)}vw)`,
      }
    },
    pinColor() {
      return this.lightenDarkenColor(this.place.color, 30)
    },
  },
  methods: {
    clickOnPin() {
      this.isPopupOpen = true
      this.$emit("map-popup-opened")
    },
    clickOutsidePin() {
      this.isPopupOpen = false
      this.$emit("map-popup-closed")
    },
    // Borrowed from: https://css-tricks.com/snippets/javascript/lighten-darken-color/
    lightenDarkenColor(col, amt) {
      let usePound = false

      if (col[0] == "#") {
        col = col.slice(1)
        usePound = true
      }

      const num = parseInt(col, 16)

      let r = (num >> 16) + amt

      if (r > 255) r = 255
      else if (r < 0) r = 0

      let b = ((num >> 8) & 0x00ff) + amt

      if (b > 255) b = 255
      else if (b < 0) b = 0

      let g = (num & 0x0000ff) + amt

      if (g > 255) g = 255
      else if (g < 0) g = 0

      return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16)
    },
  },
}
</script>

<style lang="scss" scoped>
.map-place {
  color: #333;
  position: absolute;
  transform: translate(-50%, -100%);

  &.is-popup-open {
    z-index: 1;
  }
}

.map-place-button {
  display: flex;

  &:focus {
    outline: none;
  }
}
</style>
