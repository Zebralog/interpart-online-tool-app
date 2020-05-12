<template>
  <div class="dialog-free-contribution-audio">
    <div class="pre">
      <img
        class="icon-check big-message-icon"
        src="/img/green-check-mark.png"
      />
      <br />
      <strong>AUDIO MESSAGE</strong>
    </div>
    <div class="mid">
      <strong>Please leave an audio message</strong>
      <small>(secretely listening to your phone mic...)</small>
    </div>

    <div class="bottom">
      <br />

      <button-weiter
        class="free-contribution button icon-button big"
        @click="$emit('answer-selected', 'contribution-done')"
      />
    </div>
  </div>
</template>

<script>
import ButtonWeiter from "@/components/ui-button-weiter"

export default {
  components: {
    ButtonWeiter,
  },
}
</script>

<style lang="scss" scoped>
.dialog-free-contribution-audio {
  width: 100%;
  text-align: center;

  img.icon-check {
    max-width: 30vw;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .mid {
    margin-top: 2rem;
    margin-bottom: 2rem;

    .bigarea {
      width: 91%;
      min-height: 15vh;
      border-radius: 3px;
      margin: 5px 1px 3px 0;

      -webkit-transition: all 0.3s ease-in-out;
      -moz-transition: all 0.3s ease-in-out;
      -ms-transition: all 0.3s ease-in-out;
      -o-transition: all 0.3s ease-in-out;
      outline: none;
      padding: 3px 0 3px 3px;
      border: 1px solid #dddddd;
    }

    #textarea-counter {
      color: #888888dd;
      font-size: 0.9rem;
      display: inline-block;
      padding: 0.5rem;
    }

    #textarea-counter.alert {
      background-color: lightyellow;
      color: #000;
    }

    #textarea-counter.error {
      background-color: lightsalmon;
      color: #000;
    }
  }
}
</style>
