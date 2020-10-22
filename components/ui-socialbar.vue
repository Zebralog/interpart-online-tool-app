<template>
  <div class="socialbar-container">
    <span v-if="message" class="social-bar-message">{{ message }}</span>
    <span class="socialbar">
      <a
        v-for="item in items"
        :key="item.name"
        :aria-label="item.name"
        :href="item.link"
        target="_blank"
        class="socialbar-link"
      >
        <icon :icon="item.icon" aria-hidden />
      </a>
    </span>
  </div>
</template>

<script>
import Facebook from "@/assets/facebook.svg"
import Instagram from "@/assets/instagram.svg"
import Twitter from "@/assets/twitter.svg"
import Mail from "@/assets/mail.svg"
import Icon from "@/components/icon"

export default {
  components: {
    Icon,
  },
  props: {
    message: {
      type: String,
      default: function () {
        return ""
      },
    },
  },
  computed: {
    items: () => [
      { name: "Facebook", icon: Facebook, link: "https://facebook.com" },
      { name: "Instagram", icon: Instagram, link: "https://instagram.com" },
      { name: "Twitter", icon: Twitter, link: "https://twitter.com" },
      { name: "Mail", icon: Mail, link: "mailto:franke@zebralog.de" },
    ],
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables";

.socialbar-container {
  margin-top: 1em;
}

.socialbar {
  display: flex;
  justify-content: center;
  margin: -1rem;
  color: $color-text;
}

.socialbar-link {
  margin: 1rem;
  font-size: $font-size-3;

  /deep/ .icon {
    height: 1em;
    width: 1em;
  }
}

.social-bar-message {
  text-align: center;
  color: $color-text;
  width: 100%;
  display: block;
  font-size: $font-size-5;
}
</style>
