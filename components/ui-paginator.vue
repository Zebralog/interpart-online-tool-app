<template>
  <div class="paginator-container">
    <ui-link v-for="page in pages" :key="page.id" :to="page.to">
      <span :class="{ dot: true, active: current == page.id }" />
    </ui-link>
  </div>
</template>

<script>
import UiLink from "@/components/ui-link"

export default {
  components: {
    UiLink,
  },
  props: {
    pages: {
      type: Array,
      default: function () {
        return []
      },
    },
    current: { type: Number, default: 1 },
    loop: { type: Boolean, default: false },
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.paginator-container {
  .dot {
    font-size: 1.4rem;
    color: #ddd;
    border: 1px solid black;
    border-radius: 15rem;
    height: 10px;
    width: 10px;
    display: inline-block;
    margin-right: 3px;
    background-color: #fff;

    &::after {
    }
  }

  .active {
    color: #000;
    background-color: #000;
  }
}
</style>
