<template>
  <div class="dialog-free-contribution-select">
    <div class="audio" @click="$emit('answer-selected', 'contribution-audio')">
      audio
      <img class="icon-check" src="/img/green-check-mark.png" />
    </div>
    <div class="text" @click="$emit('answer-selected', 'contribution-text')">
      text
      <img class="icon-check" src="/img/green-check-mark.png" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dialog-free-contribution-select {
  width: 100%;
  text-align: center;

  .audio,
  .text {
    height: 30vh;

    img.icon-check {
      max-width: 50vw;
    }
  }
}
</style>
