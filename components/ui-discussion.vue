<template>
  <div class="discussion">
    <Message
      v-for="message in messages"
      :key="message.id"
      :message="message"
      :force-side="lastMessage == message.id"
    />
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
    lastMessage: {
      type: Number,
      default: null,
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
