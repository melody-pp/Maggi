<template>
  <div ref="page">
    <div class="bg-container">
      <img src="../../assets/p1/01.jpg" ref="img3">
      <img src="../../assets/p1/02.jpg" ref="img4">
    </div>

    <div class="txt">
      <img style="width: 46.8vw;margin-bottom: 3.98vh;" src="../../assets/p1/theme.png" ref="title">
      <img style="width: 32.27vw;margin-bottom: 2vh;" src="../../assets/p1/theme1.png" ref="subTitle">
      <div class="contentBox">
        <img style="width: 60.13vw;" src="../../assets/p1/content1.png" ref="content1">
        <img style="width: 60.27vw;" src="../../assets/p1/content2.png" ref="content2">
        <img style="width: 27.73vw;" src="../../assets/p1/content3.png" ref="content3">
        <img style="width: 60.4vw;" src="../../assets/p1/content4.png" ref="content4">
        <img style="width: 59.07vw;" src="../../assets/p1/content5.png" ref="content5">
        <img style="width: 37.73vw;" src="../../assets/p1/content6.png" ref="content6">
      </div>
    </div>

    <ArrowBtn v-show="showArrow"/>
    <Modal :z-index="2"/>
  </div>
</template>

<script>
  import { TimelineMax } from 'gsap'
  import Modal from '../../components/Modal'
  import ArrowBtn from '../../components/ArrowBtn'

  export default {
    props: ['moveIn'],
    components: {Modal, ArrowBtn},
    data () {
      return {
        timeline: null,
        showArrow: false,
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
          .from(this.$refs.content2, 0.5, {autoAlpha: 0})
          .from(this.$refs.content3, 0.5, {autoAlpha: 0})
          .from(this.$refs.content4, 0.5, {autoAlpha: 0})
          .from(this.$refs.content5, 0.5, {autoAlpha: 0})
          .from(this.$refs.content6, 0.5, {autoAlpha: 0})
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
    text-align: center;
    img {
      height: 50vh;
      vertical-align: middle;
    }
  }

  .txt {
    top: 25.21vh;
    z-index: 3;
    position: absolute;
    text-align: left;
    img {
      margin-left: 4vw;
      display: block;
    }
  }
</style>
