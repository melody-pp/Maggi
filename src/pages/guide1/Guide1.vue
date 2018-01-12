<template>
  <div class="guidePage1">
    <div class="bg-container">
      <img src="../../assets/p1/01.jpg" ref="img1">
      <img src="../../assets/p1/02.jpg" ref="img2">
    </div>
    <div class="txt">
      <img style="width: 47.73%;margin-bottom: 3.98vh;" src="../../assets/p1/03.png" ref="title">
      <img style="width: 80%;" src="../../assets/p1/content.png" ref="content">
    </div>

    <ArrowBtn v-show="showArrow"/>

    <transition enter-active-class="animated zoomIn">
      <Modal :z-index="2" v-show="showModal"/>
    </transition>
  </div>
</template>

<script>
  import { tween, styler, value, spring, easing, keyframes } from 'popmotion'
  import Modal from '../../components/Modal'
  import ArrowBtn from '../../components/ArrowBtn'

  export default {
    props: ['moveIn'],
    components: {Modal, ArrowBtn},
    data () {
      return {
        showArrow: false,
        showModal: false,
      }
    },
    methods: {
      animate () {
        this.showImg1()
        this.showImg2()
        setTimeout(() => this.showModal = true, 1500)
        setTimeout(() => this.showArrow = true, 2000)
        setTimeout(() => this.showText(this.$refs.title), 2000)
        setTimeout(() => this.showText(this.$refs.content), 3500)
      },
      showImg1 () {
        const img = this.$refs.img1
        const imgStyler = styler(img)
        tween({
          from: {rotateZ: 360, scale: 0, opacity: 0, y: 200,},
          to: {rotateZ: 0, scale: 1, opacity: 1, y: 0,},
          duration: 1500,
          easings: easing.easeInOut,
        }).start(imgStyler.set)
      },
      showImg2 () {
        const img = this.$refs.img2
        const imgStyler = styler(img)
        tween({
          from: {rotateZ: -360, scale: 0, opacity: 0, y: -200,},
          to: {rotateZ: 0, scale: 1, opacity: 1, y: 0,},
          duration: 1500,
          easings: easing.easeInOut,
        }).start(imgStyler.set)
      },
      showText (text) {
        const textStyler = styler(text)
        tween({
          from: {x: -200, opacity: 0},
          to: {x: 0, opacity: 1},
          duration: 1500,
          easings: easing.easeInOut,
        }).start(textStyler.set)
      },
      resetNodes () {
        this.showModal = false
        this.showArrow = false
        this.$refs.img1.style.opacity = 0
        this.$refs.img2.style.opacity = 0
        this.$refs.title.style.opacity = 0
        this.$refs.content.style.opacity = 0
      }
    },
    watch: {
      moveIn (newVal) {
        if (newVal) {
          this.resetNodes()
          setTimeout(this.animate.bind(this), 700)
        }
      }
    },
  }
</script>

<style scoped lang="scss">
  .guidePage1 {
    position: relative;
  }

  .bg-container {
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
    }
  }
</style>
