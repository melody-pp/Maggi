<template>
  <div>
    <div class="header">
      <img ref="topImg" src="../../assets/index/top_pic.png" class="hide">
    </div>

    <div ref="main" class="main clearfix">
      <img v-for="(img, index) of imgs" :src="img" :key="index" @click="showDialog(index)">
    </div>

    <div class="footer">
      <img ref="bottomImg" src="../../assets/index/bom_pic.png" class="hide">
    </div>

    <ArrowBtn v-show="showArrow"/>

    <el-dialog class="home-dialog" :visible.sync="dialogVisible" top="30vh" width="100%"
               :append-to-body="true" :show-close="false">
      <el-carousel ref="carousel" type="card" height="25vh" indicator-position="none" :interval="2000" arrow="never">
        <el-carousel-item v-for="(img, index) of imgs" :key="index">
          <img :src="img" style="width:auto; height:auto; max-width:100%; max-height: 100%;vertical-align: middle;">
        </el-carousel-item>
      </el-carousel>
    </el-dialog>
  </div>
</template>

<script>
  import { tween, styler, value, spring, easing } from 'popmotion'
  import ArrowBtn from '../../components/ArrowBtn'

  export default {
    name: 'Home',
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
      setTimeout(this.animate.bind(this))
    },
    methods: {
      showDialog (index) {
        this.dialogVisible = true
        setTimeout(() => this.$refs.carousel.setActiveItem(index))
      },
      animate () {
        this.showImgs()
        setTimeout(this.showMainBG.bind(this), 2000)
        setTimeout(this.showTop.bind(this), 2000)
        setTimeout(this.showBottom.bind(this), 2500)
        setTimeout(() => this.showArrow = true, 2500)
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
    }
  }
</script>

<style scoped lang="scss">
  .hide {
    opacity: 0;
  }

  .header {
    width: 51.87vw;
    height: auto !important;
    margin: 6.47vh auto 4.98vh;
  }

  .footer {
    padding: 0;
    width: 47.07vw;
    height: auto !important;
    margin: 3.65vh auto 7.3vh;
  }

  .main {
    padding: 0;
    overflow: hidden;
    vertical-align: middle;
    background-color: rgba(0, 0, 0, 0);
    img {
      opacity: 0;
      transform: scale(0);
      float: left;
      height: 16vh;
      vertical-align: middle;
    }

    img:nth-child(1) {
      width: 42.113vw;
    }
    img:nth-child(2) {
      width: 19.6vw;
      margin: 0 0.6vw;
    }
    img:nth-child(3) {
      width: 37.087vw;
    }
    img:nth-child(4) {
      width: 18.913vw;
      margin-right: 0.6vw;
    }
    img:nth-child(5) {
      width: 23.713vw;
      margin-right: 0.6vw;
    }
    img:nth-child(6) {
      width: 35.33vw;
      margin-right: 0.6vw;
    }
    img:nth-child(7) {
      width: 20.243vw;
    }
    img:nth-child(8) {
      width: 41.33vw;
    }
    img:nth-child(9) {
      width: 20.383vw;
      margin: 0 0.6vw;
    }
    img:nth-child(10) {
      width: 37.087vw;
    }
  }
</style>
