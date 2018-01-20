<template>
  <div>
    <img class="title" src="../../assets/p4/theme.png">
    <img class="content" src="../../assets/p4/content.png">
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
  .title {
    width: 63.47vw;
    margin: 15vh auto 3.98vh;
  }

  .content {
    width: 66.93vw;
  }
</style>
