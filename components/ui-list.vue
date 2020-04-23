<template>
  <ul class="list">
    <li v-for="item in items" :key="item.title" class="list-item">
      <nuxt-link :to="item.to">
        {{ item.title }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    items: { type: Array, required: true },
  },
}
</script>

<style lang="scss" scoped>
.list {
  margin-left: -2rem;
  margin-right: -2rem;
  font-size: 1.2rem;
}

.list-item {
  position: relative;
  padding: 1rem 2rem;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    right: 1rem;
    bottom: 0;
    border-bottom: 1px solid #707070;
  }

  &:nth-child(2n):after {
    right: 3rem;
  }
}
</style>
