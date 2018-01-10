<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  // 这里根据实际的公众号信息填写
  /*const appid = ''
  const secret = ''
  const grant_type = 'authorization_code'

  export default {
    name: 'app',
    created() {
      let code = this.$route.query.code

      if (code) {
        this.getOpenId(code)
      } else {
        location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${location.href}&response_type=code&scope=snsapi_base#wechat_redirect`
      }
    },
    methods: {
      getOpenId(code) {
        this.axios.get(
          'https://api.weixin.qq.com/sns/oauth2/access_token',
          {params: {appid, secret, code, grant_type}}
        ).then(res => {
          window.openid = res.data.openid
          window.access_token = res.data.access_token
        })
      }
    }
  }*/
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #fff;
    margin-top: 60px;
  }
  img {
    width: 100%;
  }

  .clearfix:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden
  }

  .clearfix {
    overflow: hidden;
    _zoom: 1;
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

</style>
