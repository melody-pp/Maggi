<template>
  <div class="guidePage1">
    <div class="bg-container">
      <img src="../../assets/p1/01.jpg" ref="img1">
      <img src="../../assets/p1/02.jpg" ref="img2">
    </div>
    <div class="txt" ref="text">
      <img style="width: 47.73%;margin-bottom: 3.98vh;" src="../../assets/p1/03.png" alt="">
      <img style="width: 80%;" src="../../assets/p1/content.png" alt="">
    </div>
    <ArrowBtn v-show="showArrow"/>
    <Modal :z-index="2"/>
  </div>
</template>

<script>
  import { tween, styler, value, spring, easing } from 'popmotion'
  import Modal from '../../components/Modal'
  import ArrowBtn from '../../components/ArrowBtn'

  export default {
    props: ['moveIn'],
    components: {Modal, ArrowBtn},
    data () {
      return {
        showArrow: false
      }
    },
    mounted () {
      this.animate()
      setTimeout(() => this.showArrow = true, 2000)
    },
    methods: {
      animate () {},
      resetNodes () {
        const text = this.$refs.text
        const img1 = this.$refs.img1
        const img2 = this.$refs.img2

        text.style.scale = 0
        text.style.opacity = 0
        img1.style.opacity = 0
        img2.style.opacity = 0
      }
    },
    watch: {
      moveIn (newVal) {
        if (newVal) {
          this.resetNodes()
          this.animate()
        }
      }
    },
  }
</script>

<style scoped lang="scss">
  .guidePage1 {
    position: relative;
  }

  .bg-container img {
    height: 50vh;
    vertical-align: middle;
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
