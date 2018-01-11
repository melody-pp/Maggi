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
        this.axios.post(
          '/meiji/public/admin/info/store',
          {name: this.name, tel: this.tel, address: this.address}
        ).then(res => {
          this.$message.success('保存成功！')
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .theme {
    width: 57.47vw;
  }

  .activityrules {
    width: 88.93vw;
  }

  form {
    .el-input input {
      border: none;
      border-bottom: 1px solid #fff;
      width: 80%;
    }
  }

</style>
