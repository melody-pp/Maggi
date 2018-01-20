<template>
  <div>
    <div class="bg-container">
      <img src="../../assets/p1/01.jpg" ref="img1">
      <img src="../../assets/p1/02.jpg" ref="img2">
    </div>
    <div class="txt">
      <img style="width: 46.8vw;margin-bottom: 3.98vh;" src="../../assets/p1/theme.png" ref="title">
      <img style="width: 32.27vw;margin-bottom: 2vh;" src="../../assets/p1/theme1.png" ref="subTitle">
      <img style="width: 61.33vw;" src="../../assets/p1/content.png" ref="content">
    </div>

    <ArrowBtn v-show="showArrow"/>

    <transition enter-active-class="animated zoomIn">
      <Modal :z-index="2" v-show="showModal"/>
    </transition>
  </div>
</template>

<script>
  import Modal from '../../components/Modal'
  import ArrowBtn from '../../components/ArrowBtn'

  export default {
    props: ['moveIn'],
    components: {Modal, ArrowBtn},
    data () {
      return {
        showArrow: true,
        showModal: true,
      }
    },
    methods: {},
    watch: {
      moveIn (newVal) {
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
