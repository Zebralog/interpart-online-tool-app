<template>
  <div class="dialog" @click="close">
    <div class="dialog-box" @click.stop>
      <div class="dialog-title-bar" :style="titleStyle">
        <span v-if="title" class="dialog-title" v-html="title" />
        <nuxt-link :to="closeRoute" class="is-size-4">
          <icon :icon="NounClose" />
        </nuxt-link>
      </div>
      <div class="dialog-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "@/components/icon"
import NounClose from "@/assets/noun-close.svg"

export default {
  components: {
    Icon,
  },
  props: {
    title: { type: String, required: false, default: null },
    color: { type: String, required: false, default: null },
    bgcolor: { type: String, required: false, default: null },
  },
  computed: {
    NounClose: () => NounClose,
    closeRoute: () => ({ name: "map" }),
    titleStyle() {
      return {
        "background-color": this.bgcolor ? this.bgcolor : `#fff`,
        color: this.color ? this.color : `inherit`,
      }
    },
  },
  methods: {
    close() {
      this.$router.push(this.closeRoute)
    },
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables";

.dialog {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: $navbar-height;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  background: rgba(#fff, 0.2);

  .dialog-title-bar {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;

    .dialog-title {
      display: inline-block;
      width: 90%;
      text-align: center;
      font-weight: bold;
    }
  }
}

.dialog-box {
  border-radius: $border-radius-md;
  background: #fff;
  box-shadow: $shadow-md;
}

.dialog-title-bar {
  padding: 0.5rem 0.75rem 0 0.75rem;
  text-align: right;
  color: #7e7e7e;
}

.dialog-content {
  padding: 1.5rem;
}
</style>
