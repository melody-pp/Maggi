<template>
  <div class="guidePage1">
    <div class="bg-container">
      <img src="../../assets/p1/01.jpg" alt="">
      <img src="../../assets/p1/02.jpg" alt="">
    </div>
    <div class="txt">
      <img style="width: 47.73%;margin-bottom: 3vh;" src="../../assets/p1/03.png" alt="">
      <img style="width: 62.93%;" src="../../assets/p1/04.png" alt="">
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

  .bg-container img {
    height: 50vh;
    vertical-align: middle;
  }

  .txt {
    top: 50%;
    z-index: 3;
    position: absolute;
    transform: translateY(-50%);
    img {
      margin-left: 4vw;
    }
  }
</style>
