<template>
  <div class="slider">
    <div class="slider-header">
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
      <transition name="fade">
        <ui-button
          v-if="slideIndex !== 0 && /question-\d+/.test(slide.name)"
          variant="extra-small"
          :icon-right="AngleRightCircle"
          :class="{
            button: true,
            isExtraSmall: true,
            weiter: true,
            disabled: !enableNextButton,
          }"
          :disabled="!enableNextButton"
          @click="saveAndNext"
        >
          Weiter
        </ui-button>
      </transition>
    </div>
    <div class="slider-content">
      <transition :name="'slide-' + direction">
        <component
          :is="slide.component"
          :key="slide.name"
          v-bind="slide.props"
          class="slide"
          @answer-selected="saveAndNext"
          @answer-is-preselected="toggleNextButton"
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
import AngleRightCircle from "@/assets/angle-right-circle.svg"

export default {
  components: {
    UiButton,
    UiSocialbar,
    ButtonWeiter,
    Icon,
  },
  props: {
    questions: { type: Array, required: true },
    answers: {
      type: Array,
      required: false,
      default: function () {
        return []
      },
    },
    dialog: { type: Object, required: false, default: null },
  },
  data: () => ({
    slideIndex: 0,
    direction: undefined,
    enableNextButton: false,
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
    AngleRightCircle: () => AngleRightCircle,
  },
  methods: {
    setIndex(index) {
      this.direction = index < this.slideIndex ? "left" : "right"
      this.slideIndex = index
    },
    saveAndNext(value) {
      if (this.slideIndex < this.questions.length) {
        this.answers[this.slideIndex] = value
        this.setIndex(this.nextIndex)
      } else {
        this.setIndex(this.slides.findIndex((slide) => slide.name === value))
      }
    },
    goBack() {
      this.setIndex(this.prevIndex)
      if (this.slideIndex < 2) {
        this.toggleNextButton(false)
      }
    },
    toggleNextButton(value) {
      console.log(value)
      this.enableNextButton = value
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

  .button.weiter {
    color: $color-text;
    opacity: 1;
    font-weight: bolder;
    text-align: right;

    &.disabled {
      color: #999;
      opacity: 0.5;
    }
  }

  .slider-header {
    display: flex;
    justify-content: space-between;
    margin: -1rem 0 0.5rem 0;
    min-height: calc(1.3rem + 2 * 0.35rem + 2 * 1px);
    position: relative;
  }

  .slider-progress {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: $color-text-light;
    font-size: $font-size-7;
  }

  .slider-content {
    display: flex;
    position: relative;
    overflow-x: hidden;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 1rem;
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
