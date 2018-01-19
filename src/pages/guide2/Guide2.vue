<template>
  <div>
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
      <img style="width: 49.06%;margin-bottom: 3.65vh;" src="../../assets/p2/06.png" ref="title">
      <img style="width: 76.4vw;" src="../../assets/p2/content.png" ref="content">
    </div>

    <ArrowBtn v-show="showArrow"/>

    <transition enter-active-class="animated zoomIn">
      <Modal :z-index="2" v-show="showModal"/>
    </transition>
  </div>
</template>

<script>
  import { tween, styler, easing } from 'popmotion'
  import Modal from '../../components/Modal'
  import ArrowBtn from '../../components/ArrowBtn'

  export default {
    props: ['moveIn'],
    components: {Modal, ArrowBtn},
    data () {
      return {
        Xs: [200, -200, 200, -200],
        Ys: [200, 200, -200, -200],
        showArrow: false,
        showModal: false,
      }
    },
    methods: {
      animate () {
        this.showImgs()
        setTimeout(() => this.showModal = true, 2000)
        setTimeout(() => this.showArrow = true, 2000)
        setTimeout(() => this.showText(this.$refs.title), 2500)
        setTimeout(() => this.showText(this.$refs.content), 4000)
      },
      showImgs () {
        const imgs = this.$refs
        ;[imgs.img1, imgs.img2, imgs.img3, imgs.img4].forEach((img, i) => this.showImg(img, i))
        setTimeout(this.showBottom.bind(this), 1000)
      },

      showImg (img, i) {
        tween({
          from: {x: this.Xs[i], y: this.Ys[i], opacity: 0, scale: 0},
          to: {x: 0, y: 0, opacity: 1, scale: 1},
          duration: 1000,
          easings: easing.easeInOut,
        }).start(styler(img).set)
      },

      showBottom () {
        const img = this.$refs.bottomImg
        const imgStyler = styler(img)
        tween({
          from: {y: -200, opacity: 0, scale: 2},
          to: {y: 0, opacity: 1, scale: 1},
          duration: 1000,
          easings: easing.easeInOut,
        }).start(imgStyler.set)
      },

      showText (text) {
        const textStyler = styler(text)
        tween({
          from: {y: -200, opacity: 0},
          to: {y: 0, opacity: 1},
          duration: 1500,
          easings: easing.easeInOut,
        }).start(textStyler.set)
      },
    },
    watch: {
      moveIn (newVal) {
        newVal && setTimeout(this.animate.bind(this), 700)
      }
    },
  }
</script>

<style scoped lang="scss">
  img {
    opacity: 0;
  }

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
    }
  }
</style>
