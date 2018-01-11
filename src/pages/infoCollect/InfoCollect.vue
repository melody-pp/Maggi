<template>
  <div class="bg">
    <div class="title">
      <img src="../../assets/infoCollect/01.png" alt="">
    </div>
    <img class="gatherImg" src="../../assets/infoCollect/02.png" alt="">
    <img class="homeTxt" src="../../assets/infoCollect/04.png" alt="">
    <img class="btn" src="../../assets/btn/btnSelfprotrait.png" alt="">
    <el-input type="textarea" :rows="3" placeholder="请输入2018年想对家人说的话" v-model="textarea"/>
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
    width: 88% !important;
  }
</style>
