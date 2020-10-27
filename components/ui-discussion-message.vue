<template>
  <div
    v-if="message"
    :data-type="message.type"
    :class="['message-container', { 'is-me': isMe }]"
    :style="{
      borderColor: color,
    }"
    :data-message-id="message.id"
  >
    <span class="date"> {{ message.date | formatDate }}</span>
    <span v-if="dialogInformation" class="dialog-info">
      <span v-if="isBellMessage">{{ bellItemIntroText }}</span>
      <span v-else>{{ genericItemIntroText }}</span>
      "{{ dialogInformation }}"
    </span>
    <div class="content">
      {{ showTranslation ? message.translatedContent : message.content }}
    </div>
    <button
      v-if="message.translatedContent"
      class="button is-extra-small"
      :style="buttonInlineStyle"
      @click="toggleTranslation"
    >
      {{
        isShowingTranslatedContent
          ? "Originalsprache anzeigen"
          : "ins Deutsche übersetzen"
      }}
    </button>
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
        return `${date.getDate()}/${
          date.getMonth() + 1
        } - ${date.toLocaleTimeString()}`
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
      showTranslation: false,
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
    bellItemIntroText() {
      return config.bellItemIntroText
    },
    genericItemIntroText() {
      return config.genericItemIntroText
    },
    isBellMessage() {
      return this.message.isBellMessage
    },
    buttonInlineStyle() {
      return this.showTranslation
        ? { borderColor: this.color, backgroundColor: this.color }
        : ""
    },
    isShowingTranslatedContent() {
      return (
        (this.message.language == "de" && !this.showTranslation) ||
        (this.message.language != "de" && this.showTranslation)
      )
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
    toggleTranslation() {
      this.showTranslation = !this.showTranslation
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

  .button {
    border-color: $color-text;
    color: $color-text;
    margin-top: 1em;
  }

  // .translation-is-active {
  //   border-color: inherit;
  //   background: $color-text;
  //   color: white;
  // }
}
</style>
