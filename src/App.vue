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
        return this.$store.state.Current > 6
      }
    },
    created () {
      const urlParams = location.search.slice(1).split('&').reduce((params, paramStr) => {
        const entry = paramStr.split('=')
        params[entry[0]] = entry[1]

        return params
      }, {})

      // const {AppId, OpenId, OpenIdPk, NickName, HeadPic, Timestamp, NonceStr, Signature, Step, Self} = urlParams
      const {AppId, OpenId, OpenIdPk, NickName, HeadPic, Timestamp, NonceStr, Signature, Step, Self} = {
        'OpenId': 'oGgAGv-NzCUyRqCV-ZfWSH3MKUWg',
        'NickName': '%e7%8e%8b%e8%b7%83',
        'HeadPic': 'http://wx.qlogo.cn/mmopen/vi_32/ia76LHl9fiaXaIPiblzzhRZAb3yb5kNTRvKsz2cLU5Q3G1MIktasPuua1qFCMVImxsmq7CZBp2VxkOic6ibGU1DfJsQ/132',
        'AppId': 'wx073d89db692f82e0',
        'Timestamp': '1516303584',
        'NonceStr': '47u4LrIQ',
        'Signature': '210b765abbaa01785fb6fa084fc0c043c330a352',
        'Step': '1',
        'Self': 'False'
      }

      this.getLikeLogList(OpenId)
      this.configWX(AppId, Timestamp, NonceStr, Signature)
      this.$store.commit('setUserInfo', {OpenId, NickName, HeadPic})
      this.$store.commit('setOpenIdPk', OpenIdPk)
      this.$store.commit('setStep', Step)
      this.$store.commit('setSelf', Self)
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
        }
      },
      getShareTitle () {
        return this.hasComment ? '给我投票' : '快来参加'
      },
      getShareLink () {
        return 'http://kj.century-galaxy.com/api/activity/index?OpenIdPk=' + this.$store.state.OpenId
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

  .title {
    margin: 5.47vh auto 0;
    width: 65.5%;
  }
</style>
