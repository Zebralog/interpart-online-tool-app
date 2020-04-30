<template>
  <div class="dialog-container">
    <ui-dialog
      v-if="slide"
      v-touch:swipe.left="next"
      v-touch:swipe.right="prev"
      class="dialog"
    >
      <img v-if="slide.image" class="slide-image" :src="slide.image" />
      <ui-paginator :pages="slides" :current="slide.id" />
      <div class="slide-content" v-html="slide.content"></div>
    </ui-dialog>
    <ui-dialog v-else class="dialog">
      no slide
    </ui-dialog>
  </div>
</template>

<script>
import UiDialog from "@/components/ui-dialog"
import UiPaginator from "@/components/ui-paginator"
import config from "@/config"

export default {
  transition: {
    mode: "",
    name: "next",
  },
  components: {
    UiDialog,
    UiPaginator,
  },
  data: function () {
    return {}
  },
  computed: {
    slides: () =>
      config.introductionItems.map(function (slide) {
        return {
          ...slide,
          to: { name: "introduction.id", params: { id: slide.id } },
        }
      }),
    slide() {
      const route_id = this.$route.params.id
      const item = this.slides.find(function (item) {
        return item.id == route_id
      })
      return item
    },
    nextSlide() {
      const route_id = this.$route.params.id
      const item = this.slides.find(function (item, i, items) {
        return i > 0 && items[i - 1].id == route_id
      })
      return item
    },
    prevSlide() {
      const route_id = this.$route.params.id
      const item = this.slides.find(function (item, i, items) {
        return i < items.length - 1 && items[i + 1].id == route_id
      })
      return item
    },
  },
  methods: {
    next: function () {
      const nextSlide = this.nextSlide
      if (nextSlide) {
        this.$router.push(nextSlide.to)
      }
    },
    prev: function () {
      const prevSlide = this.prevSlide
      if (prevSlide) {
        this.$router.push(prevSlide.to)
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.dialog {
  margin-top: 50%;
}
</style>
