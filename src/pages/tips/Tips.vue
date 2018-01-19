<template>
  <div>
    <div class="txt">
      <img style="width: 56.27vw;margin-bottom: 3.98vh;" src="../../assets/comments/theme.png" alt="">
      <img style="width: 80vw;" src="../../assets/leaveInfo/Activity-rules.png" alt="">
    </div>
    <img class="btn" src="../../assets/leaveInfo/Save-the-view.png" @click="toComments">
  </div>
</template>

<script>
  export default {
    methods: {
      toComments () {
        this.$store.commit('moveDown')
      }
    }
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
