<template>
  <div class="slider">
    <transition name="fade">
      <ui-button
        v-if="slideIndex !== 0"
        variant="extra-small"
        class="slider-back-button"
        @click="goBack"
      >
        Zurück
      </ui-button>
    </transition>
    <transition name="fade">
      <div v-if="slideIndex < questions.length" class="slider-progress">
        {{ slideIndex + 1 }} / {{ questions.length }}
      </div>
    </transition>
    <div class="slider-content">
      <transition :name="'slide-' + direction">
        <component
          :is="slide.component"
          :key="slide.name"
          v-bind="slide.props"
          class="slide"
          @answer-selected="saveAndNext"
        />
      </transition>
    </div>
    <ui-socialbar v-if="showSocialBar" :message="socialBarMessage" />
  </div>
</template>

<script>
import UiQuestion from "@/components/ui-question"
import UiDialogCompletion from "@/components/ui-dialog-completion"
import UiFreeContribution from "@/components/ui-free-contribution"
import UiButton from "@/components/ui-button"
import UiSocialbar from "@/components/ui-socialbar"
import ButtonWeiter from "@/components/ui-button-weiter"
import NounMap from "@/assets/noun-map.svg"
import Icon from "@/components/icon"

export default {
  components: {
    UiButton,
    UiSocialbar,
    ButtonWeiter,
    Icon,
  },
  props: {
    questions: { type: Array, required: true },
    dialog: { type: Object, required: false, default: null },
  },
  data: () => ({
    slideIndex: 0,
    direction: undefined,
  }),
  computed: {
    slides() {
      return [
        ...this.questions.map((question, index) => ({
          name: `question-${index}`,
          component: UiQuestion,
          props: { question },
        })),
        {
          name: "completion",
          component: UiDialogCompletion,
          props: {
            dialog: this.dialog,
            askForMessage: this.dialog.askForMessage,
          },
        },
        {
          name: "contribution",
          component: UiFreeContribution,
          props: {
            dialog: this.dialog,
          },
        },
        {
          name: "contribution-done",
          component: UiDialogCompletion,
          props: {
            dialog: this.dialog,
            isDone: true,
          },
        },
      ]
    },
    slide() {
      return this.slides[this.slideIndex]
    },
    NounMap: () => NounMap,
    prevIndex() {
      return this.slideIndex > 0 ? this.slideIndex - 1 : this.slides.length - 1
    },
    nextIndex() {
      return (this.slideIndex + 1) % this.slides.length
    },
    showSocialBar() {
      return (
        !this.dialog.socialBarPosition ||
        this.dialog.socialBarPosition !== `end` ||
        this.slideIndex >= this.questions.length
      )
    },
    socialBarMessage() {
      return this.dialog.socialBarMessage &&
        this.dialog.socialBarMessage.length > 0
        ? this.dialog.socialBarMessage
        : false
    },
  },
  methods: {
    setIndex(index) {
      this.direction = index < this.slideIndex ? "left" : "right"
      this.slideIndex = index
    },
    saveAndNext(value) {
      if (this.slideIndex < this.questions.length) {
        this.answer = value
        this.setIndex(this.nextIndex)
      } else {
        this.setIndex(this.slides.findIndex((slide) => slide.name === value))
      }
    },
    goBack() {
      this.setIndex(this.prevIndex)
    },
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables";

$image-height: 10rem;

h2,
strong {
  font-weight: bold;
}

.slider {
  position: relative;
  padding-top: 3rem;

  .slider-back-button {
    position: absolute;
    left: 0;
    top: 0;
  }

  .slider-progress {
    position: absolute;
    top: 1rem;
    left: 50%;
    transform: translate(-50%);
    color: $color-text-light;
    font-size: $font-size-7;
  }

  .slider-content {
    display: flex;
    position: relative;
    overflow-x: hidden;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 0.5rem;
  }

  .slide {
    display: flex;
    flex-direction: column;
    width: 100%;
    flex-shrink: 0;
    min-height: 62vh;
  }
}
</style>
