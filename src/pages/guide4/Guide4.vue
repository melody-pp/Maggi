<template>
  <div>
    <img class="title" src="../../assets/p4/theme.png" ref="title">
    <div class="contentP4Box">
      <img style="width: 34.8vw;" src="../../assets/p4/content1.png" ref="content1">
      <img style="width: 33.47vw;" src="../../assets/p4/content2.png" ref="content2">
      <img style="width: 41.87vw;" src="../../assets/p4/content3.png" ref="content3">
      <img style="width: 16.4vw;" src="../../assets/p4/content4.png" ref="content4">
      <img style="width: 47.07vw;" src="../../assets/p4/content5.png" ref="content5">
      <!--<img style="width: 62.13vw;" src="../../assets/p4/content6.png" ref="content6">-->
      <img style="width: 62.13vw;" src="../../assets/p4/content7.png" ref="content7">
      <img style="width: 66.93vw;" src="../../assets/p4/content8.png" ref="content8">
      <img style="width: 48.27vw;" src="../../assets/p4/content9.png" ref="content9">
    </div>
    <ArrowBtn v-show="showArrow"/>
  </div>
</template>

<script>
  import { TimelineMax, Elastic } from 'gsap'
  import ArrowBtn from '../../components/ArrowBtn'

  export default {
    data () {
      return {
        timeline: null,
        showArrow: false
      }
    },
    props: ['moveIn'],
    components: {ArrowBtn},
    methods: {
      animate () {
        this.timeline = new TimelineMax({
          delay: 0.7,
          onComplete: () => {
            this.showArrow = true
          }
        })

        this.timeline
          .from(this.$refs.title, 0.5, {autoAlpha: 0})
          .from(this.$refs.content1, 0.5, {autoAlpha: 0})
          .from(this.$refs.content2, 0.5, {autoAlpha: 0})
          .from(this.$refs.content3, 0.5, {autoAlpha: 0})
          .from(this.$refs.content4, 0.5, {autoAlpha: 0})
          .from(this.$refs.content5, 0.5, {autoAlpha: 0})
          // .from(this.$refs.content6, 0.5, {autoAlpha: 0})
          .from(this.$refs.content7, 0.5, {autoAlpha: 0})
          .from(this.$refs.content8, 0.5, {autoAlpha: 0})
          .from(this.$refs.content9, 0.5, {autoAlpha: 0})
      },
      moveDown () {
        this.$store.commit('moveDown')
      }
    },
    watch: {
      moveIn (newVal) {
        newVal && this.animate()
      }
    },
  }
</script>

<style scoped lang="scss">
  .title {
    width: 63.47vw;
    margin: 15vh auto 3.98vh;
  }

  .contentP4Box {
    img {
      display: block;
      margin: 0 auto;
      margin-bottom: 2.2vh;
    }
  }
</style>
