<template>
  <div class="dialog-completion">
    <icon
      class="checkmark"
      :icon="CompletionIcon"
      :style="{ color: dialog.color }"
    />
    <div v-if="dialog.completionMessage" class="completion-message">
      {{ dialog.completionMessage }}
    </div>

    <div class="confirmation">
      <template v-if="isDone">
        <div><strong>Danke</strong></div>
        <div>für deine Teilnahme!</div>
      </template>
      <template v-else>
        <div><strong>Danke</strong></div>
        <div>für deine Teilnahme!</div>
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
        <br />
        Dann teil es uns mit!
      </div>
      <ui-button
        :icon-right="AngleRight"
        @click="$emit('answer-selected', 'contribution')"
      >
        Weiter
      </ui-button>
    </div>
  </div>
</template>

<script>
import Icon from "@/components/icon"
import UiButton from "@/components/ui-button"
import NounMap from "@/assets/noun-map.svg"
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
    AngleRight: () => AngleRight,
    NounMap: () => NounMap,
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
