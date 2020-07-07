<template>
  <div class="dialog-completion">
    <icon
      class="checkmark"
      :icon="CheckmarkBig"
      :style="{ color: dialog.color }"
    />

    <div class="confirmation">
      <template v-if="isDone">
        <div><strong>Vielen Dank </strong></div>
        für deine Abstimmung für eine gemeinsam gestaltete Stadt der Zukunft!
        Deine Stimme fließt jetzt in die Planung der Kreuzung mit ein.
      </template>
      <template v-else>
        <div><strong>Vielen Dank </strong></div>
        für deine Abstimmung für eine gemeinsam gestaltete Stadt der Zukunft!
        Deine Stimme fließt jetzt in die Planung der Kreuzung mit ein.
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
      <div class="contribution">
        Möchtest du sonst noch was dazu sagen?
      </div>

      <ui-button @click="$emit('answer-selected', 'contribution')">
        Dann hier entlang!
      </ui-button>

      <br />
      <br />
      <ui-button tag="nuxt-link" :to="{ name: `map` }">
        Ansonsten geht's hier wieder zur Übersichtskarte und weiteren
        Stadtthemen, die deine Perspektive brauchen
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
    font-weight: 500;
  }

  .confirmation {
    margin-bottom: 1rem;
    font-size: $font-size-4;
  }
}
</style>
