<template>
  <div class="arrowUp">
    <img ref="arrow" src="../assets/index/001.png" alt="">
  </div>
</template>

<script>
  import { tween, styler, easing } from 'popmotion'

  export default {
    mounted () {
      const $arrow = this.$refs.arrow
      const arrowStyler = styler($arrow)

      tween({
        to: 15,
        ease: easing.easeInOut,
        flip: Infinity,
        duration: 500
      }).start(arrowStyler.set('y'))
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
