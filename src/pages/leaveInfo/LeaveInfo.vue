<template>
  <div>
    <img class="theme themeTxt" src="../../assets/leaveInfo/theme.png" alt="">
    <img class="activityrules" src="../../assets/leaveInfo/Activity-rules.png" alt="">
    <form>
      <el-input v-model="name" placeholder="姓名"/>
      <el-input v-model="tel" placeholder="手机号"/>
      <area-cascader type='text' v-model="area" :level="1"/>
      <el-input v-model="address" placeholder="详细地址"/>
      <div class="agreenBox clearfix">
        <span class="agreenBtn" @click="changeBtn"></span>
        <el-button type="text" @click="open5">我已阅读协议</el-button>
      </div>
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
        this.axios.post(
          '/meiji/public/admin/info/store',
          {name: this.name, tel: this.tel, address: this.address}
        ).then(res => {
          this.$message.success('保存成功！')
        })
      },
      changeBtn () {

      },
      open5 () {
        this.$alert('<strong>这是 <i>HTML</i> 片段</strong>', 'HTML 片段', {
          dangerouslyUseHTMLString: true,
          center: true
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
    margin-top: 2vh;
  }

  .agreenBox {
    margin-left: 10vw;
    margin-top: 5vw;
    span, button {
      float: left;
    }
    button {
      padding: 3px;
      color: #fff;
    }
    .agreenBtn {
      display: inline-block;
      width: 5.33vw;
      height: 3.15vh;
      background: url("../../assets/leaveInfo/reading.png") no-repeat 0 -3.15vh;
      background-size: 5.33vw 6.3vh;
      cursor: pointer;
      margin-right: 2vw;
    }
  }

</style>
