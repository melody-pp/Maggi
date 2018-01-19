<template>
  <div>
    <div class="txt">
      <img style="width: 56.27vw;margin-bottom: 3.98vh;" src="../../assets/comments/theme.png" alt="">
      <img style="width: 80vw;" src="../../assets/p4/content.png" alt="">
    </div>

    <ArrowBtn/>

  </div>
</template>

<script>

  import ArrowBtn from '../../components/ArrowBtn'

  export default {
    components: {ArrowBtn}
  }
</script>

<style scoped lang="scss">
  .bg-container img {
    vertical-align: middle;
    height: 50vh;
  }

  .txt {
    z-index: 3;
    top: 25.21vh;
    position: absolute;
  }
</style>
