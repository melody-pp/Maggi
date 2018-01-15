<template>
  <div class="carousel-wrapper">
    <div class="carousel" ref="carousel" :style="{transform: `translate(-${left}px)`}">
      <CarouselItem v-for="(img, index) of ripeImgs" :img="img" :key="index" :width="itemWidth"/>
    </div>
  </div>
</template>

<script>
  import CarouselItem from './CarouselItem'

  export default {
    name: 'carousel',
    components: {CarouselItem},
    props: {
      imgs: Array,
      speed: {
        type: Number,
        default: 10
      },
      itemWidth: {
        type: Number,
        default: 150
      }
    },
    computed: {
      ripeImgs () {
        return this.imgs.concat(this.imgs)
      },
      carouselWidth () {
        return this.itemWidth * this.ripeImgs.length
      },
      rawTotalWidth () {
        return this.itemWidth * this.imgs.length
      }
    },
    data () {
      return {
        left: 0,
        stopFlag: false
      }
    },
    mounted () {
      this.$refs.carousel.style.width = this.carouselWidth + 'px'
      this.start()
    },
    methods: {
      start () {
        if (this.stopFlag) {
          return
        }

        if (this.left > this.rawTotalWidth) {
          this.left -= this.rawTotalWidth
        }
        this.left += this.speed
        window.requestAnimationFrame(this.start.bind(this))
      },
      stop () {
        this.stopFlag = true
      },
    }
  }
</script>

<style scoped>
  .carousel-wrapper {
    width: 100vw;
    position: relative;
  }

  .carousel {
    position: relative;
    overflow: hidden;
    transition: all 16.67ms;
  }
</style>
