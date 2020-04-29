<template>
  <div class="paginator-container">
    <span
      v-for="i in pages"
      :key="i"
      :class="{ dot: true, active: current == i }"
      @click="reportClick(i)"
    />
  </div>
</template>

<script>
export default {
  props: {
    position: { type: Number, default: 1 },
    pages: { type: Number, default: 1 },
    current: { type: Number, default: 1 },
    loop: { type: Boolean, default: false },
  },
  methods: {
    reportClick(n) {
      console.log(`slide ${this.position} page clicked ${n}`)
      this.$emit("page-clicked", { slide: this.position, page: n })
    },
  },
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
