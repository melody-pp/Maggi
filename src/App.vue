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
        })
      },
      getUserInfo (openid, access_token) {
        const url = 'https://api.weixin.qq.com/sns/userinfo' + getParamStr({openid, access_token, lang: 'zh_CN'})
        this.axios.get('https://bird.ioliu.cn/v2', {params: {url}}).then(res => {
          window.userInfo = res.data
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
  }
</style>
