<template>
  <div class="slider">
    <transition :name="'slide-' + direction">
      <div :key="slideIndex" v-touch:swipe="swipe" class="slide">
        <div class="slide-content content" v-html="slide.content" />
        <component
          :is="slide.image.src"
          :alt="slide.image.alt"
          :title="slide.image.title"
          class="slide-image"
          @click="setIndex(nextIndex)"
        />
      </div>
    </transition>
    <div class="paginator">
      <button
        v-for="(page, index) in slides"
        :key="index"
        :aria-label="'Slide ' + index"
        :class="{ dot: true, active: index == slideIndex }"
        @click="setIndex(index)"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    slides: { type: Array, required: true },
    loop: { type: Boolean, required: false, default: true },
  },
  data: () => ({
    slideIndex: 0,
    direction: undefined,
  }),
  computed: {
    slide() {
      return this.slides[this.slideIndex]
    },
    prevIndex() {
      return this.slideIndex > 0
        ? this.slideIndex - 1
        : this.loop
        ? this.slides.length - 1
        : this.slideIndex
    },
    nextIndex() {
      return this.loop
        ? (this.slideIndex + 1) % this.slides.length
        : this.slideIndex < this.slides.length - 1
        ? this.slideIndex + 1
        : this.slideIndex
    },
  },
  methods: {
    setIndex(index) {
      this.direction = index < this.slideIndex ? "left" : "right"
      this.slideIndex = index
    },
    swipe(direction) {
      switch (direction) {
        case "left":
          this.setIndex(this.nextIndex)
          break
        case "right":
          this.setIndex(this.prevIndex)
          break
        default:
      }
    },
  },
}
</script>

<style lang="scss" scoped>
$image-height: 10rem;

.slider {
  display: flex;
  position: relative;
  min-height: 28rem;
  overflow: hidden;
}

.slide {
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
  width: 100%;
  flex-shrink: 0;
}

.slide-content {
  margin-top: 5rem;
  a {
    text-decoration: underline !important;
  }
}

.slide-image {
  align-self: center;
  height: $image-height;
  width: auto;
}

.paginator {
  display: flex;
  justify-content: center;
  position: absolute;
  left: 50%;
  top: $image-height + 2.5rem;
  transform: translate(-50%, -50%);

  .dot {
    position: relative;
    width: 2rem;
    height: 2rem;

    &:after {
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      border-radius: 100%;
    }

    &:not(.active):after {
      width: 8px;
      height: 8px;
      background: #d1d1d1;
    }

    &.active:after {
      width: 12px;
      height: 12px;
      background: #7e7e7e;
    }
  }
}
</style>
