<template>
  <div>
    <img class="title" src="../../assets/leaveInfo/theme.png">
    <img class="content" src="../../assets/leaveInfo/Activity-rules.png">
    <img class="btn" src="../../assets/leaveInfo/Save-the-view.png" @click="showDialog">

    <el-dialog title="长按识别公众号二维码" :visible.sync="dialogVisible" width="90%"
               center :show-close="false" :append-to-body="true">
      <img src="../../assets/gongzhonghao.jpg">
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        dialogVisible: false,
      }
    },
    methods: {
      showDialog () {
        this.dialogVisible = true
      }
    },

  }
</script>

<style scoped lang="scss">
  .title {
    width: 63.33vw;
    margin: 20vh auto 3.98vh;
  }

  .content {
    width: 71.07vw;
  }
</style>
