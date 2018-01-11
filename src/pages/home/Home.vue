<template>
  <el-container>
    <el-header class="header">
      <img src="../../assets/index/topText.png" alt="">
    </el-header>

    <el-main class="main clearfix">
      <img v-for="(img, index) of imgs" :src="img" :key="index" @click="showDialog(index)">
    </el-main>

    <el-footer>
      <img src="../../assets/index/bottomText.png" alt="">
    </el-footer>

    <ArrowBtn/>

    <el-dialog :visible.sync="dialogVisible" top="30vh" width="100%" :append-to-body="true" :show-close="false">
      <el-carousel ref="carousel" type="card" height="20vh" indicator-position="none">
        <el-carousel-item v-for="(img, index) of imgs" :key="index">
          <img :src="img" alt="">
        </el-carousel-item>
      </el-carousel>
    </el-dialog>
  </el-container>
</template>

<script>
  import { tween, styler, value, spring } from 'popmotion'
  import ArrowBtn from '../../components/ArrowBtn'

  export default {
    name: 'Home',
    data () {
      return {
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
      this.showImgs()
    },
    methods: {
      showDialog (index) {
        this.dialogVisible = true
        setTimeout(() => this.$refs.carousel.setActiveItem(index))
      },

      showImgs () {
        const $imgs = Array.from(document.querySelectorAll('.main>img'))
        $imgs.forEach((img, i) => setTimeout(() => this.showImg(img), i * 200))
      },

      showImg (img) {
        const imgStyler = styler(img)
        const imgAni = value({scale: 1.2}, imgStyler.set)

        tween({
          from: {opacity: 0, scale: 0},
          to: {opacity: 1, scale: 1.2},
        }).start({
          update: imgStyler.set,
          complete () {
            spring({
              velocity: imgAni.getVelocity(),
              from: imgAni.get(),
              to: {scale: 1},
            }).start(imgAni)
          }
        })
      }
    },
    components: {
      ArrowBtn
    }
  }
</script>

<style scoped lang="scss">
  .header {
    width: 75vw;
    height: auto !important;
    margin: 6.47vh auto 4.98vh;
  }

  .el-footer {
    height: auto !important;
    width: 38.8vw;
    padding: 0;
    margin: 3.65vh auto 7.3vh;
  }

  .main {
    padding: 0;
    background-color: #fff;
    overflow: hidden;
    vertical-align: middle;
    img {
      float: left;
      height: 16vh;
      opacity: 0;
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
