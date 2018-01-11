<template>
  <div class="guidePage1">
    <div class="bg-container">
      <img src="../../assets/p1/01.jpg" alt="">
      <img src="../../assets/p1/02.jpg" alt="">
    </div>
    <div class="txt">
      <img style="width: 47.73%;margin-bottom: 3.98vh;" src="../../assets/p1/03.png" alt="">
      <img style="width: 62.93%;" src="../../assets/p1/04.png" alt="">
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

  .bg-container img {
    height: 50vh;
    vertical-align: middle;
  }

  .txt {
    top: 35.32vh;
    z-index: 3;
    position: absolute;
    text-align: left;
    img {
      margin-left: 4vw;
    }
  }
</style>
