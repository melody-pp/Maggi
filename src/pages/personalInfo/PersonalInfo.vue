<template>
  <div class="personalInfo">
    <div>
      <div class="themeTxt clearfix" ref="themeTxt">
        <img class="theme" src="../../assets/personalInfo/theme.png">
        <span class="num">{{UserId}}</span>
        <img class="theme1" src="../../assets/personalInfo/theme1.png">
      </div>

      <div class="theme2" ref="theme2">
        <img src="../../assets/personalInfo/theme2.png">
      </div>
    </div>

    <div class="headPortraitBox">
      <img class="headPortrait" :src="HeadPic" ref="headPortrait">
      <span class="like" ref="like">
        <svg class="liked" @touchstart="upvote" t="1515995941008" viewBox="0 0 1024 1024" version="1.1"
             xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
             width="5vw" height="4vh" :fill="color">
          <path
              d="M18.881772 480.019692l0 384C18.881772 916.795077 60.07808 945.230769 97.651003 945.230769l78.769231 0L176.420234 393.846154 97.651003 393.846154C60.07808 393.846154 18.881772 427.165538 18.881772 480.019692zM940.481772 575.960615c68.292923 0 102.4-191.960615 0-191.960615L735.681772 384C940.481772 64.039385 792.23808 0 735.681772 0c0 155.884308-234.653538 327.837538-480.492308 405.504l0 526.099692C506.227003 961.614769 424.464542 1024 701.574695 1024c68.292923 0 136.507077-31.980308 136.507077-96.019692 68.292923 0 102.4-159.980308 68.292923-159.980308C974.588849 768 1018.384542 575.960615 940.481772 575.960615z"></path>
        </svg>
      </span>
      <span class="likeNum" ref="likeNum">{{LikeCount}}</span>
    </div>

    <div class="NickName" ref="nickName">{{NickName}}</div>

    <div class="remark" ref="remark">
      {{CommentContent}}
    </div>

    <img v-if="isSelf" class="theRules" ref="theRules" src="../../assets/prize/The-rules.png" @click="showAgreeDialog">

    <div class="btnBox" ref="btnBox">
      <template v-if="isSelf">
        <img @click="showShareDialog" src="../../assets/personalInfo/button.png">
        <img v-if="step===3" src="../../assets/personalInfo/button2.png" @click="moveDown">
        <img v-else src="../../assets/leaveInfo/Save-the-view.png" @click="showDialogEWM" style="width: 43vw;">
      </template>
      <template v-else>
        <img @touchstart="upvote($event, true)" src="../../assets/personalInfo/To-view.png">
        <img @click="toIndex" src="../../assets/personalInfo/want-to-express.png">
      </template>
    </div>

    <el-dialog class="agreement" :visible.sync="showAgree" :modal="false" :show-close="false" :append-to-body="true">
      <span slot="title" class="dialog-title">活动规则</span>
      <div style="text-align: center">
        <div class="content">
          <img class="close" src="../../assets/leaveInfo/close.png" @click="showAgree=false">
          <p>1. 活动时间：2018年2月9日21时-2018年2月18日24时。</p>
          <p>2. 本活动仅限雀巢专业餐饮大厨精英荟微信公众账号粉丝参与，最终获奖名单将于2018年2月23日在微信公众号公布。</p>
          <p>3. 获奖者中奖后，需将邮寄信息提供给微信公众号客服，以便派发奖品。</p>
          <p>4. 每个微信账号仅有一次输入内容的机会，一旦提交，不可更改。</p>
          <p>5. 活动期间，每人每日投票上限为10票，可为同一参与者投票，也可为不同参与者投票。</p>
          <p>6. 本活动所有奖品仅发放给专业厨师，雀巢专业餐饮有权在核实身份信息后，取消非专业厨师者的获奖资格。</p>
          <p>7. 本活动严禁刷票，若有违反者，雀巢专业餐饮有权立刻取消其参与资格。</p>
          <p>8. 本活动解释权归雀巢专业餐饮所有。</p>
        </div>
        <button @click="showAgree=false">已了解活动规则</button>
      </div>
    </el-dialog>

    <el-dialog class="share-dialog" :visible.sync="showShare" :modal="false" :show-close="false" :append-to-body="true">
      <img class="share-img" src="../../assets/personalInfo/center.png" alt="分享">
    </el-dialog>
    <el-dialog class="erweima" title="长按识别公众号二维码" :visible.sync="dialogVisible" width="90%"
               center :show-close="false" :append-to-body="true">
      <img src="../../assets/gongzhonghao.jpg">
      <button @click="skip">已关注公众号，查看我的排行</button>
    </el-dialog>
  </div>
