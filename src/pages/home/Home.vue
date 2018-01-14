<template>
  <el-container>
    <el-header class="header">
      <img src="../../assets/index/topText.png" ref="topImg">
    </el-header>

    <div ref="main" class="main clearfix">
      <img v-for="(img, index) of imgs" :src="img" :key="index" @click="showDialog(index)">
    </div>

    <el-footer>
      <img src="../../assets/index/bottomText.png" ref="bottomImg">
    </el-footer>

    <ArrowBtn v-show="showArrow"/>

    <el-dialog :visible.sync="dialogVisible" top="30vh" width="100%" :append-to-body="true" :show-close="false"
               class="home-dialog">
      <el-carousel ref="carousel" type="card" height="25vh" indicator-position="none" :interval="2000" arrow="never">
        <el-carousel-item v-for="(img, index) of imgs" :key="index">
          <img :src="img" style="width:auto; height:auto; max-width:100%; max-height: 100%;vertical-align: middle;">
        </el-carousel-item>
      </el-carousel>
    </el-dialog>
  </el-container>
</template>

<script>
  import { tween, styler, value, spring, easing } from 'popmotion'
  import ArrowBtn from '../../components/ArrowBtn'
  import { showUpvote, sample } from '../../utils/utils'

  export default {
    name: 'Home',
    props: ['moveIn'],
    components: {ArrowBtn},
    data () {
      return {
        showArrow: false,
        dialogVisible: false,
        imgs: [
          require('../../assets/index/01.jpg'),
          require('../../assets/index/02.jpg'),
          require('../../assets/index/03.jpg'),
          require('../../assets/index/04.jpg'),
          require('../../assets/index/05.jpg'),
          require('../../assets/index/06.jpg'),
          require('../../assets/index/07.jpg'),
          require('../../assets/index/08.jpg'),
          require('../../assets/index/09.jpg'),
          require('../../assets/index/10.jpg'),
        ]
      }
    },
    mounted () {
      this.resetNodes()
      this.animate()
      const colors = ['#abcdef', '#bbbbbb', '#cccccc', '#dddddd']
      // document.addEventListener('touchstart', event => showUpvote(event, sample(colors)))
    },
    methods: {
      showDialog (index) {
        this.dialogVisible = true
        setTimeout(() => this.$refs.carousel.setActiveItem(index))
      },
      animate () {
        this.showImgs()
        setTimeout(this.showTop.bind(this), 2000)
        setTimeout(this.showBottom.bind(this), 2500)
        setTimeout(() => this.showArrow = true, 2500)
        setTimeout(this.showMainBG.bind(this), 2000)
      },
      showTop () {
        const topImg = this.$refs.topImg
        const topStyler = styler(topImg)
        tween({
          from: {opacity: 0, y: -50},
          to: {opacity: 1, y: 0},
          ease: easing.easeInOut,
          duration: 1000
        }).start(topStyler.set)
      },
      showMainBG () {
        const main = this.$refs.main
        const mainStyler = styler(main)
        tween({
          from: {background: 'rgba(0,0,0,0)'},
          to: {background: 'rgba(255,255,255,1)'},
          ease: easing.easeInOut,
          duration: 1000
        }).start(mainStyler.set)
      },
      showBottom () {
        const bottomImg = this.$refs.bottomImg
        const bottomStyler = styler(bottomImg)
        tween({
          from: {opacity: 0, y: 50},
          to: {opacity: 1, y: 0},
          ease: easing.easeInOut,
          duration: 1000
        }).start(bottomStyler.set)
      },
      showImgs () {
        const $imgs = Array.from(document.querySelectorAll('.main>img'))
        $imgs.forEach((img, i) => setTimeout(() => this.showImg(img), i * 200 + 300))
      },
      showImg (img) {
        const imgStyler = styler(img)
        const imgAni = value({scale: 0, opacity: 0}, imgStyler.set)

        spring({
          from: imgAni.get(),
          to: {scale: 1, opacity: 1},
        }).start(imgAni)
      },
      resetNodes () {
        this.showArrow = false
        for (const img of document.querySelectorAll('.main>img')) {
          img.style.opacity = 0
          img.style.scale = 0
        }
        this.$refs.main.style.background = 'rgba(0,0,0,0)'
        this.$refs.topImg.style.opacity = 0
        this.$refs.bottomImg.style.opacity = 0
      }
    },
    watch: {
      moveIn (newVal) {
        if (newVal) {
          this.resetNodes()
          setTimeout(this.animate.bind(this), 700)
        }
      }
    },
  }
</script>

<style scoped lang="scss">
  .header {
    width: 79.2vw;
    height: auto !important;
    margin: 6.47vh auto 4.98vh;
  }

  .el-footer {
    padding: 0;
    width: 49.87vw;
    height: auto !important;
    margin: 3.65vh auto 7.3vh;
  }

  .main {
    padding: 0;
    overflow: hidden;
    vertical-align: middle;
    background-color: #fff;
    img {
      float: left;
      height: 16vh;
      vertical-align: middle;
    }

    img:nth-child(1) {
      width: 41.33vw;
    }
    img:nth-child(2) {
      width: 19.6vw;
      margin: 0 1.383vw;
    }
    img:nth-child(3) {
      width: 36.304vw;
    }
    img:nth-child(4) {
      width: 18.13vw;
      margin-right: 1.383vw;
    }
    img:nth-child(5) {
      width: 22.93vw;
      margin-right: 1.383vw;
    }
    img:nth-child(6) {
      width: 35.33vw;
      margin-right: 1.383vw;
    }
    img:nth-child(7) {
      width: 19.46vw;
    }
    img:nth-child(8) {
      width: 41.33vw;
    }
    img:nth-child(9) {
      width: 19.6vw;
      margin: 0 1.383vw;
    }
    img:nth-child(10) {
      width: 36.304vw;
    }
  }
</style>
