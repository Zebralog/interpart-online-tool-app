<template>
  <div
    v-if="message"
    :data-type="message.type"
    :class="['message-container', { 'is-me': isMe }]"
    :style="{
      borderColor: color,
    }"
  >
    <span class="date"> {{ message.date | formatDate }}</span>
    <span v-if="dialogInformation" class="dialog-info">{{
      dialogInformation
    }}</span>
    <div class="content">
      {{ message.content }}
    </div>
  </div>
</template>

<script>
import { LOGGED_IN_AUTHOR } from "@/model/constants"
import { format, isSameDay } from "date-fns"
import config from "@/config"

export default {
  filters: {
    formatDate: (date) => {
      const today = new Date()
      if (isSameDay(date, today)) {
        return format(date, "HH:mm")
      } else if (today.getFullYear() == date.getFullYear()) {
        return `${date.getDate()}/${date.getMonth()} - ${date.toLocaleTimeString()}`
      } else {
        return `${date.toLocaleDateString()} - ${date.toLocaleTimeString()}`
      }
    },
  },
  props: {
    message: { type: Object, required: true },
  },
  data: function () {
    return {
      showMeta: false,
    }
  },
  computed: {
    metaStyle() {
      return {
        display: this.showMeta ? `inline-block` : `none`,
      }
    },
    dialogInformation() {
      return config.dialogs[this.message.dialogId].title
    },
    isMe() {
      return this.message.author === LOGGED_IN_AUTHOR
    },
    color() {
      return config.dialogs[this.message.dialogId].color
    },
  },
  methods: {
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
  background: #fff;
  border-radius: $border-radius-md;
  border: $border-speech-bubbles;
  position: relative;
  margin-top: 3rem;
  margin-bottom: 3rem;
  margin-right: 15%;
  padding: 0.5rem 1rem 1rem 1rem;
  z-index: 1;

  &:before {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 30px;
    height: 30px;
    border: $border-speech-bubbles;
    border-color: inherit;
    background: #fff;
    pointer-events: none;
    transform: rotate(15deg) skewY(-35deg);
    z-index: -1;
  }

  &:after {
    content: "";
    border-radius: 3px;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    pointer-events: none;
    z-index: -1;
  }

  &.is-me {
    margin-left: 15%;

    &:before {
      left: auto;
      right: 0;
      transform: rotate(-15deg) skewY(35deg);
    }
  }

  .date {
    position: absolute;
    right: 0.5rem;
    bottom: 0;
    z-index: 1;
    font-size: $font-size-8;
    color: #666;
  }

  .dialog-info {
    font-size: $font-size-8;
    color: #666;
  }

  .content {
    font-size: $font-size-6;
  }
}
</style>
