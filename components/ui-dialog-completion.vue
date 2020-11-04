<template>
  <div class="dialog-completion">
    <div class="confirmation">
      <template v-if="isDone">
        <icon
          class="checkmark"
          :icon="CompletionIcon"
          :style="{ color: dialog.color }"
        />
        <div v-if="dialog.completionMessage" class="completion-message">
          {{ dialog.completionMessage }}
        </div>

        <div><strong>Vielen Dank</strong></div>
        <div>
          für deinen Kommentar zu einer gemeinsam gestalteten Stadt der Zukunft!
          Siehe dir auf der Kommentarseite an, was andere zu dem Thema
          geschrieben haben.
        </div>
        <ui-button
          tag="nuxt-link"
          variant="small"
          :to="{ name: `discussion` }"
          :icon-right="NounTalk"
        >
          Zur Kommentarseite
        </ui-button>
      </template>
      <template v-else>
        <icon
          :class="{
            chart: hasCustomOpinionIcon,
            checkmark: !hasCustomOpinionIcon,
          }"
          :icon="OpinionSentIcon"
          :original-color="true"
          :style="{ color: dialog.color }"
        />
        <div v-if="dialog.opinionSentMessage" class="completion-message">
          {{ dialog.opinionSentMessage }}
        </div>

        <div><strong>Vielen Dank für deine Abstimmung.</strong></div>
        <div>
          In der Grafik siehst du, wie Andere abgestimmt haben. Deine Stimme
          kann jetzt in der Stadtentwicklung berücksichtigt werden.
        </div>
      </template>
    </div>

    <div v-if="false">
      <ui-button
        tag="nuxt-link"
        variant="small"
        :to="{ name: `map` }"
        :icon-right="NounMap"
      >
        Zurück zu Karte
      </ui-button>
    </div>
    <div v-if="askForMessage">
      <div class="contribution"></div>

      <ui-button
        tag="nuxt-link"
        variant="small"
        :to="{ name: `map` }"
        :icon-right="NounMap"
      >
        Zurück zu Karte
      </ui-button>

      <br />
      <br />
      <div class="bold-text">
        Dir liegt noch etwas auf dem Herzen?
      </div>
      <ui-button
        :icon-right="AngleRight"
        @click="$emit('answer-selected', 'contribution')"
      >
        Dann teil es uns mit
      </ui-button>
    </div>
  </div>
</template>

<script>
import Icon from "@/components/icon"
import UiButton from "@/components/ui-button"
import NounMap from "@/assets/noun-map.svg"
import NounTalk from "@/assets/noun-talk.svg"
import CheckmarkBig from "@/assets/checkmark-big.svg"
import AngleRight from "@/assets/angle-right.svg"

export default {
  components: {
    Icon,
    UiButton,
  },
  props: {
    dialog: { type: Object, required: true },
    askForMessage: { type: Boolean, default: false },
    isDone: { type: Boolean, default: false },
  },
  computed: {
    CompletionIcon() {
      return this.dialog.completionIcon
        ? this.dialog.completionIcon
        : CheckmarkBig
    },
    OpinionSentIcon() {
      return this.dialog.opinionSentIcon
        ? this.dialog.opinionSentIcon
        : CheckmarkBig
    },
    AngleRight: () => AngleRight,
    NounMap: () => NounMap,
    NounTalk: () => NounTalk,
    hasCustomOpinionIcon() {
      return !!this.dialog.opinionSentIcon
    },
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables";

.dialog-completion {
  text-align: center;

  .checkmark {
    height: auto;
    margin-bottom: 0;
    max-height: 17rem;
  }

  .chart {
    margin-bottom: 1.5em;
    max-width: 100%;
    height: auto;
  }

  .completion-message {
    margin-bottom: 2rem;
    font-style: italic;
    font-weight: 500;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }

  .bold-text {
    font-size: 1.3rem;
    font-weight: bold;
  }

  .contribution {
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-weight: 500;
  }

  .confirmation {
    margin-bottom: 1rem;
    font-size: $font-size-4;
  }
}
</style>
