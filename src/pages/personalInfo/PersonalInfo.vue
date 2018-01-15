<template>
  <div class="personalInfo">
    <div>
      <div class="themeTxt clearfix">
        <img class="theme" src="../../assets/personalInfo/theme.png">
        <span class="num">30</span>
        <img class="theme1" src="../../assets/personalInfo/theme1.png">
      </div>

      <div class="theme2">
        <img src="../../assets/personalInfo/theme2.png" alt="">
      </div>
    </div>
    <div class="headPortraitBox">
      <img class="headPortrait" src="../../assets/personalInfo/headPortrait.png">
      <span class="like"></span>
      <span class="likeNum">116</span>
    </div>
    <div class="nickName">我是张大厨</div>
    <div class="remark">
      2018年我想对父母说，爸妈儿子今年又不能陪你们过年了，二老不必记挂我，我这一切都好，你们要照顾好自己，爸妈新年快乐！
    </div>
    <img class="theRules" src="../../assets/prize/The-rules.png" @click="showDialog">
    <div class="btnBox">
      <img class="" src="../../assets/personalInfo/button.png" alt="">
      <img @click="toComments" src="../../assets/personalInfo/button2.png" alt="">
    </div>
    <el-dialog class="agreement" :visible.sync="dialogVisible"
               :modal="false" :show-close="false" :append-to-body="true">
      <span slot="title" class="dialog-title">活动规则:</span>
      <div @touchmove="touchmove" @touchstart="touchstart">
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
  import $ from 'jquery'
  export default {
    data () {
      return {
        dialogVisible: false
      }
    },
    methods: {
      showDialog () {
        this.dialogVisible = true
      },
      toComments () {
        $('#fullpage').fullpage.moveTo(9)
      },
      touchstart (event) {
        this.positionY = event.touches[0].clientY
      },
      touchmove (event) {
        const currentY = event.touches[0].clientY
        document.querySelector('agreement .el-dialog__body').scrollTop += (this.positionY - currentY) * 2
        this.positionY = currentY
      }
    }
  }
</script>
<style scoped lang="scss">
  .theme {
    width: 37.47vw;
    float: left;
  }

  .theme1 {
    width: 4.53vw;
    float: left;
    margin-top: 3px;
  }

  .theme2 {
    width: 49.2vw;
    margin: 0 auto;
  }

  .themeTxt {
    display: inline-block;
    margin-bottom: 0;
  }

  .nickName {
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
    font-size: 8vw;
    color: #fe8e00;
    float: left;
    margin: 0 10px;
    margin-top: -6px;
  }

  .headPortrait {
    width: 41.33vw;
  }

  .like {
    background: url("../../assets/personalInfo/like.png") no-repeat 0 -10.67vw;
    display: block;
    width: 10.67vw;
    height: 10.67vw;
    background-size: 10.67vw;
    position: absolute;
    top: 1.5vh;
    left: 50%;
    transform: translateX(107%);
  }

  .headPortraitBox {
    position: relative;
    margin: 5vh auto 3vh;
    .likeNum {
      position: absolute;
      top: 1.5vh;
      left: 50%;
      transform: translateX(200%);
      font-size: 7vw;
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
      width: 41.33vw;
    }
  }

  .personalInfo {
    background: url("../../assets/index/background.jpg") no-repeat;
    background-size: cover;
    overflow: hidden;
    height: 100vh;
  }
</style>
