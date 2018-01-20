<template>
  <div class="arrowUp" @touchstart="moveDown">
    <img ref="arrow" src="../assets/index/001.png">
  </div>
</template>

<script>
  import { TweenMax, Power0 } from 'gsap'

  export default {
    mounted () {
      TweenMax.to(this.$refs.arrow, 1, {y: -20, repeat: -1, yoyo: true, ease: Power0.easeNone})
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
