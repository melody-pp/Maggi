<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  // 这里根据实际的公众号信息填写
  const appid = 'wx073d89db692f82e0'
  const secret = 'ba696d051d0ec2da5a0d4cca9727f2a0'
  const grant_type = 'authorization_code'
  const getParamStr = params => '?' + Object.keys(params).map(key => `${key}=${params[key]}`).join('&')

  export default {
    name: 'app',
    created () {
      let code = this.$route.query.code

      /*if (code) {
        this.getOpenId(code)
      } else {
        location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize'
          + getParamStr({appid, redirect_uri: location.href, response_type: 'code', scope: 'snsapi_userinfo'})
          + '#wechat_redirect'
      }*/
    },
    methods: {
      getOpenId (code) {
        const url = 'https://api.weixin.qq.com/sns/oauth2/access_token' + getParamStr({appid, secret, code, grant_type})
        this.axios.get('https://bird.ioliu.cn/v2', {params: {url}}).then(res => {
          this.getUserInfo(res.data.openid, res.data.access_token)
          this.getJsapiTicket(res.data.access_token)
        })
      },
      getUserInfo (openid, access_token) {
        const url = 'https://api.weixin.qq.com/sns/userinfo' + getParamStr({openid, access_token, lang: 'zh_CN'})
        this.axios.get('https://bird.ioliu.cn/v2', {params: {url}}).then(res => {
          window.userInfo = res.data
          console.log(res.data)
        })
      },
      getJsapiTicket (access_token) {
        const url = 'https://api.weixin.qq.com/cgi-bin/ticket/getticket' + getParamStr({access_token, type: 'jsapi'})
        this.axios.get('https://bird.ioliu.cn/v2', {params: {url}}).then(res => {
          console.log(res.data.ticket)
        })
      },
      configWx (timestamp, nonceStr, signature) {
        // 配置微信jsSDK，用户分享至朋友圈或分享给朋友时的展示形式，参数应从后端获取
        const wx = require('weixin-js-sdk')

        wx.config({
          debug: false, // 调试模式
          appId: appid, // 必填，公众号的唯一标识
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
    bottom: 10vh;
    left: 50%;
    transform: translateX(-50%);
  }

  .themeTxt {
    margin: 6.5vh auto 3vh;
  }

  .el-input input {
    border: none !important;
    border-bottom: 1px solid #fff !important;
    width: 80vw !important;
    background-color: transparent !important;
    color: #fff !important;
    height: 8vh;
    font-size: 3.9vw;
  }

  .el-cascader__label {
    color: #fff !important;
  }

  form {
    margin-top: 7vh;
  }

  .el-message-box {
    width: 80vw;
    height: 74vh;
    margin-top: 3vh;
    background-color: rgba(255, 255, 255, 0.6);
    i.el-icon-close::before {
      background: url("./assets/leaveInfo/close.png") no-repeat 0 0;
      background-size: 6.67vw 0.08vh;
      width: 6.67vw;
      height: 0.08vh;
    }
  }
</style>
