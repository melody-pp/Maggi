<template>
  <div>
    <div class="txt">
      <img style="width: 63.47vw;margin-bottom: 3.98vh;" src="../../assets/p4/theme.png">
      <img style="width: 66.93vw;" src="../../assets/p4/content.png" >
    </div>
    <img class="btn" src="../../assets/p4/participation.png" @touchstart="moveDown">
  </div>
</template>

<script>
  import ArrowBtn from '../../components/ArrowBtn'
  export default {
    components: {ArrowBtn},
    methods: {
      moveDown () {
        this.$store.commit('moveDown')
      }
    }
  }
</script>

<style scoped lang="scss">
  .bg-container img {
    height: 50vh;
    vertical-align: middle;
  }

  .txt {
    z-index: 3;
    top: 25.21vh;
    position: absolute;
  }
</style>
