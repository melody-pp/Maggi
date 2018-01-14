<template>
  <div>
    <div class="prizeBox">
      <marquee behavior="scroll" direction="left">
      <img src="../../assets/prize/Warm-air-blower.png" alt="">
      <img src="../../assets/prize/Vacuum-cup.png" alt="">
      <img src="../../assets/prize/Intelligent-bracelet.png" alt="">
      <img src="../../assets/prize/Charging.png" alt="">
      <img src="../../assets/prize/Electronic-gift-card.png" alt="">
      <img src="../../assets/prize/The-cook.png" alt="">
      </marquee>
    </div>
    <img class="rules" src="../../assets/prize/Sweepstakes-rules.png" alt="">
    <div>
      <div class="agreenBox clearfix">

        <span class="agreenBtn" @click=""></span>
        <span style="margin-right: 17vw;">关注公众号</span>
        <span class="agreenBtn" @click=""></span>
        <span @click="showDialog">我已了解活动规则</span>
      </div>
    </div>
    <img class="btn" style="bottom:5vh;" src="../../assets/prize/start.png" alt="">
    <!--<img class="theRules" src="../../assets/prize/The-rules.png" alt="">-->
    <el-dialog class="agreement" :visible.sync="dialogVisible" :modal="false" :show-close="false"
               :append-to-body="true">
      <span slot="title" class="dialog-title">这里是title</span>
      <div @touchmove="touchmove" @touchstart="touchstart">
        <img class="close" src="../../assets/leaveInfo/close.png" @click="dialogVisible=false">
        <p>雀巢重视对消费者个人隐私权的保护，为各位消费者设立本隐私权声明并将努力更新本声明的内容，使其更加全面并更加符合您的期望。</p>
        <p>1．隐私权条款的适用范围</p>
        <p>
          在您自愿提供您的相关信息（例如您的姓名、电话、电子邮件信箱、地址等，以下简称“个人信息”）之后，将由雀巢根据本隐私权声明予以保护。除以本声明第3条中规定的相关方式使用您提交的个人信息之外，在未征得您许可的情况下，雀巢不会将该信息对外公开或提供给其他第三方。</p>
        <p>2．可能要求您提供的信息类型</p>
        <p>（1）个人信息 </p>
        <p>（2）其他一般性统计信息，包括任何有关您或您任职餐厅的非身份性信息，例如您的购买习惯、产品和餐厅餐位数、人均消费等相关信息。</p>
        <p>3．信息的使用方式</p>
        <p>您同意，雀巢可以按照如下方式，使用您自愿提供的个人信息：</p>
        <p>雀巢重视对消费者个人隐私权的保护，为各位消费者设立本隐私权声明并将努力更新本声明的内容，使其更加全面并更加符合您的期望。</p>
        <p>1．隐私权条款的适用范围</p>
        <p>
          在您自愿提供您的相关信息（例如您的姓名、电话、电子邮件信箱、地址等，以下简称“个人信息”）之后，将由雀巢根据本隐私权声明予以保护。除以本声明第3条中规定的相关方式使用您提交的个人信息之外，在未征得您许可的情况下，雀巢不会将该信息对外公开或提供给其他第三方。</p>
        <p>2．可能要求您提供的信息类型</p>
        <p>（1）个人信息 </p>
        <p>（2）其他一般性统计信息，包括任何有关您或您任职餐厅的非身份性信息，例如您的购买习惯、产品和餐厅餐位数、人均消费等相关信息。</p>
        <p>3．信息的使用方式</p>
        <p>您同意，雀巢可以按照如下方式，使用您自愿提供的个人信息：</p>
        <p>雀巢重视对消费者个人隐私权的保护，为各位消费者设立本隐私权声明并将努力更新本声明的内容，使其更加全面并更加符合您的期望。</p>
        <p>1．隐私权条款的适用范围</p>
        <p>
          在您自愿提供您的相关信息（例如您的姓名、电话、电子邮件信箱、地址等，以下简称“个人信息”）之后，将由雀巢根据本隐私权声明予以保护。除以本声明第3条中规定的相关方式使用您提交的个人信息之外，在未征得您许可的情况下，雀巢不会将该信息对外公开或提供给其他第三方。</p>
        <p>2．可能要求您提供的信息类型</p>
        <p>（1）个人信息 </p>
        <p>（2）其他一般性统计信息，包括任何有关您或您任职餐厅的非身份性信息，例如您的购买习惯、产品和餐厅餐位数、人均消费等相关信息。</p>
        <p>3.信息的使用方式</p>
        <p>您同意，雀巢可以按照如下方式，使用您自愿提供的个人信息：</p>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        dialogVisible: false,
      }
    },
    methods:{
      showDialog () {
        this.dialogVisible = true
      },
      touchstart (event) {
        this.positionY = event.touches[0].clientY
      },
      touchmove (event) {
        const currentY = event.touches[0].clientY
        document.querySelector('.el-dialog__body').scrollTop += (this.positionY - currentY) * 2
        this.positionY = currentY
      }
    }
  }
</script>
<style scoped lang="scss">
  .prizeBox {
    margin-top: 2vh;
    img {
      width: 22vw;
    }

  }
  .close {
    width: 6.67vw;
    position: absolute;
    top: -10vh;
    right: 2vw;
  }
  .theRules {
    width: 17.6vw;
    position: absolute;
    right: 5vw;
    bottom: 7vh;
  }

  .rules {
    width: 89.47vw;
    margin-top: 3vh;
  }

  .btnGift {
    position: absolute;
    bottom: 10vh;
    left: 50%;
    transform: translateX(-50%);
    img {
      width: 44.27vw;
    }
  }

  .agreenBox {
    margin-top: 4vh;
    .agreenBtn {
      display: inline-block;
      width: 5.33vw;
      height: 3.15vh;
      background: url("../../assets/leaveInfo/reading.png") no-repeat 0 -3.15vh;
      background-size: 5.33vw 6.3vh;
      cursor: pointer;
      margin-right: 2vw;
      vertical-align: -6px;
    }
  }
</style>
