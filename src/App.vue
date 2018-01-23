<template>
  <div id="app">
    <img class="logo left" src="./assets/logo1.png">
    <img class="logo right" src="./assets/logo2.png">
    <!--<audio>-->
    <!--<source src="horse.ogg" type="audio/ogg">-->
    <!--<source src="horse.mp3" type="audio/mpeg">-->
    <!--Your browser does not support the audio tag.-->
    <!--</audio>-->
    <MainFrame/>
  </div>
</template>

<script>
  import MainFrame from './pages/MainFrame'

  export default {
    name: 'app',
    components: {MainFrame},
    computed: {
      UserId () {
        return this.$store.state.UserId
      },
      Current () {
        return this.$store.state.Current
      },
      userInfo () {
        return this.$store.state.userInfo
      },
      hasComment () {
        return this.Current > 7
      },
    },
    created () {
      const urlParams = location.search.slice(1).split('&').reduce((params, paramStr) => {
        const entry = paramStr.split('=')
        params[entry[0]] = entry[1]

        return params
      }, {})

      const {OpenId, OpenIdPK, NickName, HeadPic, Step, Self} = urlParams
      // const {OpenId, OpenIdPK, NickName, HeadPic, Step, Self} = {
      //   'OpenId': 'oGgAGv1Em7XBbl53CXY14VQ-gm1Y',
      //   'NickName': 'Melody.pp',
      //   'HeadPic': 'http://wx.qlogo.cn/mmopen/vi_32/BdJf1ofrOMtT7EmeiaoTUmPyGeLTv1bWjk49GuCWLaZhcoTIwuhPt4YbQA89VMfkGg0M2RfHjykKlWgiaztUjrtA/132',
      //   'Step': '2',
      //   'Self': '1',
      //   'OpenIdPK': ''
      // }

      this.getSignature()
      this.getLikeLogList(OpenId)

      this.$store.commit('setUserInfo', {OpenId, NickName, HeadPic})
      this.$store.commit('setOpenIdPK', OpenIdPK)
      this.$store.commit('setStep', Step)
      this.$store.commit('setSelf', Self)
    },
    methods: {
      getSignature () {
        this.axios.post(
          '/api/activity/getshareconfig',
          {Url: location.href}
        ).then(({data: {AppId, Timestamp, NonceStr, Signature}}) => {
          this.configWX(AppId, Timestamp, NonceStr, Signature)
        })
      },
      configWX (appId, timestamp, nonceStr, signature) {
        const wx = require('weixin-js-sdk')

        wx.config({
          appId,
          timestamp,
          nonceStr,
          signature,
          debug: false,
          jsApiList: [
            'onMenuShareTimeline',
            'onMenuShareAppMessage',
          ]
        })

        wx.ready(() => {
          wx.onMenuShareTimeline(this.getShareConfig())
          wx.onMenuShareAppMessage(this.getShareConfig())
        })

        wx.error(err => console.log(err))
      },
      getLikeLogList (OpenId) {
        this.axios.post('/api/activity/getlikeloglist', {OpenId}).then(res => {
          this.$store.commit('setLikeLog', res.data)
        })
      },
      getShareConfig () {
        return {
          title: this.getShareTitle(),
          link: this.getShareLink(),
          imgUrl: this.getShareImg(),
          desc: this.getDesc(),
        }
      },
      getShareTitle () {
        return this.hasComment ? `我是第${this.UserId}位不能回家过年的厨师，快来为我助力，赢得美极暖心好礼！` : '年味，有你，美极了！888份好礼，送给每个值得尊敬的厨师！'
      },
      getShareLink () {
        return 'http://kj.century-galaxy.com/api/activity/index?OpenIdPK=' + this.$store.state.userInfo.OpenId
      },
      getShareImg () {
        return this.hasComment ? this.userInfo.HeadPic : location.origin + require('./assets/infoCollect/familyShare.jpg')
      },
      getDesc () {
        return this.hasComment ? '年味，有你，美极了！888份美极暖心年货，送给春节依然坚守在岗位上的大厨！' : '年味，有你，美极了！'
      }
    },
    watch: {
      hasComment () {
        const wx = require('weixin-js-sdk')
        wx.onMenuShareTimeline(this.getShareConfig())
        wx.onMenuShareAppMessage(this.getShareConfig())
      }
    }
  }
</script>

<style lang="scss">
  body {
    margin: 0;
    padding: 0;
    overflow: hidden;

    /*Avoid flicker on slides transitions for mobile phones #336 */
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  #app {
    color: #fff;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    text-align: center;
    font-family: 'Microsoft YaHei', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  img {
    width: 100%;
  }

  form {
    margin-top: 7vh;
  }

  canvas {
    display: none;
  }

  .clearfix {
    overflow: hidden;
    _zoom: 1;
    &:after {
      content: ".";
      display: block;
      height: 0;
      clear: both;
      visibility: hidden
    }
  }

  .logo {
    position: absolute;
    top: 0;
    z-index: 100;
    &.left {
      left: 0;
      width: 8vw;
    }
    &.right {
      right: 0;
      width: 10.8vw;
    }
  }

  .btn {
    width: 48.4vw;
    position: absolute;
    bottom: 2vh;
    left: 50%;
    transform: translateX(-50%);
  }

  .title {
    margin: 5.47vh auto 0;
  }

  .themeTxt {
    margin: 6.5vh auto 3vh;
  }

  .v-modal {
    opacity: .9 !important;
  }

  .home-dialog {
    .el-dialog {
      background: transparent;
      .el-carousel__item {
        line-height: 25vh;
        .el-carousel__mask {
          width: auto !important;
        }
      }
      .el-carousel__item--card {
        text-align: center;
      }
    }
  }

  .el-input input {
    border: none !important;
    border-bottom: 1px solid #fff !important;
    width: 80vw !important;
    background-color: transparent !important;
    color: #fff !important;
    height: 8vh;
    font-size: 3.9vw;
    border-radius: unset;
  }

  .el-cascader__label {
    color: #fff !important;
    line-height: 8vh;
  }

  .agreement, .activityRule {
    background: url("./assets/background.png") no-repeat;
    position: absolute;
    height: 100vh;
    width: 100vw;
    .el-dialog {
      background: url("./assets/background.png") no-repeat;
      margin: 10vh 5vw !important;
      height: 80vh;
      width: 90vw;
    }
    .el-dialog__header {
      color: #e5d918;
      padding: 10px;
      letter-spacing: 3px;
      text-align: center;
      font-size: 5vw;
    }
    .el-dialog__body {
      color: #fff;
      padding: 0 20px;
      max-height: 70vh;
      text-align: left;
      overflow: auto;
      .content {
        text-align: left;
        max-height: 63vh;
        overflow: auto;
        margin-bottom: 2vh;
      }
      button {
        border: none;
        outline: none;
        padding: 2vw 7vw;
        background: #ffc702;
      }
    }

  }

  .share-dialog {
    background: rgba(0, 0, 0, .7);
    position: absolute;
    height: 100vh;
    width: 100vw;
    text-align: right;
    .el-dialog {
      width: 100vw;
      margin: 0 !important;
    }
    .el-dialog__header, .el-dialog__body {
      padding: 0;
    }

    .share-img {
      top: 0;
      right: 7vw;
      width: 19.07vw;
      position: absolute;
    }
  }

</style>
