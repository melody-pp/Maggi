<template>
  <div>
    <img class="theme" src="../../assets/leaveInfo/theme.png" alt="">
    <img class="activityrules" src="../../assets/leaveInfo/Activity-rules.png" alt="">
    <form>
      <el-input v-model="name" placeholder="姓名"/>
      <el-input v-model="tel" placeholder="手机号"/>
      <!--<el-input v-model="" placeholder="省"/>-->
      <!--<el-input v-model="" placeholder="市"/>-->
      <!--<el-input v-model="" placeholder="区"/>-->
      <el-input v-model="address" placeholder="详细地址"/>
      <img class="btn" src="../../assets/leaveInfo/Save-the-view.png" alt="">
      <el-button @click="save">保存并查看排行榜</el-button>
    </form>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        name: '',
        tel: '',
        address: '',
      }
    },
    methods: {
      save () {
        this.axios.get(
          '/meiji/public/admin/info/store',
          {
            params: {name: this.name, tel: this.tel, address: this.address}
          }
        ).then(res => {
          this.$message.success('保存成功！')
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .theme {
    width: 45.73vw;
  }

  .activityrules {
    width: 88vw;
  }

  form {
    .el-input_inner {
      border: none !important;
      border-bottom: 1px solid #fff !important;
      width: 80vw !important;
      background-color: transparent !important;
    }
  }

</style>
