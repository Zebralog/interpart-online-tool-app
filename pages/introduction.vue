<template>
  <div v-if="slides" class="dialog-container">
    <ui-dialog
      v-for="(slide, i) in slides"
      :key="i"
      :style="display(i + 1)"
      class="dialog"
    >
      <img v-if="slide.image" class="slide-image" :src="slide.image" />

      <ui-paginator
        :pages="steps"
        :current="step"
        :position="i + 1"
        @page-clicked="handlePagerClick"
      />
      <div class="slide-content" v-html="slide.content"></div>
    </ui-dialog>
  </div>
</template>

<script>
import UiDialog from "@/components/ui-dialog"
import UiPaginator from "@/components/ui-paginator"
// import config from "@/config"

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
    return {
      step: 1,
      // slides: config.slides,
      slides: [
        {
          content: "Willkommen zur Einführung!",
          image: "/assets/slide-img1.svg",
        },
        {
          content:
            "Lorem ipsum dolor sit amet, ex propriae quaerendum vim, his brute\n      dissentiunt at. Ad sale audiam philosophia nam, in vis nostrud fuisset\n      comprehensam. At vim veri insolens, ipsum viderer eu pri, vix hinc purto\n      commodo et. Pri cu illud laboramus complectitur, munere dolorum officiis\n      vix et, quo augue adipisci id. Dico prima vis ex. Ex tritani feugiat\n      comprehensam eum, mei ad animal alienum. Mea scaevola suscipiantur te, ius\n      ei agam legimus scripserit, dicit legimus concludaturque an vim.",
          image: "@/assets/slide-img2.svg",
        },
        {
          content:
            "splendide mediocritatem eos, ex nec regione tacimates. Dolor everti\n      probatus ut sed. Corpora tincidunt ut pro, et movet constituam dissentiunt\n      sea, te vim sint tibique similique.",
          image: "@/assets/slide-img3.svg",
        },
        {
          content:
            "Rebum principes incorrupte cu has, cu pri nisl molestie torquatos, id est\n      dicta maluisset reformidans. Harum platonem senserit ne pri, ad mel\n      suscipiantur conclusionemque, soleat aliquam delicatissimi vel cu. Duo\n      dictas oblique expetenda ei, qui graeco pertinax at. Idque inani meliore\n      cu eum, saepe scripta ceteros id sed. Vel quodsi equidem in, quo diceret\n      convenire ut. Amet postulant salutatus sed te, ne scaevola lucilius sed,\n      has an lucilius consequat.",
          image: "@/assets/slide-img4.svg",
        },
        {
          content:
            "Ei cum officiis expetenda persequeris. Usu eu bonorum molestie, eos ne\n      convenire salutatus. Sed id doctus salutatus, ne suas inani aeterno pro.\n      Usu id tollit eruditi.",
          image: "@/assets/slide-img5.svg",
        },
        {
          content:
            "<strong> alles gut?</strong> \n<button type='button'>Los gehts!</button>",
          image: "@/assets/slide-img5.svg",
        },
      ],
    }
  },
  computed: {
    steps: () => {
      // return this.slides.length
      return 6
    },
    loop: () => {
      return true
    },
  },
  methods: {
    next() {
      this.step =
        this.step < this.steps ? this.step + 1 : this.loop ? 1 : this.step
    },
    handlePagerClick(payload) {
      console.log(payload)
      const nextStep = payload.page
      this.step = nextStep <= this.steps ? nextStep : this.loop ? 1 : this.step
    },
    display(n) {
      return { display: n == this.step ? "inline-block" : "none" }
    },
  },
}
</script>
<style lang="scss" scoped>
.dialog {
  margin-top: 50%;
}
</style>
