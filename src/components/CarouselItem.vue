<template>
  <div class="carousel-item">
    <img :src="img" :width="width+'px'">
  </div>
</template>

<script>
  export default {
    name: 'carousel-item',
    props: ['img', 'width']
  }
</script>

<style scoped>
  .carousel-item {
    float: left;
    padding: 15px;
    vertical-align: center;
  }
</style>
