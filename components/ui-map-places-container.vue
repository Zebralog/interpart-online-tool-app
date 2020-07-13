<template>
  <div
    v-if="places"
    :class="{ 'map-places-container': true, 'has-open-popup': hasOpenPopup }"
  >
    <Place
      v-for="place in places"
      :key="place.id"
      :place="place"
      @map-popup-opened="hasOpenPopup = true"
      @map-popup-closed="hasOpenPopup = false"
    />
  </div>
</template>

<script>
import Place from "@/components/ui-map-place"

export default {
  components: {
    Place,
  },
  props: {
    places: {
      type: Object,
      default: function () {
        return {}
      },
    },
  },
  data: () => ({
    hasOpenPopup: false,
  }),
}
</script>

<style lang="scss" scoped>
.map-places-container {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
}
</style>
