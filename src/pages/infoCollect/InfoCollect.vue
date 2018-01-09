<template>
  <div class="bg">
    <div class="title">
      <img src="../../assets/infoCollect/01.png" alt="">
    </div>
    <img class="gatherImg" src="../../assets/infoCollect/02.png" alt="">
    <img class="homeTxt" src="../../assets/infoCollect/04.png" alt="">
    <img class="btn" src="../../assets/infoCollect/03.jpg" alt="">
    <el-input type="textarea" :rows="3" placeholder="请输入2018年相对家人说的话" v-model="textarea"/>
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
    margin: 6.5vh auto 0;
    width: 65.5%;
  }

  .gatherImg {
    margin: 2vh 0;
  }

  .homeTxt {
    width: 12.26%;
    position: absolute;
    top: 18%;
    left: 25%;
  }

  .btn {
    width: 68.27%;
    position: absolute;
    bottom: 13vh;
    left: 50%;
    transform: translateX(-50%);
  }

  .el-textarea {
    width: 88% !important;
  }
</style>
