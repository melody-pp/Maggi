<template>
  <div class="bg">
    <div class="title">
      <img src="../../assets/infoCollect/01.png" alt="">
    </div>
    <canvas class="canvas" ref="canvas" width="750" height="656"></canvas>
    <img class="homeTxt" src="../../assets/infoCollect/04.png" alt="">
    <el-input type="textarea" :rows="4" placeholder="2018年春节，我想说……" :maxlength="80" v-model="Comment"/>
    <img class="btn" src="../../assets/infoCollect/button.png" @click="submit">
  </div>
</template>

<script>
  import Ripple from '../../lib/Ripple/Ripple'

  export default {
    data () {
      return {
        Comment: ''
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

      mainImg.src = require('../../assets/infoCollect/02.png')
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
    }
  }
</script>

<style scoped lang="scss">
  .bg {
    position: relative;
    height: 100%;
    overflow: hidden;
  }


  .canvas {
    display: block;
    width: 100vw;
    margin: 2vh 0 2.5vh;
  }

  .homeTxt {
    width: 12.26vw;
    position: absolute;
    top: 23vh;
    left: 25vw;
  }

  .el-textarea {
    resize: none;
    width: 88% !important;
  }
</style>
