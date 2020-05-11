<template>
  <button type="button" @click="emitClick">
    Weiter
    <icon :icon="AngleRightCircle" />
  </button>
</template>

<script>
import Icon from "@/components/icon"
import AngleRightCircle from "@/assets/angle-right-circle.svg"

export default {
  components: {
    Icon,
  },
  props: {},
  data: () => ({}),
  computed: {
    AngleRightCircle: () => AngleRightCircle,
  },
  methods: {
    emitClick: function () {
      this.$emit("click")
    },
  },
}
</script>
