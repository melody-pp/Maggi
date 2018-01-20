<template>
  <div ref="page">
    <div class="bg-container">
      <div class="topImg clearfix">
        <img src="../../assets/p2/01.jpg" ref="img1">
        <img src="../../assets/p2/02.jpg" ref="img2">
        <img src="../../assets/p2/03.jpg" ref="img3">
        <img src="../../assets/p2/04.jpg" ref="img4">
      </div>
      <img src="../../assets/p2/05.jpg" ref="bottomImg">
    </div>
    <div class="txt">
      <img style="width: 46.8vw;margin-bottom: 3.65vh;" src="../../assets/p2/theme.png" ref="title">
      <img style="width: 28.27vw;margin-bottom: 3.65vh;" src="../../assets/p2/theme1.png" ref="subTitle">
      <img style="width: 60vw;" src="../../assets/p2/content.png" ref="content">
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
        showArrow: true,
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
          .from(this.$refs.img1, 1, {autoAlpha: 0, x: 100, y: 100})
          .from(this.$refs.img2, 1, {autoAlpha: 0, x: -100, y: 100}, '-=1')
          .from(this.$refs.img3, 1, {autoAlpha: 0, x: 100, y: -100}, '-=1')
          .from(this.$refs.img4, 1, {autoAlpha: 0, x: -100, y: -100}, '-=1')
          .from(this.$refs.bottomImg, 1, {autoAlpha: 0, scale: 2})
          .from(this.$refs.page.querySelector('.modal'), 1, {autoAlpha: 0, scale: 0})
          .from(this.$refs.title, 1, {autoAlpha: 0, y: -50})
          .from(this.$refs.subTitle, 1, {autoAlpha: 0, y: -50})
          .from(this.$refs.content, 1, {autoAlpha: 0, y: -50})
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
    > img {
      height: 50vh;
    }
    .topImg {
      img {
        float: left;
        width: 50%;
        height: 25vh;
      }
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
