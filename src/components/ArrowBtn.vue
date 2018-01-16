<template>
  <div class="arrowUp">
    <img ref="arrow" src="../assets/index/001.png" @touchstart="moveDown">
  </div>
</template>

<script>
  import { tween, styler, easing } from 'popmotion'

  export default {
    mounted () {
      tween({
        to: 15,
        ease: easing.easeInOut,
        flip: Infinity,
        duration: 500
      }).start(styler(this.$refs.arrow).set('y'))
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