</template>
<script>
  import { TimelineMax, Elastic } from 'gsap'
  import { showUpvote, sample, showFireworks } from '../../utils/utils'

  const colors = ['#3b8aef', '#bb1687', '#5ccca3', '#dd840e', '#3c10bb', '#b998dd', '#b7bb4f', '#cc070f', '#87dda0']

  export default {
    props: ['moveIn'],
    data () {
      return {
        showShare: false,
        showAgree: false,
        dialogVisible: false,
        UserId: 0,
        NickName: '',
        HeadPic: '',
        CommentContent: '',
        LikeCount: 0,
        clickNum: 0,
        isBusy: false,
        timeline: null,
      }
    },
    mounted () {
      this.getUser()
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

      OpenId () {
        return this.$store.state.OpenIdPK || this.userOpenId
      },

      userOpenId () {
        return this.$store.state.userInfo.OpenId
      },

      isSelf () {
        return this.$store.state.Self === '1'
      },

      step () {
        return +this.$store.state.Step
      }
    },
    methods: {
      animate () {
        this.timeline = new TimelineMax({
          delay: 0.7,
          onComplete: () => {
          }
        })

        this.timeline
          .from(this.$refs.headPortrait, 0.3, {autoAlpha: 0, scale: 0})
          .to(this.$refs.headPortrait, 0.3, {autoAlpha: 1, scale: 1.2})
          .to(this.$refs.headPortrait, 0.3, {autoAlpha: 1, scale: 1})
          .from(this.$refs.nickName, 0.5, {autoAlpha: 0}, '-=0.9')
          .from(this.$refs.remark, 0.5, {autoAlpha: 0}, '-=0.9')
          .from(this.$refs.themeTxt, 0.3, {autoAlpha: 0}, '-=0.9')
          .from(this.$refs.theme2, 0.3, {autoAlpha: 0}, '-=0.9')
          .from(this.$refs.like, 0.5, {autoAlpha: 0})
          .from(this.$refs.likeNum, 0.5, {autoAlpha: 0}, '-=0.5')

        if (this.isSelf) {
          this.timeline.from(this.$refs.theRules, 0.5, {autoAlpha: 0}, '-=0.9')
        }

        this.timeline.from(this.$refs.btnBox, 0.5, {autoAlpha: 0}, '-=0.9')
      },
      showAgreeDialog () {
        this.showAgree = true
      },
      moveDown () {
        this.$store.commit('moveDown')
      },
      skip () {
        this.moveDown()
        this.dialogVisible = false
      },
      getUser () {
        this.axios.post(
          '/api/activity/getuser',
          {OpenId: this.OpenId}
        ).then(res => {
          const data = res.data

          this.$store.commit('setUserId', data.UserId)
          this.UserId = data.UserId
          this.NickName = data.NickName
          this.HeadPic = data.HeadPic
          this.CommentContent = data.CommentContent
          this.LikeCount = data.LikeCount
        })
      },
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
          OpenIdPK: this.OpenId
        }).then(({data: {errcode, errmsg}}) => {
          if (errcode === 1) {
            return this.$message.error(errmsg)
          }

          this.isBusy = false
          this.clickNum && this.updateLikeLog()
        })
      },
      upvote (event, isFromBtn) {
        if (this.liked < 10) {
          isFromBtn ? showFireworks(event) : showUpvote(event, sample(colors))

          this.clickNum++
          this.LikeCount++
          this.$store.commit('upvote', this.OpenId)
          this.updateLikeLog()
        } else {
          this.$message.warning('每天只能点十次赞哦！')
        }
      },
      toIndex () {
        location.href = '/api/activity/index'
      },
      showShareDialog () {
        this.showShare = true
      },
      showDialogEWM () {
        this.dialogVisible = true
      }
    },
    watch: {
      moveIn (newVal) {
        if (newVal) {
          this.getUser()
          this.animate()
        }
      }
    },
  }
</script>
<style scoped lang="scss">
  .theme {
    width: 44.67vw;
    float: left;
  }

  .theme1 {
    width: 5.73vw;
    float: left;
    margin-top: 3px;
  }

  .theme2 {
    width: 65.07vw;
    margin: 0 auto;
  }

  .themeTxt {
    display: inline-block;
    margin-bottom: 0;
  }

  .NickName {
    margin-bottom: 5vh;
  }

  .theRules {
    width: 17.6vw;
    position: absolute;
    left: 8vw;
    bottom: 19vh;
  }

  .close {
    width: 6.67vw;
    position: absolute;
    top: -10vh;
    right: 2vw;
  }

  .num {
    float: left;
    font-size: 8vw;
    color: #e50011;
    margin: -6px 10px 0;
  }

  .headPortrait {
    width: 41.33vw;
    border-radius: 50%;
  }

  .like {
    display: block;
    width: 10.67vw;
    height: 10.67vw;
    background-size: 10.67vw;
    position: absolute;
    top: 0.8vh;
    left: 62vw;
    background-color: #fff;
    border-radius: 50%;
    .liked {
      position: absolute;
      left: 3vw;
      top: 1vh;
    }
  }

  .headPortraitBox {
    position: relative;
    margin: 5vh auto 3vh;
    .likeNum {
      position: absolute;
      top: 2vh;
      left: 75vw;
      font-size: 5vw;
      font-style: italic;
      text-align: left;
      width: 21vw;
    }
  }

  .remark {
    width: 80vw;
    margin: 0 auto;
    padding: 3.47vw 2.67vw;
    background-color: rgba(255, 255, 255, 0.1);
    font-size: 3.73vw;
    text-align: left;
    line-height: 3.48vh;
  }

  .giftBtn {
    width: 48.4vw;
  }

  .btnBox {
    position: absolute;
    width: 100vw;
    bottom: 1.5vh;
    img {
      width: 36.27vw;
    }
  }

  .personalInfo {
    background: url("../../assets/index/background.jpg") no-repeat;
    background-size: cover;
    overflow: hidden;
    height: 100vh;
  }
</style>
