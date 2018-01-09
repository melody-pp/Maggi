<template>
  <div class="modal" :style="{zIndex}"></div>
</template>

<script>
  export default {
    name: 'modal',
    props: ['zIndex']
  }
</script>

<style scoped>
  .modal {
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, .7);
    position: absolute;
    left: 0;
    top: 0;
  }
</style>