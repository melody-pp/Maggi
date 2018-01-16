<template>
  <div>
    <img class="theme themeTxt" src="../../assets/leaveInfo/theme.png" alt="">
    <img class="activityrules" src="../../assets/leaveInfo/Activity-rules.png" alt="">
    <form>
      <el-input v-model="name" placeholder="姓名"/>
      <el-input v-model="tel" placeholder="手机号"/>
      <area-cascader type='text' v-model="area" :level="1"/>
      <el-input v-model="address" placeholder="详细地址"/>
      <div class="agreeBox clearfix">
        <span class="agreeBtn" @click="changeBtn"></span>
        <span type="text" @click="showDialog">我已阅读协议</span>
      </div>
      <img class="btn" src="../../assets/leaveInfo/Save-the-view.png" @click="save">
    </form>

    <el-dialog class="agreement" :visible.sync="dialogVisible" :modal="false" :show-close="false"
               :append-to-body="true">
      <span slot="title" class="dialog-title">这里是title</span>
      <div>
        <img class="close" src="../../assets/leaveInfo/close.png" @click="dialogVisible=false">
        <p>雀巢重视对消费者个人隐私权的保护，为各位消费者设立本隐私权声明并将努力更新本声明的内容，使其更加全面并更加符合您的期望。</p>
        <p>1．隐私权条款的适用范围</p>
        <p>
          在您自愿提供您的相关信息（例如您的姓名、电话、电子邮件信箱、地址等，以下简称“个人信息”）之后，将由雀巢根据本隐私权声明予以保护。除以本声明第3条中规定的相关方式使用您提交的个人信息之外，在未征得您许可的情况下，雀巢不会将该信息对外公开或提供给其他第三方。</p>
        <p>2．可能要求您提供的信息类型</p>
        <p>（1）个人信息 </p>
        <p>（2）其他一般性统计信息，包括任何有关您或您任职餐厅的非身份性信息，例如您的购买习惯、产品和餐厅餐位数、人均消费等相关信息。</p>
        <p>3．信息的使用方式</p>
        <p>您同意，雀巢可以按照如下方式，使用您自愿提供的个人信息：</p>
        <p>雀巢重视对消费者个人隐私权的保护，为各位消费者设立本隐私权声明并将努力更新本声明的内容，使其更加全面并更加符合您的期望。</p>
        <p>1．隐私权条款的适用范围</p>
        <p>
          在您自愿提供您的相关信息（例如您的姓名、电话、电子邮件信箱、地址等，以下简称“个人信息”）之后，将由雀巢根据本隐私权声明予以保护。除以本声明第3条中规定的相关方式使用您提交的个人信息之外，在未征得您许可的情况下，雀巢不会将该信息对外公开或提供给其他第三方。</p>
        <p>2．可能要求您提供的信息类型</p>
        <p>（1）个人信息 </p>
        <p>（2）其他一般性统计信息，包括任何有关您或您任职餐厅的非身份性信息，例如您的购买习惯、产品和餐厅餐位数、人均消费等相关信息。</p>
        <p>3．信息的使用方式</p>
        <p>您同意，雀巢可以按照如下方式，使用您自愿提供的个人信息：</p>
        <p>雀巢重视对消费者个人隐私权的保护，为各位消费者设立本隐私权声明并将努力更新本声明的内容，使其更加全面并更加符合您的期望。</p>
        <p>1．隐私权条款的适用范围</p>
        <p>
          在您自愿提供您的相关信息（例如您的姓名、电话、电子邮件信箱、地址等，以下简称“个人信息”）之后，将由雀巢根据本隐私权声明予以保护。除以本声明第3条中规定的相关方式使用您提交的个人信息之外，在未征得您许可的情况下，雀巢不会将该信息对外公开或提供给其他第三方。</p>
        <p>2．可能要求您提供的信息类型</p>
        <p>（1）个人信息 </p>
        <p>（2）其他一般性统计信息，包括任何有关您或您任职餐厅的非身份性信息，例如您的购买习惯、产品和餐厅餐位数、人均消费等相关信息。</p>
        <p>3.信息的使用方式</p>
        <p>您同意，雀巢可以按照如下方式，使用您自愿提供的个人信息：</p>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        name: '',
        tel: '',
        address: '',
        area: '',
        dialogVisible: false,
        positionY: null
      }
    },
    methods: {
      save () {
        this.axios.post(
          '/meiji/public/admin/info/store',
          {name: this.name, tel: this.tel, address: this.area + this.address}
        ).then(res => {
          this.$message.success('保存成功！')
          this.$store.commit('moveDown')
        })
      },
      changeBtn () {
      },
      showDialog () {
        this.dialogVisible = true
      },
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

  .close {
    width: 6.67vw;
    position: absolute;
    top: -10vh;
    right: 2vw;
  }

  .agreeBox {
    margin-left: 10vw;
    margin-top: 5vw;
    span, button {
      float: left;
    }
    button {
      padding: 3px;
      color: #fff;
    }
    .agreeBtn {
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
