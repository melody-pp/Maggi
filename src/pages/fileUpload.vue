<template>
  <div>
    <input ref="input" type="file" accept="image/*" @change="upload"/>

    <img :src="imgUrl" alt="" width="200">
  </div>
</template>

<script>
  export default {
    data () {
      return {
        imgUrl: null
      }
    },
    methods: {
      upload () {
        const reader = new FileReader()
        reader.onload = e => this.imgUrl = e.target.result
        reader.readAsDataURL(this.$refs.input.files[0])
      }
    }
  }
</script>
