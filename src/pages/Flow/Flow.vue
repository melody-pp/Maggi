<template>
  <div>
    <img class="title" src="../../assets/flow/theme.png" ref="title">
    <div class="subTitle" ref="subTitle">如何参与？</div>

    <div class="flow" style="margin-top: 2vh;">
      <div><img src="../../assets/flow/guidance.png" style="width: 24.4vw" ref="img1"></div>
      <div><img src="../../assets/flow/guidance1.png" style="width: 21.2vw" ref="img2"></div>
      <div><img src="../../assets/flow/guidance2.png" style="width: 28vw" ref="img3"></div>
    </div>

    <div class="flow" style="margin-top: 6vh;">
      <div><img src="../../assets/flow/guidance3.png" style="width: 25.33vw" ref="img4"></div>
      <div><img src="../../assets/flow/guidance4.png" style="width: 25.6vw" ref="img5"></div>
      <div><img src="../../assets/flow/guidance5.png" style="width: 31.33vw" ref="img6"></div>
    </div>

    <ArrowBtn v-show="showArrow"/>
  </div>
</template>

<script>
  import { TimelineMax, Elastic } from 'gsap'
  import ArrowBtn from '../../components/ArrowBtn'

  export default {
    name: 'flow',
    props: ['moveIn'],
    components: {ArrowBtn},
    data () {
      return {
        timeline: null,
        showArrow: false
      }
    },
    methods: {
      animate () {
        this.timeline = new TimelineMax({
          delay: 0.7,
          onComplete: () => {
            this.showArrow = true
          }
        })

        this.timeline
          .from(this.$refs.title, 0.5, {autoAlpha: 0})
          .from(this.$refs.subTitle, 0.5, {autoAlpha: 0})
          .from(this.$refs.img1, 0.5, {autoAlpha: 0})
          .from(this.$refs.img2, 0.5, {autoAlpha: 0})
          .from(this.$refs.img3, 0.5, {autoAlpha: 0})
          .from(this.$refs.img4, 0.5, {autoAlpha: 0})
          .from(this.$refs.img5, 0.5, {autoAlpha: 0})
          .from(this.$refs.img6, 0.5, {autoAlpha: 0})

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
  }

  .subTitle {
    margin-top: 3vh;
    color: #fff100;
    text-align: left;
    text-indent: 5.7vw;
  }

  .flow {
    display: flex;
    > div {
      width: 33.33vw;
    }
  }

</style>
