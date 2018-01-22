<template>
  <div class="bg" ref="page">
    <div class="title">
      <img src="../../assets/infoCollect/theme.png" ref="title">
    </div>
    <canvas class="canvas" ref="canvas" width="750" height="656"></canvas>
    <img class="homeTxt" src="../../assets/infoCollect/family1.png" ref="homeTxt">
    <el-input type="textarea" :rows="4" placeholder="2018年春节，我想说……（文字80字以内）" :maxlength="80" v-model="Comment"/>
    <img class="btn" src="../../assets/infoCollect/button.png" @click="submit" ref="infoCollectBtn">
  </div>
</template>

<script>
  import { TimelineMax, Elastic } from 'gsap'
  import Ripple from '../../lib/Ripple/Ripple'

  export default {
    props: ['moveIn'],
    data () {
      return {
        Comment: '',
        timeline: null,
        showArrow: false
      }
    },
    computed: {
      userInfo () {
        return this.$store.state.userInfo
      }
    },
    mounted () {
      const ctx = this.$refs.canvas.getContext('2d')
      const mainImg = document.createElement('img')

      mainImg.src = require('../../assets/infoCollect/family.png')
      mainImg.onload = () => {
        ctx.drawImage(mainImg, 0, 0)
        new Ripple(ctx, 0, -100, 800, mainImg)
      }
    },
    methods: {
      submit () {
        if (!this.Comment) {
          return this.$message.warning('留言不能为空哦！')
        }

        this.axios.post(
          '/api/activity/adduser',
          {Comment: this.Comment, ...this.userInfo}
        ).then(({data: {errcode, errmsg}}) => {
          if (errcode === 0) {
            this.$message.success('提交成功！')
            this.$store.commit('moveDown')
          } else {
            this.$message.error(errmsg)
          }
        })
      },
      animate () {
        this.timeline = new TimelineMax({
          delay: 0.7,
          onComplete () {
            this.showArrow = true
          }
        })

        this.timeline
          .from(this.$refs.title, 0.5, {autoAlpha: 0, y: -50})
          .from(this.$refs.canvas, 1, {autoAlpha: 0})
          .from(this.$refs.homeTxt, 0.5, {autoAlpha: 0})
          .from(this.$refs.page.querySelector('.el-textarea'), 1, {autoAlpha: 0, scale: 0})
          .from(this.$refs.infoCollectBtn, 0.5, {autoAlpha: 0, y: -50})
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
    width: 74.67vw;
  }

  .bg {
    height: 100%;
    overflow: hidden;
    position: relative;
  }

  .canvas {
    width: 100vw;
    display: block;
    margin: 2vh 0 2.5vh;
  }

  .homeTxt {
    top: 21vh;
    left: 46vw;
    width: 12.26vw;
    position: absolute;
  }

  .el-textarea {
    resize: none;
    width: 88% !important;
  }
</style>
