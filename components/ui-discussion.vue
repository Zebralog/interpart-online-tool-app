<template>
  <div :style="elementStyle">
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
  computed: {
    elementStyle: () => {
      return {}
    },
  },
}
</script>
