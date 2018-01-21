<template>
  <div ref="page">
    <div class="bg-container">
      <img class="img1" src="../../assets/p3/family.jpg" ref="img1">
      <img class="img2" src="../../assets/p3/busy.jpg" ref="img2">
      <img src="../../assets/p3/family.jpg" ref="img3">
      <img src="../../assets/p3/busy.jpg" ref="img4">
    </div>
    <div class="txt">
      <img style="width: 46.8vw;margin-bottom: 3.98vh;" src="../../assets/p3/theme.png" ref="title">
      <img style="width: 32.13vw;margin-bottom: 3.98vh;" src="../../assets/p3/theme1.png" ref="subTitle">
      <img style="width: 63.07vw;" src="../../assets/p3/content.png" ref="content">
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
          .from(this.$refs.img1, 1, {autoAlpha: 0, x: -window.innerWidth, y: -window.innerHeight})
          .to(this.$refs.img1, 1, {autoAlpha: 0, x: window.innerWidth, y: window.innerHeight}, '+=0.6')
          .from(this.$refs.img2, 1, {autoAlpha: 0, x: -window.innerWidth, y: window.innerHeight})
          .to(this.$refs.img2, 1, {autoAlpha: 0, x: window.innerWidth, y: -window.innerHeight}, '+=0.6')
          .from(this.$refs.img3, 1.5, {autoAlpha: 0, x: 100, y: 100})
          .from(this.$refs.img4, 1.5, {autoAlpha: 0, x: -100, y: 100}, '-=1.5')
          .from(this.$refs.page.querySelector('.modal'), 1, {autoAlpha: 0, scale: 0})
          .from(this.$refs.title, 1, {autoAlpha: 0, y: -50, ease: Elastic.easeOut.config(1.2, 0.3)})
          .from(this.$refs.subTitle, 1, {autoAlpha: 0, y: -50, ease: Elastic.easeOut.config(1.2, 0.3)})
          .from(this.$refs.content, 1, {autoAlpha: 0, y: -50, ease: Elastic.easeOut.config(1.2, 0.3)})
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
    .img1, .img2 {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
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
