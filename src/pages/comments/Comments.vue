<template>
  <div class="Comments">
    <img style="width: 63.33vw;margin-top: 2vh;" src="../../assets/comments/theme.png" ref="theme">

    <div class="rank-type" ref="rankType">
      <div :class="{active: OrderBy===1}" @click="OrderBy=1">心意排行榜</div>
      <div :class="{active: OrderBy===0}" @click="OrderBy=0">最新上榜</div>
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

      <div class="rankContent" :style="{transform: `translate3d(0,${transformY}px,0)`}">
        <img v-if="isPullingDown" class="loading top" src="../../assets/loading.gif" alt="loading">
        <ul ref="ul" @touchmove="touchmove" @touchstart="touchstart">
          <CommentItem v-for="Comment of Comments" :key="Comment.OpenId"
                       v-bind="Comment" :OrderBy="OrderBy" @upvote="upvote"/>
        </ul>
        <img v-if="isPullingUp" class="loading bottom" src="../../assets/loading.gif" alt="loading">
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

  export default {
    name: 'Comments',
    props: ['moveIn'],
    components: {CommentItem},
    data () {
      return {
        isBusy: false,
        clientY: null,
        transformY: 0,
        isPullingUp: false,
        isPullingDown: false,
        selfInfo: {},
        OrderBy: 1,
        OrderBy0: {
          PageIndex: 1,
          Comments: []
        },
        OrderBy1: {
          PageIndex: 1,
          Comments: []
        },
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
      },
    },
    methods: {
      animate () {
        this.timeline = new TimelineMax({
          delay: 0.7,
          onComplete: () => {
          }
        })

        this.timeline
          .from(this.$refs.theme, 0.3, {autoAlpha: 0})
          .from(this.$refs.rankType, 0.3, {autoAlpha: 0})
          .from(this.$refs.rankContent, 0.4, {autoAlpha: 0})
          .from(this.$refs.btnBox, 0.5, {autoAlpha: 0}, '-=0.4')
      },
      touchstart () {
        this.clientY = this.getClientY(event)
      },
      touchmove (event) {
        if (this.isBusy) {
          return
        }

        const ul = this.$refs.ul
        const scrollTop = ul.scrollTop
        const maxScroll = this.getMaxScroll(ul)
        const clientY = this.getClientY(event)
        const deltaY = this.clientY - clientY

        if (deltaY < 0 && scrollTop === 0) {
          this.pullingDown()
        }

        if (deltaY > 0 && maxScroll === scrollTop) {
          this.pullingUp()
        }

        this.clientY += deltaY
      },
      getClientY (event) {
        return event.touches[0].clientY
      },
      getMaxScroll (el) {
        return el.scrollHeight - el.offsetHeight
      },
      pullingUp () {
        this.transformY = 30
        this.isBusy = true
        this.isPullingUp = true
        this.getComments()
      },
      pullingDown () {
        this.transformY = 30
        this.isBusy = true
        this.isPullingDown = true
        this.PageIndex = 1
        this.Comments = []
        this.getComments()
      },
      getComments () {
        this.axios.post(
          '/api/activity/getuserlist',
          {OrderBy: this.OrderBy, PageIndex: this.PageIndex}
        ).then(res => {
          this.transformY = 0
          this.isBusy = false
          this.isPullingUp = false
          this.isPullingDown = false
          this.PageIndex += 1
          this.Comments.push(...res.data)

          const self = res.data.find(item => item.OpenId === this.selfInfo.OpenId)
          self && (this.selfInfo.Rank = self.Rank)
        })
      },
      upvote (OpenId) {
        try {
          this.OrderBy0.Comments.find(item => item.OpenId === OpenId).LikeCount++
          this.OrderBy1.Comments.find(item => item.OpenId === OpenId).LikeCount++
        } catch (e) {}

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
      width: 30px;
      position: absolute;
      &.top {
        top: -30px
      }
      &.bottom {
        bottom: -30px
      }
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
    padding: 5vw 0 0 28vw;
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
      left: 16vw;
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
