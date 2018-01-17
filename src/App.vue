<template>
  <div id="app">
    <MainFrame/>
  </div>
</template>

<script>
  import MainFrame from './pages/MainFrame'

  export default {
    name: 'app',
    components: {MainFrame},
    computed: {
      hasComment () {
        return this.$store.state.current > 6
      }
    },
    mounted () {
      const urlParams = location.search.slice(1).split('&').reduce((params, paramStr) => {
        const entry = paramStr.split('=')
        params[entry[0]] = entry[1]

        return params
      }, {})

      // const {appId, openId, openIdPk, nickName, headPic, timestamp, nonceStr, signature, step, self} = urlParams
      const {appId, openId, openIdPk, nickName, headPic, timestamp, nonceStr, signature, step, self} = {
        'openId': 'oGgAGv1Em7XBbl53CXY14VQ-gm1Y',
        'nickName': 'Melody.pp',
        'headPic': 'http://wx.qlogo.cn/mmopen/vi_32/BdJf1ofrOMtT7EmeiaoTUmPyGeLTv1bWjk49GuCWLaZhcoTIwuhPt4YbQA89VMfkGg0M2RfHjykKlWgiaztUjrtA/132',
        'appId': 'wx073d89db692f82e0',
        'timestamp': '1516259728',
        'nonceStr': '61U8bl5h',
        'signature': 'a93d6436e989ce26780324af151cb41aa9dbc11e',
        'step': '2',
        'self': 'False'
      }

      this.getLikeLogList(openId)
      this.configWX(appId, timestamp, nonceStr, signature)
      this.$store.commit('setUserInfo', {openId, nickName, headPic})
      this.$store.commit('setOpenIdPk', openIdPk)
      this.$store.commit('setStep', step)
      this.$store.commit('setSelf', self)
    },
    methods: {
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
      },
      getLikeLogList (openId) {
        this.axios.post('/api/activity/getlikeloglist', {openId}).then(res => {
          this.$store.commit('setLikeLog', res.data)
        })
      },
      getShareConfig () {
        return {
          title: this.getShareTitle(),
          link: this.getShareLink(),
          imgUrl: this.getShareImg(),
        }
      },
      getShareTitle () {
        return this.hasComment ? '给我投票' : '快来参加'
      },
      getShareLink () {
        return 'http://kj.century-galaxy.com/api/activity/index?hasComment=' + this.hasComment
      },
      getShareImg () {
        return this.hasComment ? 'http://geiwotoupiao.png' : 'http://kuailaicanjia.png'
      },
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
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
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

  .btn {
    width: 48.4vw;
    position: absolute;
    bottom: 1.7vh;
    left: 50%;
    transform: translateX(-50%);
  }

  .themeTxt {
    margin: 6.5vh auto 3vh;
  }

  .v-modal {
    opacity: .8;
  }

  .home-dialog {
    .el-dialog {
      background: transparent;
      .el-carousel__item {
        line-height: 25vh;
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
      color: #fff;
      padding: 10px;
    }
    .el-dialog__body {
      color: #fff;
      padding: 0 20px;
      max-height: 70vh;
      overflow: scroll;
      text-align: left;
    }
  }
</style>
