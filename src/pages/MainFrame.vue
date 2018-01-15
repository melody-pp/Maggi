<template>
  <div id="fullpage">
    <div class="page-1 section">
      <Home :moveIn="current===1"/>
    </div>
    <div class="page-2 section">
      <Guide1 :moveIn="current===2"/>
    </div>
    <div class="page-3 section">
      <Guide2 :moveIn="current===3"/>
    </div>
    <div class="page-4 section">
      <Guide3 :moveIn="current===4"/>
    </div>
    <div class="page-5 section">
      <Guide4 :moveIn="current===5"/>
    </div>
    <div class="page-6 section">
      <Prize :moveIn="current===6"/>
    </div>
    <div class="page-7 section">
      <InfoCollect :moveIn="current===7"/>
    </div>
    <div class="page-8 section">
      <Tips :moveIn="current===8"/>
    </div>
    <div class="page-9 section">
      <Comments :moveIn="current===9"/>
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
  import Tips from './tips/Tips'
  import Comments from './comments/Comments'
  import Guide4 from './guide4/Guide4'

  export default {
    name: 'MainFrame',
    data () {
      return {
        current: 1
      }
    },
    mounted () {
      const that = this
      const $app = $('#app')
      const $fullpage = $('#fullpage')
      const total = window.innerHeight

      $fullpage.fullpage({
        css3: false,
        verticalCentered: false,
        onLeave (index, nextIndex, direction) {
          if (window.disableFullpage) {
            return false
          }
          that.current = nextIndex
        }
      })

      window.addEventListener('resize', () => {
        if (window.innerHeight === total) {
          setTimeout(() => {
            for (const page of document.querySelectorAll('#fullpage>.section')) {
              page.style.height = '100vh'
            }
            $app.css('margin-top', -$app.position().top + 'px')
            $fullpage.fullpage.moveTo(that.current)
          }, 500)
        }
      })
    },
    components: {
      Home, Guide1, Guide2, Guide3, InfoCollect, PersonalInfo, Prize, Tips, Comments, Guide4
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
