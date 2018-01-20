<template>
  <div class="personalInfo">
    <div>
      <div class="themeTxt clearfix">
        <img class="theme" src="../../assets/personalInfo/theme.png">
        <span class="num">{{UserId}}</span>
        <img class="theme1" src="../../assets/personalInfo/theme1.png">
      </div>

      <div class="theme2">
        <img src="../../assets/personalInfo/theme2.png">
      </div>
    </div>
    <div class="headPortraitBox">
      <img class="headPortrait" :src="HeadPic">
      <span class="like">
        <svg class="liked" @touchstart="upvote" t="1515995941008" viewBox="0 0 1024 1024" version="1.1"
             xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
             width="4.6vw" height="4vh" :fill="color">
          <path
            d="M18.881772 480.019692l0 384C18.881772 916.795077 60.07808 945.230769 97.651003 945.230769l78.769231 0L176.420234 393.846154 97.651003 393.846154C60.07808 393.846154 18.881772 427.165538 18.881772 480.019692zM940.481772 575.960615c68.292923 0 102.4-191.960615 0-191.960615L735.681772 384C940.481772 64.039385 792.23808 0 735.681772 0c0 155.884308-234.653538 327.837538-480.492308 405.504l0 526.099692C506.227003 961.614769 424.464542 1024 701.574695 1024c68.292923 0 136.507077-31.980308 136.507077-96.019692 68.292923 0 102.4-159.980308 68.292923-159.980308C974.588849 768 1018.384542 575.960615 940.481772 575.960615z"></path>
        </svg></span>
      <span class="likeNum">{{LikeCount}}</span>
    </div>
    <div class="NickName">{{NickName}}</div>
    <div class="remark">
      {{CommentContent}}
    </div>
    <img v-if="isSelf" class="theRules" src="../../assets/prize/The-rules.png" @click="showDialog">
    <div class="btnBox">
      <template v-if="isSelf">
        <img @click="showShare" src="../../assets/personalInfo/button.png">
        <img @click="moveDown" src="../../assets/personalInfo/button2.png">
      </template>
      <template v-else>
        <img @click="upvote" src="../../assets/personalInfo/To-view.png">
        <img @click="toIndex" src="../../assets/personalInfo/want-to-express.png">
      </template>
    </div>
    <el-dialog class="agreement" :visible.sync="dialogVisible" :modal="false" :show-close="false"
               :append-to-body="true">
      <span slot="title" class="dialog-title">活动规则</span>
      <div>
        <img class="close" src="../../assets/leaveInfo/close.png" @click="dialogVisible=false">
        <p>1. 活动时间：2018年2月2日21时-2018年2月12日24时。</p>
        <p>2. 本活动仅限雀巢专业餐饮大厨精英荟微信公众账号粉丝参与，未关注该微信公众账号者关注后方可参与活动。</p>
        <p>3. 每个微信账号仅有一次输入内容的机会，一旦提交，不可更改。</p>
        <p>4. 活动期间，每人每日投票上限为10票，可为同一参与者投票，也可为不同参与者投票。</p>
        <p>5. 本活动所有奖品仅发放给专业厨师。非厨师者可以参与活动，但雀巢专业餐饮有权在核实身份信息后，取消非专业厨师者的获奖资格。</p>
        <p>6. 活动结束后，即2018年2月13日起，雀巢专业餐饮将通过客服热线与中奖粉丝取得联系，进行身份和邮寄信息的核实，以便中奖粉丝在春节前可以收到礼品，请中奖粉丝保持电话畅通。</p>
        <p>7. 本活动的最终中奖名单将在2月16日通过雀巢专业餐饮大厨精英荟微信公众账号公布，以示公正。</p>
        <p>8. 本活动严禁刷票，若有违反者，雀巢专业餐饮有权立刻取消其参与资格。</p>
        <p>9. 本活动解释权归雀巢专业餐饮所有。</p>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  import { showUpvote, sample } from '../../utils/utils'

  const colors = ['#3b8aef', '#bb1687', '#5ccca3', '#dd840e', '#3c10bb', '#b998dd', '#b7bb4f', '#cc070f', '#87dda0']

  export default {
    props: ['moveIn'],
    data () {
      return {
        dialogVisible: false,
        UserId: 0,
        NickName: '',
        HeadPic: '',
        CommentContent: '',
        LikeCount: 0,
        clickNum: 0,
        isBusy: false,
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
        return this.$store.state.OpenIdPk || this.userOpenId
      },

      userOpenId () {
        return this.$store.state.userInfo.OpenId
      },

      isSelf () {
        return !!JSON.parse(this.$store.state.Self.toLowerCase())
      }
    },
    methods: {
      showDialog () {
        this.dialogVisible = true
      },
      moveDown () {
        this.$store.commit('moveDown')
      },
      getUser () {
        this.axios.post(
          '/api/activity/getuser',
          {OpenId: this.OpenId}
        ).then(res => {
          const data = res.data

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
          OpenIdPk: this.OpenId
        }).then(({data: {errcode, errmsg}}) => {
          if (errcode === 1) {
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
          this.$store.commit('upvote', this.OpenId)
          this.updateLikeLog()
        }
      },
      toIndex () {
        location.href = 'http://kj.century-galaxy.com/api/activity/index'
      },
      showShare () {
        this.$alert('点击浏览器右上角分享链接。', '提示', {
          type: 'info',
          center: true,
          showClose: false,
          closeOnClickModal: true,
        })
      }
    },
    watch: {
      moveIn (newVal) {
        newVal && this.getUser()
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
      left: 3.2vw;
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
