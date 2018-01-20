<template>
  <div>
    <div class="header">
      <img ref="topImg" src="../../assets/index/top_pic.png">
    </div>

    <div ref="main" class="main clearfix">
      <img v-for="(img, index) of imgs" :src="img" :key="index" @click="showDialog(index)">
    </div>

    <div class="footer">
      <img ref="bottomImg" src="../../assets/index/bom_pic.png">
    </div>

    <ArrowBtn v-show="showArrow"/>

    <el-dialog class="home-dialog" top="30vh" width="100%"
               :visible.sync="dialogVisible" :append-to-body="true" :show-close="false">
      <el-carousel ref="carousel" type="card" height="25vh" indicator-position="none" :interval="2000" arrow="never">
        <el-carousel-item v-for="(img, index) of imgs" :key="index">
          <img :src="img" style="width:auto; height:auto; max-width:100%; max-height: 100%;vertical-align: middle;">
        </el-carousel-item>
      </el-carousel>
    </el-dialog>
  </div>
</template>

<script>
  import ArrowBtn from '../../components/ArrowBtn'

  export default {
    name: 'Home',
    components: {ArrowBtn},
    data () {
      return {
        showArrow: true,
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
    methods: {
      showDialog (index) {
        this.dialogVisible = true
        setTimeout(() => this.$refs.carousel.setActiveItem(index))
      }
    }
  }
</script>

<style scoped lang="scss">
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
