<template>
  <li :class="['Comment',{noNum: OrderBy===1}]">
    <template v-if="OrderBy===0">
      <img v-if="Rank<=3" class="ranking-img" :src="imgUrls[Rank-1]">
      <span v-else class="ranking">{{Rank}}</span>
    </template>

    <img :src="HeadPic" alt="头像">

    <div class="right">
      <div class="content">
        {{CommentContent}}
      </div>

      <template v-if="OrderBy===0">
        <div class="info">
          <svg class="liked" @touchstart="upvote" t="1515995941008" viewBox="0 0 1024 1024" version="1.1"
               xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
               width="4.6vw" height="4vh" :fill="color">
            <path
              d="M18.881772 480.019692l0 384C18.881772 916.795077 60.07808 945.230769 97.651003 945.230769l78.769231 0L176.420234 393.846154 97.651003 393.846154C60.07808 393.846154 18.881772 427.165538 18.881772 480.019692zM940.481772 575.960615c68.292923 0 102.4-191.960615 0-191.960615L735.681772 384C940.481772 64.039385 792.23808 0 735.681772 0c0 155.884308-234.653538 327.837538-480.492308 405.504l0 526.099692C506.227003 961.614769 424.464542 1024 701.574695 1024c68.292923 0 136.507077-31.980308 136.507077-96.019692 68.292923 0 102.4-159.980308 68.292923-159.980308C974.588849 768 1018.384542 575.960615 940.481772 575.960615z"></path>
          </svg>
          <span class="LikesNum">{{LikeCount}}</span>
        </div>
      </template>

      <template v-if="OrderBy===1">
        <div class="info">
          <span>{{createTimeStr}}</span>
        </div>
      </template>
    </div>
  </li>
</template>

<script>
  import { showUpvote, sample } from '../../utils/utils'

  const colors = ['#3b8aef', '#bb1687', '#5ccca3', '#dd840e', '#3c10bb', '#b998dd', '#b7bb4f', '#cc070f', '#87dda0']

  export default {
    name: 'Comment-item',
    props: ['OrderBy', 'Rank', 'OpenId', 'NickName', 'HeadPic', 'CommentContent', 'createTimeStr', 'LikeCount'],
    data () {
      return {
        clickNum: 0,
        isBusy: false,
        imgUrls: [
          require('../../assets/Comments/NO1.png'),
          require('../../assets/Comments/NO2.png'),
          require('../../assets/Comments/NO3.png'),
        ]
      }
    },
    computed: {
      color () {
        return this.like ? '#cc9119' : '#ccc'
      },
      // 用户是否给此条留言点过赞
      like () {
        return this.$store.state.LikeLog.find(item => item.OpenId === this.OpenId)
      },
      // 用户总共点过几个赞
      liked () {
        return this.$store.state.LikeLog.reduce((num, item) => num + item.LikeCount, 0)
      },
      // 用户所有的点赞信息
      Likes () {
        return this.$store.state.LikeLog
      },
      userOpenId () {
        return this.$store.state.userInfo.OpenId
      }
    },
    methods: {
      updateLikeLog () {
        if (this.isBusy) {
          return
        }

        const LikeCount = this.clickNum

        this.clickNum = 0
        this.isBusy = true
        this.axios.post('/api/activity/like', {
          LikeCount,
          OpenId: this.userOpenId,
          OpenIdPk: this.OpenId
        }).then(({data: {errcode, errmsg}}) => {
          if (errcode === 0) {
            return this.$message.error(errmsg)
          }

          this.isBusy = false
          this.clickNum && this.updateLikeLog()
        })
      },
      upvote (event) {
        if (this.liked < 10 && this.openId !== this.userOpenId) {
          showUpvote(event, sample(colors))

          this.clickNum++
          this.LikeCount++
          this.$store.commit('upVote', this.OpenId)
          this.updateLikeLog()
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .Comment {
    color: #fff;
    display: block;
    font-size: 3.4vw;
    text-align: left;
    position: relative;
    padding: 5vw 0 0 24vw;

    .content {
      transition: all 600ms;
    }

    &.noNum {
      padding-left: 17vw;
      > img {
        left: 4vw;
      }
    }
    > img {
      top: 5vw;
      left: 12vw;
      position: absolute;
      width: 10vw;
      border-radius: 50%;
      transition: all 600ms;
    }

    .ranking-img {
      width: 4.8vw;
      left: 4vw;
      top: 3.5vh;
    }
  }

  .right {
    padding: 0 5vw 1vw 0;
    border-bottom: 1px solid #444;
  }

  .ranking {
    color: orange;
    font-size: 16px;
    font-style: italic;
    font-weight: 300;
    margin-right: 1vw;
    position: absolute;
    top: 4.5vh;
    left: 5vw;
  }

  .info {
    text-align: right;
    margin: 2px 0;

    .liked {
      width: 4.6vw;
      vertical-align: -6px;
    }
    .LikesNum {
      display: inline-block;
      width: 8vw;
      text-align: center;
    }
  }
</style>
