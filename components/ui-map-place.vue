<template>
  <div
    v-if="place && !place.disabled"
    v-click-outside="clickOutsidePin"
    :style="elementStyle"
    :class="['map-place', { 'is-popup-open': isPopupOpen }]"
  >
    <ui-popup
      v-model="isPopupOpen"
      :color="place.color"
      :title="place.title"
      :subtitle="place.subtitle"
      :link-title="place.buttonLabel ? place.buttonLabel : `Los gehts`"
      :link-route="{ name: 'dialog.id', params: { id: place.id } }"
    />
    <button
      type="button"
      class="map-place-button"
      :aria-label="place.title"
      :style="{ fontSize: '4.5rem', color: place.color }"
      @click="clickOnPin"
    >
      <icon :icon="Pin" />
    </button>
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
  },
}
</script>

<style lang="scss" scoped>
.map-place {
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
