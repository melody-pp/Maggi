<template>
  <div class="guidePage1">
    <div class="bg-container">
      <div class="topImg">
        <img src="../../assets/p2/01.jpg" alt="">
        <img src="../../assets/p2/02.jpg" alt="">
        <img src="../../assets/p2/03.jpg" alt="">
        <img src="../../assets/p2/04.jpg" alt="">
      </div>
      <img src="../../assets/p2/05.jpg" alt="">
    </div>
    <div class="txt">
      <img style="width: 49.06%;" src="../../assets/p2/06.png" alt="">
      <img style="width: 76.66%;" src="../../assets/p2/07.png" alt="">
    </div>
    <Modal :z-index="2"/>
  </div>
</template>
<script>
  import Modal from '../../components/Modal'

  export default {
    components: {Modal}
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
    top: 50%;
    z-index: 3;
    text-align: left;
    position: absolute;
    transform: translateY(-50%);
    img {
      margin-left: 15px;
    }
  }
</style>
