<template>
  <div>
    <img class="title" src="../../assets/leaveInfo/theme.png" ref="title">
    <img class="content" src="../../assets/leaveInfo/Activity-rules.png" ref="content">
    <img class="btn" src="../../assets/leaveInfo/Save-the-view.png" @click="showDialog" ref="btn">

    <el-dialog title="长按识别公众号二维码" :visible.sync="dialogVisible" width="90%"
               center :show-close="false" :append-to-body="true">
      <img src="../../assets/gongzhonghao.jpg">
    </el-dialog>
  </div>
</template>

<script>
  import { TimelineMax, Elastic } from 'gsap'

  export default {
    data () {
      return {
        dialogVisible: false,
        timeline: null,
      }
    },
    props: ['moveIn'],
    methods: {
      showDialog () {
        this.dialogVisible = true
      },
      animate () {
        this.timeline = new TimelineMax({
          delay: 0.7,
          onComplete () {
            this.showArrow = true
          }
        })

        this.timeline
          .from(this.$refs.title, 0.5, {autoAlpha: 0, x: -50})
          .from(this.$refs.content, 0.5, {autoAlpha: 0, x: -50})
          .from(this.$refs.btn, 0.5, {autoAlpha: 0})
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
    width: 63.33vw;
    margin: 20vh auto 3.98vh;
  }

  .content {
    width: 71.07vw;
  }
</style>
