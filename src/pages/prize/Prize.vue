<template>
  <div>
    <div class="themeTxt">
      <img class="theme" src="../../assets/prize/theme.png" alt="">
      <img class="rules" src="../../assets/prize/Sweepstakes-rules.png" alt="">
    </div>
    <div class="btnGift">
      <img class="follow" src="../../assets/btn/follow.png" alt="">
      <img class="leaveInfo" src="../../assets/btn/leaveInfo.png" alt="">
    </div>
  </div>
</template>

<style scoped lang="scss">
  .theme {
    width: 43.37vw;
  }

  .rules {
    width: 88.53vw;
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
</style>
