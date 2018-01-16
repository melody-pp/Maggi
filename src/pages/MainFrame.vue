<template>
  <div id="main-frame" :style="{transform: `translate3d(0,-${current*100}vh,0)`}">
    <div class="page-1 page">
      <Home :moveIn="current===0"/>
      <img class="logo" src="../assets/logo.png">
    </div>
    <div class="page-2 page">
      <Guide1 :moveIn="current===1"/>
      <img class="logo" src="../assets/logo.png">
    </div>
    <div class="page-3 page">
      <Guide2 :moveIn="current===2"/>
      <img class="logo" src="../assets/logo.png">
    </div>
    <div class="page-4 page">
      <Guide3 :moveIn="current===3"/>
      <img class="logo" src="../assets/logo.png">
    </div>
    <div class="page-5 page">
      <Guide4 :moveIn="current===4"/>
      <img class="logo" src="../assets/logo.png">
    </div>
    <div class="page-6 page">
      <Prize :moveIn="current===5"/>
      <img class="logo" src="../assets/logo.png">
    </div>
    <div class="page-7 page">
      <InfoCollect :moveIn="current===6"/>
      <img class="logo" src="../assets/logo.png">
    </div>
    <div class="page-8 page">
      <PersonalInfo :moveIn="current===7"/>
      <img class="logo" src="../assets/logo.png">
    </div>
    <div class="page-9 page">
      <Tips :moveIn="current===8"/>
      <img class="logo" src="../assets/logo.png">
    </div>
    <div class="page-10 page">
      <Comments :moveIn="current===9"/>
      <img class="logo" src="../assets/logo.png">
    </div>

  </div>
</template>

<script>
  import $ from 'jquery'
  import Home from './home/Home'
  import Guide1 from './guide1/Guide1'
  import Guide2 from './guide2/Guide2'
  import Guide3 from './guide3/Guide3'
  import Guide4 from './guide4/Guide4'
  import Prize from './prize/Prize'
  import InfoCollect from './infoCollect/InfoCollect'
  import Tips from './tips/Tips'
  import Comments from './comments/Comments'
  import PersonalInfo from './personalInfo/PersonalInfo'

  export default {
    name: 'MainFrame',
    computed: {
      current () {
        return this.$store.state.current
      }
    },
    mounted () {
      const $app = $('#app')
      const total = window.innerHeight

      window.addEventListener('resize', () => {
        if (window.innerHeight === total) {
          setTimeout(() => {
            $app.css('margin-top', -$app.position().top + 'px')
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
  #main-frame {
    transition: all 700ms ease-out;
  }

  .page {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;
    background-size: cover;
    background: url("../assets/index/background.jpg") no-repeat;
  }

  .logo {
    position: absolute;
    bottom: 1vh;
    right: 2vw;
    width: 10.67vw;
    z-index: 100;
  }
</style>
