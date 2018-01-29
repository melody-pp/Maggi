<template>
  <div ref="page">
    <div class="bg-container">
      <img src="../../assets/p3/family.jpg" ref="img3">
      <img src="../../assets/p3/busy.jpg" ref="img4">
    </div>
    <div class="txt">
      <img style="width: 46.8vw;margin-bottom: 3.98vh;" src="../../assets/p3/theme.png" ref="title">
      <img style="width: 32.13vw;margin-bottom: 2vh;" src="../../assets/p3/theme1.png" ref="subTitle">
      <div class="contentBox">
        <img style="width: 58.53vw;" src="../../assets/p3/content1.png" ref="content1">
        <img style="width: 62.13vw;" src="../../assets/p3/content2.png" ref="content2">
        <img style="width: 62.93vw;" src="../../assets/p3/content3.png" ref="content3">
        <img style="width: 9.73vw;" src="../../assets/p3/content4.png" ref="content4">
        <img style="width: 62.13vw;" src="../../assets/p3/content5.png" ref="content5">
        <img style="width: 62.93vw;" src="../../assets/p3/content6.png" ref="content6">
        <img style="width: 16.4vw;" src="../../assets/p3/content7.png" ref="content7">
      </div>
    </div>

    <ArrowBtn v-show="showArrow"/>
    <Modal :z-index="2"/>
  </div>
</template>

<script>
  import { TimelineMax, Elastic } from 'gsap'
  import Modal from '../../components/Modal'
  import ArrowBtn from '../../components/ArrowBtn'

  export default {
    props: ['moveIn'],
    components: {Modal, ArrowBtn},
    data () {
      return {
        timeline: null,
        showArrow: false
      }
    },
    methods: {
      animate () {
        this.timeline = new TimelineMax({
          delay: 0.7,
          onComplete: () => {
            this.showArrow = true
          }
        })

        this.timeline
          .from(this.$refs.img3, 0.5, {autoAlpha: 0})
          .from(this.$refs.img4, 0.5, {autoAlpha: 0}, '-=0.5')
          .from(this.$refs.page.querySelector('.modal'), 0.5, {autoAlpha: 0}, '-=0.5')
          .from(this.$refs.title, 0.5, {autoAlpha: 0})
          .from(this.$refs.subTitle, 0.5, {autoAlpha: 0})
          .from(this.$refs.content1, 0.5, {autoAlpha: 0})
          .from(this.$refs.content2, 0.5, {autoAlpha: 0}, '-=0.5')
          .from(this.$refs.content3, 0.5, {autoAlpha: 0}, '-=0.5')
          .from(this.$refs.content4, 0.5, {autoAlpha: 0}, '-=0.5')
          .from(this.$refs.content5, 0.5, {autoAlpha: 0})
          .from(this.$refs.content6, 0.5, {autoAlpha: 0}, '-=0.5')
          .from(this.$refs.content7, 0.5, {autoAlpha: 0}, '-=0.5')
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
  .bg-container {
    img {
      height: 50vh;
      vertical-align: middle;
    }
  }

  .txt {
    z-index: 3;
    top: 25.21vh;
    text-align: left;
    position: absolute;
    img {
      margin-left: 4vw;
      display: block;
    }
  }
</style>
