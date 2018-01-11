<template>
  <div class="guidePage1">
    <div class="bg-container">
      <img src="../../assets/p3/family.jpg" alt="">
      <img src="../../assets/p3/busy.jpg" alt="">
    </div>
    <div class="txt">
      <img style="width: 47.73%;margin-bottom: 3.98vh;" src="../../assets/p3/theme.png" alt="">
      <img style="width: 76%;" src="../../assets/p3/content.png" alt="">
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
    vertical-align: middle;
    height: 50vh;
  }

  .txt {
    z-index: 3;
    top: 25.21vh;
    text-align: left;
    position: absolute;
    img {
      margin-left: 4vw;
    }
  }
</style>
