<template>
  <div
    v-if="place"
    v-click-outside="handleClickOutside"
    :style="elementStyle"
    :data-id="place.id"
  >
    <div :ref="place.id" class="popup" :style="popupStyle">
      <h2 class="title">
        {{ place.title }}
      </h2>
      <h3 v-if="place.subtitle" class="subtitle">
        {{ place.subtitle }}
      </h3>
      <button>Los gehts >></button>
      <span class="dismiss" @click="dismiss" />
    </div>
    <div
      class="popup-trigger-area"
      :style="triggerAreaStyle"
      @click="triggered"
    ></div>
  </div>
</template>

<script>
import NounMap from "@/assets/noun-map.svg"

export default {
  components: {},
  props: {
    place: { type: Object, required: true },
  },
  data: function () {
    return {
      icon: NounMap,
      popupVisible: false,
    }
  },
  computed: {
    elementStyle() {
      return {
        position: `absolute`,
        left: this.place.trigger.x,
        top: this.place.trigger.y,
        display: `inline-block`,
      }
    },
    triggerAreaStyle() {
      return {
        position: `absolute`,
        display: `inline-block`,
        border: `1px solid black`,
        width: `20vw`,
        height: `10vh`,
      }
    },
    popupStyle() {
      return {
        border: `4px solid ${this.place.color}`,
        visibility: this.popupVisible ? `visible` : "hidden",
      }
    },
  },
  methods: {
    dismiss: function () {
      if (this.popupVisible === true) {
        this.popupVisible = false
        this.$emit("popup-closed")
      }
    },
    triggered: function () {
      if (this.popupVisible === false) {
        this.popupVisible = true
        this.$emit("popup-opened")
      } else {
        this.popupVisible = false
        this.$emit("popup-closed")
      }
    },
    handleClickOutside: function () {
      if (this.popupVisible === true) {
        this.dismiss()
        this.$emit("popup-closed")
      }
    },
  },
}
</script>

<style lang="scss" scoped>
h2 {
  font-size: 85%;
  font-weight: bolder;
}

h3 {
  font-size: 75%;
}

.action-link {
  font-size: 75%;
  font-style: italic;
}

.popup {
  width: 6rem;
  padding: 0.8rem;
  display: inline-block;
  background-color: #ffffff;
  border-radius: 1rem;

  .dismiss {
    position: absolute;
    right: 8%;
    top: 3%;
    cursor: pointer;

    &::after {
      content: "x";
    }
  }
}
</style>
