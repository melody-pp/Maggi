<template>
  <div class="Comments">
    <img style="width: 63.33vw;margin-top: 2vh;" src="../../assets/comments/theme.png" ref="theme">

    <div class="rank-type" ref="rankType">
      <div :class="{active: OrderBy===1}" @click="changeOrderBy(1)">心意排行榜</div>
      <div :class="{active: OrderBy===0}" @click="changeOrderBy(0)">最新上榜</div>
    </div>
    <div ref="rankContent">
      <div :class="['self', {hideRank}]">
        <span class="self-ranking">{{selfInfo.Rank}}</span>
        <img class="headerPic" :src="selfInfo.HeadPic">
        <div class="right">
          <span>获赞总数</span>
          <span style="font-size: 8vw;">{{selfInfo.LikeCount}}</span>
          <span style="margin-left: 4vw;">今日获赞</span>
          <span style="font-size: 5vw;font-weight: 100;">{{selfInfo.TodayLikeCount}}</span>
        </div>
      </div>

      <div class="rankContent">
        <img v-show="isBusy" class="loading" src="../../assets/loading.gif" alt="loading">
        <ul ref="ul">
          <CommentItem v-for="Comment of Comments" :key="Comment.OpenId"
                       v-bind="Comment" :OrderBy="OrderBy" @upvote="upvote"/>
        </ul>
      </div>
    </div>

    <div class="btnBox" ref="btnBox">
      <img class="" src="../../assets/comments/button2.png" @click="moveUp">
    </div>
  </div>
</template>

<script>
  import { TimelineMax } from 'gsap'
  import CommentItem from './CommentItem'
  import { fitRank } from '../../utils/utils'

  export default {
    name: 'Comments',
    props: ['moveIn'],
    components: {CommentItem},
    data () {
      return {
        isBusy: false,
        OrderBy: 1,
        Comments0: [],
        Comments1: [],
        selfInfo: {},
        timeline: null,
      }
    },
    created () {
      this.getComments()
    },
    computed: {
      hideRank () {
        return this.OrderBy === 0
      },
      Comments () {
        return this['Comments' + this.OrderBy]
      },
    },
    methods: {
      changeOrderBy (order) {
        this.isBusy || (this.OrderBy = order)
      },
      animate () {
        this.timeline = new TimelineMax({delay: 0.7,})

        this.timeline
          .from(this.$refs.theme, 0.3, {autoAlpha: 0})
          .from(this.$refs.rankType, 0.3, {autoAlpha: 0})
          .from(this.$refs.rankContent, 0.4, {autoAlpha: 0})
          .from(this.$refs.btnBox, 0.5, {autoAlpha: 0}, '-=0.4')
      },
      getComments () {
        this.isBusy = true
        this.axios.post(
          '/api/activity/getuserlist',
          {OrderBy: this.OrderBy, PageIndex: 1}
        ).then(res => {
          this['Comments' + this.OrderBy] = res.data
          this.$nextTick(() => this.isBusy = false)
        })
      },
      upvote (OpenId) {
        const item0 = this.Comments0.find(item => item.OpenId === OpenId)
        const item1 = this.Comments1.find(item => item.OpenId === OpenId)

        if (item0) {
          item0.LikeCount++
        }

        if (item1) {
          item1.LikeCount++
          this.Comments1 = fitRank(this.Comments1, item1)
          this.selfInfo.Rank = this.Comments1.find(item => item.OpenId === this.selfInfo.OpenId).Rank
        }

        if (OpenId === this.selfInfo.OpenId) {
          this.selfInfo.LikeCount++
          this.selfInfo.TodayLikeCount++
        }
      },
      moveUp () {
        this.$store.commit('moveUp')
      },
      getSelfInfo () {
        this.axios.post(
          '/api/activity/getuser',
          {OpenId: this.$store.state.userInfo.OpenId}
        ).then(res => this.selfInfo = res.data)
      }
    },
    watch: {
      OrderBy () {
        setTimeout(() => {
          this.Comments.length || this.getComments()
        })
      },
      moveIn (newVal) {
        if (newVal) {
          this.getSelfInfo()
          this.animate()
        }
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
      font-size: 3.9vw;
      padding: 1.5vw 8vw;
      border: 1px solid #fff;
      width: 20vw;
    }
    .active {
      color: orange;
      background: #fff;
    }
  }

  .rankContent {
    height: 50vh;
    overflow: visible;
    position: relative;
    transition: all 700ms;
    .loading {
      width: 12vw;
    }
    > ul {
      height: 50vh;
      overflow: auto;
      padding-left: 0;
    }
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
      width: 48.4vw;
      vertical-align: middle;
    }
  }

  .right {
    padding: 0 5vw 4vh 0;
    border-bottom: 1px solid #444;
  }

  .self {
    color: #fff;
    display: block;
    font-size: 3.4vw;
    text-align: left;
    position: relative;
    padding: 5vw 0 0 24vw;
    .self-ranking {
      font-size: 16px;
      font-weight: 300;
      margin-right: 1vw;
      position: absolute;
      top: 5.5vh;
      left: 5vw;
    }

    .headerPic {
      top: 7vw;
      left: 12vw;
      position: absolute;
      width: 10vw;
      border-radius: 50%;
    }

    &.hideRank {
      padding-left: 17vw;
      .self-ranking {
        display: none;
      }
      .headerPic {
        left: 4vw;
      }
    }
  }
</style>
