<template>
  <div class="Comments">
    <img style="width: 56.4vw;margin-top: 2vh;" src="../../assets/Comments/theme.png" alt="">
    <div class="rank-type">
      <div :class="{active: OrderBy===0}" @click="OrderBy=0">心意排行榜</div>
      <div :class="{active: OrderBy===1}" @click="OrderBy=1">最新上榜</div>
    </div>
    <div class="rankContent">
      <ul>
        <CommentItem v-for="Comment of Comments" v-bind="Comment" :OrderBy="OrderBy" :key="Comment.OpenId"/>
      </ul>
    </div>
    <div class="btnBox">
      <img class="" src="../../assets/Comments/button1.png" @click="follow">
      <img class="" src="../../assets/Comments/button2.png" @click="toPersonalInfo">
    </div>
  </div>
</template>

<script>
  import CommentItem from './CommentItem'

  export default {
    name: 'Comments',
    components: {CommentItem},
    data () {
      return {
        OrderBy: 0,
        OrderBy0: {
          PageIndex: 1,
          Comments: []
        },
        OrderBy1: {
          PageIndex: 1,
          Comments: []
        },
      }
    },
    created () {
      this.getComments()
    },
    computed: {
      Comments: {
        get () {
          return this['OrderBy' + this.OrderBy].Comments
        },
        set (val) {
          this['OrderBy' + this.OrderBy].Comments = val
        }
      },
      PageIndex: {
        get () {
          return this['OrderBy' + this.OrderBy].PageIndex
        },
        set (val) {
          this['OrderBy' + this.OrderBy].PageIndex = val
        }
      }
    },
    methods: {
      pullingUp () {
        this.PageIndex = 1
        this.Comments = []
        this.getComments()
      },
      pullingDown () {
        this.getComments()
      },
      getComments () {
        this.axios.post(
          '/api/activity/getuserlist',
          {OrderBy: this.OrderBy, PageIndex: this.PageIndex}
        ).then(res => {
          this.PageIndex += 1
          this.Comments.push(...res.data)
        })
      },
      toPersonalInfo () {
        this.$store.commit('moveTo', 7)
      },
      follow () {
        location.href = 'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzIwNDg0MTQ5OA==&scene=124#wechat_redirect'
      }
    }
  }
</script>

<style scoped lang="scss">
  .rank-type {
    font-size: 0;
    text-align: center;
    padding: 4vw 0;
    div {
      color: #fff;
      display: inline-block;
      font-size: 3.8vw;
      padding: 2vw 5vw;
      border: 1px solid #fff;
      width: 20vw;
    }
    .active {
      color: orange;
      background: #fff;
    }
  }

  .rankContent {
    height: 65vh;
    overflow: auto;
  }

  .Comments {
    background: url("../../assets/index/background.jpg") no-repeat;
    background-size: cover;
    overflow: hidden;
    height: 100vh;
  }

  .btnBox {
    position: absolute;
    bottom: 1.5vh;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    img {
      width: 36.27vw;
      vertical-align: middle;
    }
  }
</style>
