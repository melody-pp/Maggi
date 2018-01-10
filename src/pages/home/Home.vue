<template>
  <el-container>
    <el-header class="header">
      <img src="../../assets/index/topText.png" alt="">
    </el-header>

    <el-main class="main clearfix">
      <img src="../../assets/index/01.jpg" alt="">
      <img src="../../assets/index/02.jpg" alt="">
      <img src="../../assets/index/03.jpg" alt="">
      <img src="../../assets/index/04.jpg" alt="">
      <img src="../../assets/index/05.jpg" alt="">
      <img src="../../assets/index/06.jpg" alt="">
      <img src="../../assets/index/07.jpg" alt="">
      <img src="../../assets/index/08.jpg" alt="">
      <img src="../../assets/index/09.jpg" alt="">
      <img src="../../assets/index/10.jpg" alt="">
    </el-main>

    <el-footer>
      <img src="../../assets/index/bottomText.png" alt="">
    </el-footer>

    <div class="arrowUp">
      <img src="../../assets/index/001.png" alt="">
    </div>
  </el-container>
</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {
        opts: {
          start: 0,
          dir: 'v',
          loop: false,
          duration: 300,
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .header {
    width: 75vw;
    height: auto !important;
    margin: 7vh auto 5vh;
  }

  .el-footer {
    height: auto !important;
    width: 38.8vw;
    padding: 0;
    margin: 5vh auto 0;
  }

  .arrowUp {
    margin: 4vh auto 0;
    width: 9.33vw;
  }

  .main {
    padding: 0;
    background-color: #fff;
    overflow: hidden;
    vertical-align: middle;
    img {
      float: left;
      height: 16vh;
      vertical-align: middle;
    }

    img:nth-child(1) {
      width: 41.33vw;
    }
    img:nth-child(2) {
      width: 19.6vw;
      margin: 0 1.383vw;
    }
    img:nth-child(3) {
      width: 36.304vw;
    }
    img:nth-child(4) {
      width: 18.13vw;
      margin-right: 1.383vw;
    }
    img:nth-child(5) {
      width: 22.93vw;
      margin-right: 1.383vw;
    }
    img:nth-child(6) {
      width: 35.33vw;
      margin-right: 1.383vw;
    }
    img:nth-child(7) {
      width: 19.46vw;
    }
    img:nth-child(8) {
      width: 41.33vw;
    }
    img:nth-child(9) {
      width: 19.6vw;
      margin: 0 1.383vw;
    }
    img:nth-child(10) {
      width: 36.304vw;
    }
  }
</style>
