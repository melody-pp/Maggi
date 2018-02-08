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
          <p>1. 活动时间：2018年2月9日21时-2018年2月18日24时。</p>
          <p>2. 本活动仅限雀巢专业餐饮大厨精英荟微信公众账号粉丝参与，最终获奖名单将于2018年2月23日在微信公众号公布。</p>
          <p>3. 获奖者中奖后，需将邮寄信息提供给微信公众号客服，以便派发奖品。</p>
          <p>4. 每个微信账号仅有一次输入内容的机会，一旦提交，不可更改。</p>
          <p>5. 活动期间，每人每日投票上限为10票，可为同一参与者投票，也可为不同参与者投票。</p>
          <p>6. 本活动所有奖品仅发放给专业厨师，雀巢专业餐饮有权在核实身份信息后，取消非专业厨师者的获奖资格。</p>
          <p>7. 本活动严禁刷票，若有违反者，雀巢专业餐饮有权立刻取消其参与资格。</p>
          <p>8. 本活动解释权归雀巢专业餐饮所有。</p>
        </div>

        <button @click="dialogVisible=false">取消</button>
        <button @click="moveDown">我同意活动规则，继续</button>
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
          .from(this.$refs.prizeTheme, 0.5, {autoAlpha: 0})
          .from(this.$refs.img1, 0.5, {autoAlpha: 0, scale: 2})
          .to(this.$refs.img1, 0.5, {autoAlpha: 1, scale: 1})
          .from(this.$refs.img2, 0.5, {autoAlpha: 0, scale: 0}, '-=1')
          .to(this.$refs.img2, 0.5, {autoAlpha: 1, scale: 1}, '-=1')
          .from(this.$refs.img4, 0.5, {autoAlpha: 0, scale: 2}, '-=1')
          .to(this.$refs.img4, 0.5, {autoAlpha: 1, scale: 1}, '-=1')
          .from(this.$refs.img3, 0.5, {autoAlpha: 0, scale: 0}, '-=1')
          .to(this.$refs.img3, 0.5, {autoAlpha: 1, scale: 1}, '-=1')
          .from(this.$refs.img5, 0.5, {autoAlpha: 0, scale: 2}, '-=1')
          .to(this.$refs.img5, 0.5, {autoAlpha: 1, scale: 1}, '-=1')
          .from(this.$refs.img6, 0.5, {autoAlpha: 0, scale: 0}, '-=1')
          .to(this.$refs.img6, 0.5, {autoAlpha: 1, scale: 1}, '-=1')
          .from(this.$refs.prizeBtn, 0.5, {autoAlpha: 0}, '-=0.5')
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
    width: 82vw;
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
      margin-top: 2.95vh;
      width: 42.93vw;
      height: 31.33vw;
      /*transform-origin: bottom;*/
    }
  }
</style>
