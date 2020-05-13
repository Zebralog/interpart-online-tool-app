<template>
  <div class="dialog-completion">
    <div class="thanks">
      <img class="icon-check" src="/img/green-check-mark.png" />
      <h2>Danke!</h2>
      <div v-if="isDone" class="subtitle">
        Deine Nachricht
        <br />
        wurde gesendet.
      </div>
      <div v-else class="subtitle">
        für deine Teilnahme!
      </div>

      <nuxt-link :to="{ name: `map` }">
        <button type="button" class="back-to-map button icon-button">
          Zurück zu Karte
          <icon :icon="NounMap" />
        </button>
      </nuxt-link>
    </div>
    <div v-if="askForMessage" class="free-contribution-selection">
      Dir liegt noch etwas auf dem Herzen?<br />Dann teil es uns mit!
      <br />
      <button-weiter
        class="free-contribution button icon-button big"
        @click="$emit('answer-selected', 'contribution')"
      />
    </div>
  </div>
</template>

<script>
import Icon from "@/components/icon"
import ButtonWeiter from "@/components/ui-button-weiter"
import NounMap from "@/assets/noun-map.svg"

export default {
  components: {
    Icon,
    ButtonWeiter,
  },
  props: {
    askForMessage: { type: Boolean, default: false },
    isDone: { type: Boolean, default: false },
  },
  computed: {
    NounMap: () => NounMap,
  },
}
</script>

<style lang="scss" scoped>
.dialog-completion {
  width: 100%;
  text-align: center;

  .thanks {
    img.icon-check {
      max-width: 50vw;
    }
  }

  .free-contribution {
    margin-top: 5vh;
  }

  .icon-button {
    padding: 2vw;
    border: 1px solid #00000033;

    box-shadow: 0 10px 6px -6px #777;

    &.big {
      font-size: 1.5rem;
      padding: 0.75rem;
    }
  }
}
</style>
