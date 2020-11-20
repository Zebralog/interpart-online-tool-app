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
        <div
          v-if="dialog.opinionSentMessage"
          class="completion-message"
          v-html="dialog.opinionSentMessage"
        ></div>

        <div><strong>Vielen Dank für deine Abstimmung.</strong></div>
        <div>
          In der Grafik siehst du, wie Andere abgestimmt haben. Deine Stimme
          kann jetzt in der Stadtentwicklung berücksichtigt werden.
        </div>
      </template>
    </div>

    <div v-if="askForMessage" class="next-steps">
      <ui-button
        class="map-button"
        tag="nuxt-link"
        variant="normal"
        :to="{ name: `map` }"
        :icon-right="NounMap"
      >
        Zurück zu Karte
      </ui-button>

      <div>
        <strong>
          Dir liegt noch etwas auf dem Herzen?
        </strong>
      </div>
      <ui-button
        class="message-button center"
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
    margin-bottom: 2rem;
    max-width: 100%;
    height: auto;
  }

  .completion-message {
    margin-bottom: 2rem;
    font-size: 0.9em;
    font-weight: 500;
    width: 95%;
    margin-left: auto;
    margin-right: auto;
  }

  .confirmation {
    font-size: $font-size-5;
  }

  .next-steps {
    font-size: $font-size-5;
  }

  .map-button {
    margin: 0.5rem 0 2rem 0;
  }

  .message-button {
    margin-top: 0.5rem;
  }
}
</style>
