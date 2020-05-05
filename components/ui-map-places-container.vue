<template>
  <div v-if="places" class="map-places-container">
    <Place v-for="place in places" :key="place.id" :place="place" />
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
      type: Array,
      default: function () {
        return []
      },
    },
  },
  mounted: function () {
    console.log(this.places)
  },
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
