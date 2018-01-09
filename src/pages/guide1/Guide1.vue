<template>
  <div class="guidePage1">
    <div class="bg-container">
      <img src="../../assets/p1/01.jpg" alt="">
      <img src="../../assets/p1/02.jpg" alt="">
    </div>
    <div class="txt">
      <img style="width: 47.73%;" src="../../assets/p1/03.png" alt="">
      <img style="width: 62.93%;" src="../../assets/p1/04.png" alt="">
    </div>
    <Modal :z-index="2"/>
  </div>
</template>
<script>
  import Modal from '../../components/Modal'
  export default {
    components:{Modal}
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
      margin-left: 15px;
    }
  }
</style>
