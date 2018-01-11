<template>
  <div class="bg">
    <div class="title">
      <img src="../../assets/infoCollect/01.png" alt="">
    </div>
    <img class="gatherImg" src="../../assets/infoCollect/02.png" alt="">
    <img class="homeTxt" src="../../assets/infoCollect/04.png" alt="">
    <el-input type="textarea" :rows="3" placeholder="2018年春节，我想说……" v-model="textarea"/>
    <img class="btn" src="../../assets/infoCollect/button.png" alt="">
  </div>
</template>

<script>
  export default {
    data () {
      return {
        textarea: ''
      }
    }
  }
</script>

<style scoped lang="scss">
  .bg {
    position: relative;
    height: 100%;
  }

  .title {
    margin: 5.47vh auto 0;
    width: 65.5%;
  }

  .gatherImg {
    margin: 2vh 0 2.5vh;
  }

  .homeTxt {
    width: 12.26%;
    position: absolute;
    top: 18%;
    left: 25%;
  }

  .el-textarea {
    resize: none;
    width: 88% !important;
  }
</style>
