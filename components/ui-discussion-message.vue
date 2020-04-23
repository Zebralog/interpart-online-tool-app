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
  components: {},
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
.message-container {
  margin-top: 10px;
  margin-bottom: 35px;
  text-align: right;
}

.content {
  padding: 1em;
  background-color: #fff;
  border: 1px solid #000;
}

.metadata {
  display: inline-block;
  padding: 0.4rem;
  background-color: #dedede;
  opacity: 0.7;
  border-radius: 9px;
  font-size: 75%;
}
</style>
