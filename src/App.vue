<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app',
    mounted () {
      const {openid, nickname, headimgurl, timestamp, nonceStr, signature} = this.$route.query

      this.configWX(timestamp, nonceStr, signature)
      window.userInfo = {openid, nickname, headimgurl}
    },
    methods: {
      configWX (timestamp, nonceStr, signature) {
        const wx = require('weixin-js-sdk')
        const appId = 'wx073d89db692f82e0'

        wx.config({
          debug: false, // 调试模式
          appId, // 必填，公众号的唯一标识
          timestamp, // 必填，生成签名的时间戳
          nonceStr, // 必填，生成签名的随机串
          signature,// 必填，签名
          jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage'] // 必填，需要使用的JS接口列表
        })

        wx.ready(() => {
          // 分享到朋友圈
          wx.onMenuShareTimeline({
            title: '', // 分享标题
            link: '', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: '', // 分享图标
            success () {
              // 用户确认分享后执行的回调函数
            },
            cancel () {
              // 用户取消分享后执行的回调函数
            }
          })

          // 分享给朋友
          wx.onMenuShareAppMessage({
            title: '', // 分享标题
            desc: '', // 分享描述
            link: '', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: '', // 分享图标
            type: '', // 分享类型,music、video或link，不填默认为link
            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            success () {
              // 用户确认分享后执行的回调函数
            },
            cancel () {
              // 用户取消分享后执行的回调函数
            }
          })
        })
      }
    }
  }
</script>

<style lang="scss">
  body {
    margin: 0;
    padding: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #fff;
  }

  img {
    width: 100%;
  }

  form {
    margin-top: 7vh;
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
