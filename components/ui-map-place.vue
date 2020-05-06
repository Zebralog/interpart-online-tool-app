<template>
  <div v-if="place" :style="elementStyle" :data-id="place.id" class="map-place">
    <ui-popup
      ref="popup"
      :color="place.color"
      :title="place.title"
      :subtitle="place.subtitle"
      :link-title="`Los gehts`"
      :link-url="getPlaceDetailsUrl"
    />
    <div class="map-place-trigger-area" @click="$refs.popup.open()" />
  </div>
</template>

<script>
import UiPopup from "@/components/ui-popup"
import config from "@/config"

export default {
  components: {
    UiPopup,
  },
  props: {
    place: { type: Object, required: true },
  },
  computed: {
    elementStyle() {
      return {
        left: `${this.place.trigger.x}%`,
        top: `calc(50% - 52vw ${
          this.place.trigger.y > 0 ? "+" : "-"
        } ${Math.abs(this.place.trigger.y)}vw)`,
      }
    },
    getPlaceDetailsUrl() {
      return this.place && this.dialog(this.place.id)
        ? `/dialog/${this.place.id}`
        : `#`
    },
  },
  methods: {
    dialog(id) {
      const _dialog = id in config.dialogs ? config.dialogs[id] : null
      return _dialog
    },
  },
}
</script>

<style lang="scss" scoped>
.map-place {
  position: absolute;
  transform: translate(-50%, -50%);
}

.map-place-trigger-area {
  width: 20vw;
  height: 10vh;
}
</style>
