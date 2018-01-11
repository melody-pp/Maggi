<template>
  <div class="guidePage1">
    <div class="bg-container">
      <img src="../../assets/p3/family.jpg" alt="">
      <img src="../../assets/p3/busy.jpg" alt="">
    </div>
    <div class="txt">
      <img style="width: 47.73%;margin-bottom: 3vh;" src="../../assets/p3/theme.png" alt="">
      <img style="width: 62.93%;" src="../../assets/p3/content.png" alt="">
    </div>
    <img class="doubtTxt" src="../../assets/p3/doubt.png" alt="">
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
    vertical-align: middle;
    height: 50vh;
  }

  .txt {
    z-index: 3;
    top: 50%;
    text-align: left;
    position: absolute;
    transform: translateY(-50%);
    img {
      margin-left: 4vw;
    }
  }

  .doubtTxt {
    position: absolute;
    right: 30vw;
    bottom: 28vh;
    width: 29.335%;
    z-index: 3;
  }
</style>
