<template>
  <div>
    <img class="theme" src="../../assets/leaveInfo/theme.png" alt="">
    <img class="activityrules" src="../../assets/leaveInfo/Activity-rules.png" alt="">
    <form>
      <el-input v-model="name" placeholder="姓名"/>
      <el-input v-model="tel" placeholder="手机号"/>
      <area-cascader type='text' v-model="area" :level="1"/>
      <el-input v-model="address" placeholder="详细地址"/>
      <img class="btn" src="../../assets/leaveInfo/Save-the-view.png" @click="save">
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
        area: ''
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
</style>
