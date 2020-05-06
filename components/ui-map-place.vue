<template>
  <div v-if="place" :style="elementStyle" class="map-place">
    <ui-popup
      ref="popup"
      :color="place.color"
      :title="place.title"
      :subtitle="place.subtitle"
      :link-title="`Los gehts`"
      :link-route="{ name: 'dialog.id', params: { id: place.id } }"
    />
    <icon
      :icon="Pin"
      :style="{ fontSize: '4.5rem', color: place.color }"
      aria-label="place.title"
      @click="$refs.popup.open()"
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
}
</script>

<style lang="scss" scoped>
.map-place {
  position: absolute;
  transform: translate(-50%, -100%);
}
</style>
