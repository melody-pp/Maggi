<template>
  <div>
    <img class="title" src="../../assets/flow/theme.png">
    <div class="subTitle">如何参与？</div>
    <div class="flow" style="margin-top: 1vh;">
      <div><img src="../../assets/flow/guidance.png" style="width: 24.4vw"></div>
      <div><img src="../../assets/flow/guidance1.png" style="width: 21.2vw"></div>
      <div><img src="../../assets/flow/guidance2.png" style="width: 28vw"></div>
    </div>
    <div class="flow" style="margin-top: 6vh;">
      <div><img src="../../assets/flow/guidance3.png" style="width: 25.33vw"></div>
      <div><img src="../../assets/flow/guidance4.png" style="width: 25.6vw"></div>
      <div><img src="../../assets/flow/guidance5.png" style="width: 31.33vw"></div>
    </div>

    <ArrowBtn/>
  </div>
</template>

<script>
  import ArrowBtn from '../../components/ArrowBtn'

  export default {
    name: 'flow',
    components: {ArrowBtn},
  }
</script>

<style scoped lang="scss">
  .title {
    width: 63.47vw;
  }

  .subTitle {
    margin-top: 3vh;
    color: #fff100;
    text-align: left;
  }

  .flow {
    display: flex;
    > div {
      width: 33.33vw;
    }
  }

</style>
