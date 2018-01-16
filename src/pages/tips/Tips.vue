<template>
  <div class="guidePage1">
    <div class="txt">
      <img style="width: 56.27vw;margin-bottom: 3.98vh;" src="../../assets/comments/theme.png" alt="">
      <img style="width: 80vw;" src="../../assets/leaveInfo/Activity-rules.png" alt="">
    </div>
    <img class="btn" src="../../assets/leaveInfo/Save-the-view.png" @click="toComments">

  </div>
</template>

<script>
  import $ from 'jquery'

  export default {
    methods: {
      toComments () {
        $('#fullpage').fullpage.moveSectionDown()
      }
    }
  }
</script>

<style scoped lang="scss">
  .guidePage1 {
    position: relative;
    height: 100vh;
  }

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
