<template>
  <div id="main-frame" ref="mainFrame" @touchstart="touchstart" @touchend="touchend"
       :style="{transform: `translate3d(0,-${current*100}vh,0)`}">
    <div class="page-1 page">
      <Home :moveIn="current===0"/>
    </div>
    <div class="page-2 page">
      <Guide1 :moveIn="current===1"/>
    </div>
    <div class="page-3 page">
      <Guide2 :moveIn="current===2"/>
    </div>
    <div class="page-4 page">
      <Guide3 :moveIn="current===3"/>
    </div>
    <div class="page-5 page">
      <Guide4 :moveIn="current===4"/>
    </div>
    <div class="page-6 page">
      <Flow :moveIn="current===5"/>
    </div>
    <div class="page-7 page">
      <Prize :moveIn="current===6"/>
    </div>
    <div class="page-8 page">
      <InfoCollect :moveIn="current===7"/>
    </div>
    <div class="page-9 page">
      <PersonalInfo :moveIn="current===8"/>
    </div>
    <div class="page-10 page">
      <Comments :moveIn="current===9"/>
    </div>
  </div>
</template>

<script>
  import Home from './home/Home'
  import Guide1 from './guide1/Guide1'
  import Guide2 from './guide2/Guide2'
  import Guide3 from './guide3/Guide3'
  import Guide4 from './guide4/Guide4'
  import Flow from './Flow/Flow'
  import Prize from './prize/Prize'
  import InfoCollect from './infoCollect/InfoCollect'
  import Tips from './tips/Tips'
  import Comments from './Comments/Comments'
  import PersonalInfo from './personalInfo/PersonalInfo'

  export default {
    name: 'MainFrame',
    data () {
      return {
        startY: null
      }
    },
    computed: {
      current () {
        return this.$store.state.Current
      },
      step () {
        return this.$store.state.Step
      },
    },
    mounted () {
      let start
      switch (+this.step) {
        case 1:
          start = 0
          break
        case 2:
          start = 8
          break
        case 3:
          start = 9
          break
      }
      this.$store.commit('moveTo', 0)
    },
    methods: {
      touchstart (event) {
        this.startY = event.changedTouches[0].pageY
      },
      touchend (event) {
        const endY = event.changedTouches[0].pageY

        if (this.current < 6 && endY - this.startY < -5) {
          this.$store.commit('moveDown')
        }
        // if (this.current < 6 && endY - this.startY > 5) {
        //   this.$store.commit('moveUp')
        // }
      },
    },
    components: {
      Home, Guide1, Guide2, Guide3, InfoCollect, PersonalInfo, Prize, Tips, Comments, Guide4, Flow
    }
  }
</script>

<style scoped lang="scss">
  .page {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;
    background: url("../assets/index/background.jpg") no-repeat;
    background-size: cover;
  }
</style>
