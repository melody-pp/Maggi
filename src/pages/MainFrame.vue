<template>
  <div class="fullpage-container">
    <div class="fullpage-wp" v-fullpage="opts" ref="fullpage">
      <div class="page-1 page">
        <Home/>
      </div>
      <div class="page-2 page">
        <Guide1/>
      </div>
      <div class="page-3 page">
        <Guide2/>
      </div>
      <div class="page-4 page"></div>
      <div class="page-5 page">
        <InfoCollect/>
      </div>
      <div class="page-6 page">
        <Comments/>
      </div>
      <div class="page-7 page"></div>
      <div class="page-8 page"></div>
      <div class="page-9 page"></div>
    </div>
  </div>
</template>

<script>
  import Home from './home/Home'
  import Guide1 from './guide1/Guide1'
  import Guide2 from './guide2/Guide2'
  import InfoCollect from './infoCollect/InfoCollect'
  import Comments from './comments/Comments'

  export default {
    name: 'MainFrame',
    data () {
      return {
        opts: {
          start: 0,
          dir: 'v',
          loop: false,
          duration: 300,
        }
      }
    },
    components: {
      Home, Guide1, Guide2, InfoCollect, Comments
    }
  }
</script>

<style scoped lang="scss">
  .fullpage-container {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
  }

  .page-1, .page-5, .page-6, .page-7, .page-8 {
    background: url("../assets/index/background.jpg") no-repeat;
    background-size: cover;
  }
</style>
