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
        <span>我已了解活动规则</span>
      </div>
    </div>
    <img class="btn" style="bottom:5vh;" src="../../assets/prize/start.png" alt="">
    <img class="theRules" src="../../assets/prize/The-rules.png" alt="">
  </div>
</template>

<style scoped lang="scss">
  .prizeBox {
    margin-top: 2vh;
    img {
      width: 22vw;
    }

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
