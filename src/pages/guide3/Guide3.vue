<template>
  <div>
    <div class="bg-container">
      <img src="../../assets/p3/family.jpg" ref="img1">
      <img src="../../assets/p3/busy.jpg" ref="img2">
    </div>
    <div class="txt">
      <img style="width: 46.8vw;margin-bottom: 3.98vh;" src="../../assets/p3/theme.png" ref="title">
      <img style="width: 32.13vw;margin-bottom: 3.98vh;" src="../../assets/p3/theme1.png" ref="subTitle">
      <img style="width: 63.07vw;" src="../../assets/p3/content.png" ref="content">
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
