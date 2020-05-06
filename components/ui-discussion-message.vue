<template>
  <div
    v-if="message"
    :style="elementStyle"
    :data-type="message.type"
    class="message-container"
  >
    <div class="content" @click="toggleMetaInfo">
      {{ message.content }}
    </div>
    <div class="metadata" :style="metaStyle">
      <span class="author">{{ message.author }}</span>
      <span class="timestamp">{{ formatDate(message.timestamp) }}</span>
      <span class="id">#{{ message.id }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: { type: Object, required: true },
  },
  data: function () {
    return {
      showMeta: false,
    }
  },
  computed: {
    elementStyle() {
      return {}
    },
    metaStyle() {
      return {
        display: this.showMeta ? `inline-block` : `none`,
      }
    },
  },
  methods: {
    formatDate(date) {
      const ts = new Date(date)
      const today = new Date()
      if (ts) {
        if (
          today.getFullYear() == ts.getFullYear() &&
          today.getMonth() == ts.getMonth() &&
          today.getDate() == ts.getDate()
        ) {
          return `${ts.toLocaleTimeString()}`
        } else if (today.getFullYear() == ts.getFullYear()) {
          return `${ts.getDate()}/${ts.getMonth()} - ${ts.toLocaleTimeString()}`
        } else {
          return `${ts.toLocaleDateString()} - ${ts.toLocaleTimeString()}`
        }
      }
    },
    toggleMetaInfo() {
      this.showMeta = !this.showMeta
      if (this.showMeta) {
        this.$emit("message-meta-shown")
      } else {
        this.$emit("message-meta-hidden")
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables";

.message-container {
  position: relative;
  margin-top: 3rem;
  margin-bottom: 3rem;
  border-radius: $border-radius-md;
  border: $border;
  background-color: #fff;

  &:before {
    content: "";
    position: absolute;
    left: 0.1rem;
    bottom: -0.6rem;
    width: 2.25rem;
    height: 2.25rem;
    border: $border;
    background: #fff;
    transform: rotate(15deg) skewY(-35deg);
    z-index: -1;
  }

  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -1px;
    width: 2.2rem;
    height: 0.5rem;
    background: #fff;
  }

  .content {
    padding: 1em;
  }

  .metadata {
    display: inline-block;
    padding: 0.4rem;
    background-color: #dedede;
    opacity: 0.7;
    border-radius: 9px;
    font-size: 75%;
    position: absolute;
    top: 100%;
    right: 0;
  }
}
</style>
