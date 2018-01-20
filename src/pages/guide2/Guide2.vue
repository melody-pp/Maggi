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
      <img style="width: 46.8vw;margin-bottom: 3.65vh;" src="../../assets/p2/theme.png" ref="title">
      <img style="width: 28.27vw;margin-bottom: 3.65vh;" src="../../assets/p2/theme1.png" ref="subTitle">
      <img style="width: 60vw;" src="../../assets/p2/content.png" ref="content">
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
