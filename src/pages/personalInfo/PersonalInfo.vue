<template>
  <div>
    <div>
      <div class="themeTxt clearfix">
        <img class="theme" src="../../assets/personalInfo/theme.png" alt="">
        <span class="num">30</span>
        <img class="theme1" src="../../assets/personalInfo/theme1.png" alt="">
      </div>

      <div class="theme2">
        <img src="../../assets/personalInfo/theme2.png" alt="">
      </div>
    </div>
    <div class="headPortraitBox">
      <img class="headPortrait" src="../../assets/personalInfo/headPortrait.png" alt="">
      <span class="like"></span>
      <span class="likeNum">116</span>
    </div>
    <div class="remark">
      2018年我想对父母说，爸妈儿子今年又不能陪你们过年了，二老不必记挂我，我这一切都好，你们要照顾好自己，爸妈新年快乐！
    </div>
    <img class="btn" src="../../assets/btn/giftBtn.png" alt="">
  </div>
</template>

<style scoped lang="scss">
  .theme {
    width: 32.8vw;
    float: left;
  }

  .theme1 {
    width: 4.53vw;
    float: left;
  }

  .theme2 {
    width: 49.2vw;
    margin: 0 auto;
  }

  .themeTxt {
    display: inline-block;
  }

  .num {
    font-size: 8vw;
    color: #fff;
    float: left;
  }

  .headPortrait {
    width: 41.33vw;
  }

  .like {
    background: url("../../assets/personalInfo/like.png") no-repeat;
    background-position: 0 -10.67vw;
    display: block;
    width: 10.67vw;
    height: 10.67vw;
    background-size: 10.67vw;
    position: absolute;
    top: 1.5vh;
    left: 50%;
    transform: translatex(107%);
  }

  .headPortraitBox {
    position: relative;
    margin: 5vh auto;
    .likeNum {
      position: absolute;
      top: 1.5vh;
      left: 50%;
      transform: translatex(200%);
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
</style>
