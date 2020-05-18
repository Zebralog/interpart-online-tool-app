<template>
  <div class="dialog-completion">
    <icon
      class="checkmark"
      :icon="CheckmarkBig"
      :style="{ color: dialog.color }"
    />
    <div class="confirmation">
      <template v-if="isDone">
        <div><strong>Danke!</strong></div>
        Deine Nachricht
        <br />
        wurde gesendet.
      </template>
      <template v-else>
        <div><strong>Danke</strong></div>
        für deine Teilnahme!
      </template>
    </div>

    <div>
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
      <div class="contribution">
        Dir liegt noch etwas auf dem Herzen?<br />Dann teil es uns mit!
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
    CheckmarkBig: () => CheckmarkBig,
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
    margin-bottom: 1rem;
    max-height: 9rem;
  }

  .contribution {
    margin-top: 3rem;
    margin-bottom: 1rem;
    font-size: $font-size-6;
    font-weight: 500;
  }

  .confirmation {
    margin-bottom: 1rem;
    font-size: $font-size-4;
  }
}
</style>
