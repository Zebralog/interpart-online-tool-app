<template>
  <form class="dialog-free-contribution" @submit.prevent="submit">
    <icon
      class="speech-bubble"
      :icon="SpeechBubble"
      :style="{ color: dialog.color }"
    />
    <div class="subtitle">
      Schreibe einen <br />
      <strong>Kommentar</strong>
    </div>
    <ui-textarea
      v-model="textMessage"
      class="textarea"
      :placeholder="``"
      :max-length="maxTextMessageLength"
      @valid-change="isValid = $event"
    />
    <div class="call-to-action">
      Was ist dir bei diesem Thema noch wichtig? Teile uns mit, was deiner
      Meinung nach in der Planung beachtet werden sollte. Was du hier schreibst,
      wird auf der Kommentarseite veröffentlicht.
    </div>

    <div>
      <ui-button :icon-right="AngleRight" :disabled="!isValid">
        Weiter
      </ui-button>
    </div>
  </form>
</template>

<script>
import SpeechBubble from "@/assets/speech-bubble.svg"
import AngleRight from "@/assets/angle-right.svg"
import Icon from "@/components/icon"
import UiTextarea from "@/components/ui-textarea"
import UiButton from "@/components/ui-button"
import config from "@/config"
import { REPLY_TIMEOUT } from "@/model/constants"

export default {
  components: {
    Icon,
    UiTextarea,
    UiButton,
  },
  props: {
    dialog: { type: Object, required: true },
  },
  data: () => ({
    textMessage: "",
    isValid: true,
  }),
  computed: {
    AngleRight: () => AngleRight,
    SpeechBubble: () => SpeechBubble,
    maxTextMessageLength: () => 250,
  },
  methods: {
    submit() {
      this.$store
        .dispatch("messages/login", {
          email: config.api.rest.messages.auth.user,
          password: config.api.rest.messages.auth.password,
        })
        .then(() => {
          this.$store
            .dispatch("messages/add", {
              dialogId: this.dialog.id,
              type: "text",
              author: "Ich",
              date: new Date(),
              content: this.textMessage,
            })
            .then(() => {
              const DUMMY_MSG_ID1 =
                "DUMMY-MSG-" +
                Math.floor(Math.random() * (99999 - 10000) + 10000)
              const DUMMY_MSG_ID2 =
                "DUMMY-MSG-" +
                Math.floor(Math.random() * (99999 - 10000) + 10000)
              setTimeout(() => {
                this.$store.dispatch("messages/addDummy", {
                  id: DUMMY_MSG_ID1,
                  dialogId: this.dialog.id,
                  content:
                    "An dieser Kreuzung schlage ich einen großen Zebrastreifen für Fußgänger vor.",
                  language: "de",
                  translatedContent:
                    "At this intersection, I suggest a large zebra crossing for pedestrians.",
                  type: "text",
                  author: "Person A",
                  date: new Date(),
                })
              }, REPLY_TIMEOUT)

              setTimeout(() => {
                this.$store.dispatch("messages/addDummy", {
                  id: DUMMY_MSG_ID2,
                  dialogId: this.dialog.id,
                  content: "I would like a new bike lane at this intersection.",
                  language: "en",
                  translatedContent:
                    "Ich wünsche mir einen neuen Fahrradweg an dieser Kreuzung.",
                  type: "text",
                  author: "Person B",
                  date: new Date(),
                })
              }, REPLY_TIMEOUT * 2)
              this.$emit("answer-selected", "contribution-done")
            })
        })
    },
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables";

.dialog-free-contribution {
  text-align: center;

  .speech-bubble {
    height: auto;
  }

  .subtitle {
    margin-bottom: 2rem;
  }

  .call-to-action {
    font-size: $font-size-5;
    margin-bottom: 1rem;
  }

  .textarea {
    text-align: left;
    margin-bottom: 2rem;
  }
}
</style>
