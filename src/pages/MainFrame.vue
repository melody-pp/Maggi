<template>
    <div id="fullpage">
      <div class="page-1 section">
        <Home/>
      </div>
      <div class="page-2 section">
        <Guide1/>
      </div>
      <div class="page-3 section">
        <Guide2/>
      </div>
      <div class="page-4 section">
        <Guide3/>
      </div>
      <div class="page-5 section">
        <Guide4/>
      </div>
      <div class="page-6 section">
        <Prize/>
      </div>
      <div class="page-7 section">
        <InfoCollect/>
      </div>
      <div class="page-8 section">
        <PersonalInfo/>

      </div>
      <div class="page-9 section">
        <LeaveInfo/>
      </div>
      <div class="page-10 section">
        <Comments/>
      </div>
    </div>
</template>

<script>
  import $ from 'jquery'
  import Home from './home/Home'
  import Guide1 from './guide1/Guide1'
  import Guide2 from './guide2/Guide2'
  import Guide3 from './guide3/Guide3'
  import InfoCollect from './infoCollect/InfoCollect'
  import PersonalInfo from './personalInfo/PersonalInfo'
  import Prize from './prize/Prize'
  import LeaveInfo from './leaveInfo/LeaveInfo'
  import Comments from './comments/Comments'
  import Guide4 from './guide4/Guide4'

  export default {
    name: 'MainFrame',
    mounted () {
      $('#fullpage').fullpage({verticalCentered: false})
    },
    components: {
      Home, Guide1, Guide2, Guide3, InfoCollect, PersonalInfo, Prize, LeaveInfo, Comments,Guide4
    }
  }
</script>

<style scoped lang="scss">
  .page-1, .page-2, .page-3, .page-4, .page-5, .page-6, .page-7, .page-8, .page-9, .page-10, .page-11 {
    background: url("../assets/index/background.jpg") no-repeat;
    background-size: cover;
    overflow: hidden;
  }
</style>
