<template>
  <div class="comments">
    <img style="width: 56.4vw;margin-top: 2vh;" src="../../assets/comments/theme.png" alt="">
    <div class="rank-type">
      <div :class="{active: orderBy===0}" @click="orderBy=0">心意排行榜</div>
      <div :class="{active: orderBy===1}" @click="orderBy=1">最新上榜</div>
    </div>
    <div class="rankContent">
      <ul>
        <CommentItem v-for="comment of comments" v-bind="comment" :orderBy="orderBy" :key="comment.openId"/>
      </ul>
    </div>
    <div class="btnBox">
      <img class="" src="../../assets/comments/button1.png" @click="">
      <img class="" src="../../assets/comments/button2.png" @click="toPersonalInfo">
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import CommentItem from './CommentItem'

  export default {
    name: 'comments',
    components: {CommentItem},
    data () {
      return {
        orderBy: 0,
        orderBy0: {
          pageIndex: 1,
          comments: []
        },
        orderBy1: {
          pageIndex: 1,
          comments: []
        },
      }
    },
    mounted () {
      new BScroll('.rankContent', {
        pullUpLoad: true,
        pullDownRefresh: true,
        pullingUp: this.pullingUp.bind(this),
        pullingDown: this.pullingDown.bind(this)
      })
      this.getComments()
    },
    computed: {
      comments: {
        get () {
          return this['orderBy' + this.orderBy].comments
        },
        set (val) {
          this['orderBy' + this.orderBy].comments = val
        }
      },
      pageIndex: {
        get () {
          return this['orderBy' + this.orderBy].pageIndex
        },
        set (val) {
          this['orderBy' + this.orderBy].pageIndex = val
        }
      }
    },
    methods: {
      pullingUp () {
        this.pageIndex = 1
        this.comments = []
        this.getComments()
      },
      pullingDown () {
        this.getComments()
      },
      getComments () {
        this.axios.post(
          '/api/activity/getuserlist',
          {orderBy: this.orderBy, pageIndex: this.pageIndex}
        ).then(res => {
          this.pageIndex += 1
          this.comments.push(...res.data)
        })
      },
      toPersonalInfo () {
        this.$store.commit('moveTo', 7)
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

  .comments {
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
