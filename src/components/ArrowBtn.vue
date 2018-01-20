<template>
  <div class="arrowUp">
    <img ref="arrow" src="../assets/index/001.png" @touchstart="moveDown">
  </div>
</template>

<script>
  export default {
    mounted () {

    },
    methods: {
      moveDown () {
        this.$store.commit('moveDown')
      }
    }
  }
</script>

<style scoped lang="scss">
  .arrowUp {
    position: absolute;
    bottom: 6vh;
    z-index: 10;
    left: 50%;
    transform: translateX(-50%);
    width: 9.33vw;
  }
</style>
