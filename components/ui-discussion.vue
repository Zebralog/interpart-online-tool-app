<template>
  <div class="discussion">
    <Message v-for="message in messages" :key="message.id" :message="message" />
  </div>
</template>

<script>
import Message from "@/components/ui-discussion-message"

export default {
  components: {
    Message,
  },
  props: {
    messages: {
      type: Array,
      default: function () {
        return []
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.discussion {
  margin-top: -3rem;
  margin-bottom: -3rem;
}
</style>
