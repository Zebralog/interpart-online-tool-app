<template>
  <div v-if="place" :style="elementStyle">
    <div
      :ref="place.id"
      v-click-outside="toggle"
      class="popup"
      :style="popupStyle"
    >
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
    toggle: function () {
      this.popupVisible = !this.popupVisible
    },
    handleClickOutside: function () {
      const pointX = event.touches[0].clientX
      const pointY = event.touches[0].clientY
      const element = this.$refs[this.place.id]
      const rect = element.getBoundingClientRect()
      const formatRect = {
        min: {
          x: rect.x,
          y: rect.y,
        },
        max: {
          x: rect.x + rect.width,
          y: rect.y + rect.height,
        },
      }

      const distance = this.distanceToRect(formatRect, { x: pointX, y: pointY })
      console.log(this.place)
      console.log(`'${this.place.id}': distance is ${distance}`)
    },
    distanceToRect(rect, p) {
      const dx = Math.max(rect.min.x - p.x, 0, p.x - rect.max.x)
      const dy = Math.max(rect.min.y - p.y, 0, p.y - rect.max.y)
      console.log(`@distanceToRect distance line is (${dx},${dy})`)
      return Math.sqrt(dx * dx + dy * dy)
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
