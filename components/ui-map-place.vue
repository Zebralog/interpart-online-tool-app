<template>
  <div v-if="place" :style="elementStyle">
    <div class="popup" :style="popupStyle">
      <h2 class="title">
        {{ place.title }}
      </h2>
      <h3 v-if="place.subtitle" class="subtitle">
        {{ place.subtitle }}
      </h3>
      <nuxt-link
        v-if="place"
        :key="place.id"
        :to="place.to"
        class="action-link"
      >
        Los gehts >>
      </nuxt-link>
      <span class="dismiss" @click="popupClick" />
    </div>
    <div class="trigger-area" :style="triggerAreaStyle" @click="popupClick" />
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
        left: this.place.position.x,
        top: this.place.position.y,
        display: `inline-block`,
      }
    },
    popupStyle() {
      return {
        border: `4px solid ${this.place.color}`,
        visibility: this.popupVisible ? `visible` : "hidden",
      }
    },
    triggerAreaStyle() {
      return {
        left: this.place.triggerArea.from.x,
        top: this.place.triggerArea.from.y,
        width: this.place.triggerArea.width,
        height: this.place.triggerArea.height,
        "min-width": this.place.triggerArea.width,
        "min-height": this.place.triggerArea.height,
      }
    },
  },
  methods: {
    popupClick: function () {
      this.popupVisible = !this.popupVisible
      if (this.popupVisible) {
        this.$emit("popup-opened")
      } else {
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
.trigger-area {
  position: absolute;
  display: inline-block;
  visibility: visible;
  border: 1px solid grey;
  background-color: #fff;
  opacity: 25%;
}
</style>
