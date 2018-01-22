<template>
  <div>
    <img class="prizeTheme title" src="../../assets/prize/theme.png" ref="prizeTheme">
    <div class="prizeBox">
      <img src="../../assets/prize/Warm-air-blower.png" ref="img1">
      <img src="../../assets/prize/Vacuum-cup.png" ref="img2">
      <img src="../../assets/prize/Intelligent-bracelet.png" ref="img3">
      <img src="../../assets/prize/Charging.png" ref="img4">
      <img src="../../assets/prize/The-cook.png" ref="img5">
      <img src="../../assets/prize/Electronic-gift-card.png" ref="img6">
    </div>

    <img class="btn" src="../../assets/prize/start.png" @click="dialogVisible=true" ref="prizeBtn">

    <el-dialog class="activityRule" :visible.sync="dialogVisible"
               :modal="false" :show-close="false" :append-to-body="true">
      <span slot="title" class="dialog-title">活动规则</span>
      <div style="text-align: center">
        <div class="content">
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

        <button @click="dialogVisible=false">取消</button>
        <button @click="moveDown">已了解规则，继续</button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  import { TimelineMax, Elastic } from 'gsap'

  export default {
    props: ['moveIn'],
    data () {
      return {
        dialogVisible: false,
        timeline: null,
        showArrow: false
      }
    },
    methods: {
      moveDown () {
        this.dialogVisible = false
        this.$store.commit('moveDown')
      },
      animate () {
        this.timeline = new TimelineMax({
          delay: 0.7,
          onComplete: () => {
            this.showArrow = true
          }
        })

        this.timeline
          .from(this.$refs.prizeTheme, 0.5, {autoAlpha: 0, y: -50})
          .from(this.$refs.img1, 1, {autoAlpha: 0, rotationX: 90})
          .from(this.$refs.img2, 1, {autoAlpha: 0, rotationX: 90})
          .from(this.$refs.img3, 1, {autoAlpha: 0, rotationX: 90})
          .from(this.$refs.img4, 1, {autoAlpha: 0, rotationX: 90})
          .from(this.$refs.img5, 1, {autoAlpha: 0, rotationX: 90})
          .from(this.$refs.img6, 1, {autoAlpha: 0, rotationX: 90})
          .from(this.$refs.prizeBtn, 0.5, {autoAlpha: 0, y: 50})
      }
    },
    watch: {
      moveIn (newVal) {
        newVal && this.animate()
      }
    },
  }
</script>
<style scoped lang="scss">
  .prizeTheme {
    width: 74.4vw;
  }

  .close {
    width: 6.67vw;
    position: absolute;
    top: -10vh;
    right: 2vw;
  }

  .prizeBox {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    > img {
      margin-top: 3vh;
      width: 44vw;
      height: 32vw;
      transform-origin: bottom;
    }
  }
</style>
