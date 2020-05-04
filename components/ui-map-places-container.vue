<template>
  <div v-if="places" :style="elementStyle">
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
  computed: {
    elementStyle: () => {
      return {
        width: "100%",
        height: "90%",
        position: `fixed`,
        top: `0`,
        left: `0`,
      }
    },
  },
  mounted: function () {
    console.log(this.places)
  },
}
</script>
