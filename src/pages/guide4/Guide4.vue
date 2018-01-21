<template>
  <div>
    <img class="title" src="../../assets/p4/theme.png" ref="title">
    <img class="content" src="../../assets/p4/content.png" ref="content">
    <img class="btn" src="../../assets/p4/participation.png" ref="btn" @touchstart="moveDown">
  </div>
</template>

<script>
  import { TimelineMax, Elastic } from 'gsap'

  export default {
    data () {
      return {
        timeline: null,
        showArrow: false
      }
    },
    props: ['moveIn'],
    methods: {
      animate () {
        this.timeline = new TimelineMax({
          delay: 0.7,
          onComplete: () => {
            this.showArrow = true
          }
        })

        this.timeline
          .from(this.$refs.title, 1, {autoAlpha: 0, x: -50, ease: Elastic.easeOut.config(1.2, 0.3)})
          .from(this.$refs.content, 1, {autoAlpha: 0, x: -50, ease: Elastic.easeOut.config(1.2, 0.3)})
          .from(this.$refs.btn, 1, {autoAlpha: 0})
      },
      moveDown () {
        this.$store.commit('moveDown')
      }
    },
    watch: {
      moveIn (newVal) {
        newVal && this.animate()
      }
    },
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
