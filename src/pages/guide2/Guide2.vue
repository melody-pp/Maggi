<template>
  <div class="guidePage1">
    <div class="bg-container">
      <div class="topImg clearfix">
        <img src="../../assets/p2/01.jpg" alt="">
        <img src="../../assets/p2/02.jpg" alt="">
        <img src="../../assets/p2/03.jpg" alt="">
        <img src="../../assets/p2/04.jpg" alt="">
      </div>
      <img src="../../assets/p2/05.jpg" alt="">
    </div>
    <div class="txt">
      <img style="width: 49.06%;margin-bottom: 3.65vh;" src="../../assets/p2/06.png" alt="">
      <img style="width: 76.4vw;" src="../../assets/p2/content.png" alt="">
    </div>
    <ArrowBtn/>
    <Modal :z-index="2"/>
  </div>
</template>

<script>
  import Modal from '../../components/Modal'
  import ArrowBtn from '../../components/ArrowBtn'

  export default {
    components: {Modal, ArrowBtn}
  }
</script>

<style scoped lang="scss">
  .guidePage1 {
    position: relative;
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
