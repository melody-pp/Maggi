<template>
  <div ref="page">
    <div class="bg-container">
      <img class="img1" src="../../assets/p1/01.jpg" ref="img1">
      <img class="img2" src="../../assets/p1/02.jpg" ref="img2">
      <img src="../../assets/p1/01.jpg" ref="img3">
      <img src="../../assets/p1/02.jpg" ref="img4">
    </div>

    <div class="txt">
      <img style="width: 46.8vw;margin-bottom: 3.98vh;" src="../../assets/p1/theme.png" ref="title">
      <img style="width: 32.27vw;margin-bottom: 2vh;" src="../../assets/p1/theme1.png" ref="subTitle">
      <img style="width: 61.33vw;" src="../../assets/p1/content.png" ref="content">
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
          .from(this.$refs.img1, 0.5, {autoAlpha: 0, x: -window.innerWidth})
          .to(this.$refs.img1, 0.5, {autoAlpha: 0, x: window.innerWidth}, '+=0.6')
          .from(this.$refs.img2, 0.5, {autoAlpha: 0, x: -window.innerWidth})
          .to(this.$refs.img2, 0.5, {autoAlpha: 0, x: window.innerWidth}, '+=0.6')
          .from(this.$refs.img3, 1.5, {autoAlpha: 0, scale: 0, rotationZ: 360})
          .from(this.$refs.img4, 1.5, {autoAlpha: 0, scale: 0, rotationZ: 360}, '-=1.5')
          .from(this.$refs.page.querySelector('.modal'), 1, {autoAlpha: 0, scale: 0})
          .from(this.$refs.title, 0.5, {autoAlpha: 0, x: -50})
          .from(this.$refs.subTitle, 0.5, {autoAlpha: 0, x: -50})
          .from(this.$refs.content, 0.5, {autoAlpha: 0, x: -50})
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
    .img1, .img2 {
      position: absolute;
      top: 30vh;
      left: 5vw;
      transform: translateY(-50%);
      width: 90vw;
      height: auto;
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
