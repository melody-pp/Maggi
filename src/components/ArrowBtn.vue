<template>
  <div class="arrowUp" @touchstart="moveDown">
    <img ref="arrow" src="../assets/index/001.png">
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
    padding: 20px;
    position: absolute;
    bottom: 0;
    z-index: 10;
    left: 50%;
    transform: translateX(-50%);
    width: 9.33vw;
  }
</style>
