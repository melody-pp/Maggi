<template>
  <div class="comments">
    <img style="width: 56.4vw;margin-top: 2vh;" src="../../assets/comments/theme.png" alt="">
    <div class="rank-type">
      <div :class="{active: rankType === 'likedNum'}" @click="rankType='likedNum'">心意排行榜</div>
      <div :class="{active: rankType === 'createTime'}" @click="rankType='createTime'">最新上榜</div>
    </div>
    <div class="rankContent" ref="rankContent" @touchmove="touchmove" @touchstart="touchstart">
      <CommentItem v-for="(comment, index) of comments" v-bind="comment" :index="index" :rankType="rankType"
                   :key="index"/>
    </div>
    <div class="btnBox">
      <img class="" src="../../assets/comments/button1.png" @click="">
      <img class="" src="../../assets/comments/button2.png" @click="toPersonalInfo">
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  import CommentItem from './CommentItem'

  export default {
    name: 'comments',
    components: {CommentItem},
    data () {
      return {
        positionY: null,
        rankType: 'likedNum',
        comments: [
          {
            pic: 'http://img1.imgtn.bdimg.com/it/u=3746075707,1914896074&fm=27&gp=0.jpg',
            content: '我是张大厨：2018年我想对父母说，老爸老妈儿子不在身边要照顾好自己，对自己好一点',
            liked: Math.random() > 0.5,
            likes: Math.floor(Math.random() * 500)
          },
          {
            pic: 'http://img1.imgtn.bdimg.com/it/u=3746075707,1914896074&fm=27&gp=0.jpg',
            content: '我是张大厨：2018年我想对父母说，老爸老妈儿子不在身边要照顾好自己，对自己好一点',
            liked: Math.random() > 0.5,
            likes: Math.floor(Math.random() * 500)
          },
          {
            pic: 'http://img1.imgtn.bdimg.com/it/u=3746075707,1914896074&fm=27&gp=0.jpg',
            content: '我是张大厨：2018年我想对父母说，老爸老妈儿子不在身边要照顾好自己，对自己好一点',
            liked: Math.random() > 0.5,
            likes: Math.floor(Math.random() * 500)
          },
          {
            pic: 'http://img1.imgtn.bdimg.com/it/u=3746075707,1914896074&fm=27&gp=0.jpg',
            content: '我是张大厨：2018年我想对父母说，老爸老妈儿子不在身边要照顾好自己，对自己好一点',
            liked: Math.random() > 0.5,
            likes: Math.floor(Math.random() * 500)
          },
          {
            pic: 'http://img1.imgtn.bdimg.com/it/u=3746075707,1914896074&fm=27&gp=0.jpg',
            content: '我是张大厨：2018年我想对父母说，老爸老妈儿子不在身边要照顾好自己，对自己好一点',
            liked: Math.random() > 0.5,
            likes: Math.floor(Math.random() * 500)
          },
          {
            pic: 'http://img1.imgtn.bdimg.com/it/u=3746075707,1914896074&fm=27&gp=0.jpg',
            content: '我是张大厨：2018年我想对父母说，老爸老妈儿子不在身边要照顾好自己，对自己好一点',
            liked: Math.random() > 0.5,
            likes: Math.floor(Math.random() * 500)
          },
          {
            pic: 'http://img1.imgtn.bdimg.com/it/u=3746075707,1914896074&fm=27&gp=0.jpg',
            content: '我是张大厨：2018年我想对父母说，老爸老妈儿子不在身边要照顾好自己，对自己好一点',
            liked: Math.random() > 0.5,
            likes: Math.floor(Math.random() * 500)
          },
          {
            pic: 'http://img1.imgtn.bdimg.com/it/u=3746075707,1914896074&fm=27&gp=0.jpg',
            content: '我是张大厨：2018年我想对父母说，老爸老妈儿子不在身边要照顾好自己，对自己好一点',
            liked: Math.random() > 0.5,
            likes: Math.floor(Math.random() * 500)
          },
          {
            pic: 'http://img1.imgtn.bdimg.com/it/u=3746075707,1914896074&fm=27&gp=0.jpg',
            content: '我是张大厨：2018年我想对父母说，老爸老妈儿子不在身边要照顾好自己，对自己好一点',
            liked: Math.random() > 0.5,
            likes: Math.floor(Math.random() * 500)
          },
          {
            pic: 'http://img1.imgtn.bdimg.com/it/u=3746075707,1914896074&fm=27&gp=0.jpg',
            content: '我是张大厨：2018年我想对父母说，老爸老妈儿子不在身边要照顾好自己，对自己好一点',
            liked: Math.random() > 0.5,
            likes: Math.floor(Math.random() * 500)
          },
          {
            pic: 'http://img1.imgtn.bdimg.com/it/u=3746075707,1914896074&fm=27&gp=0.jpg',
            content: '我是张大厨：2018年我想对父母说，老爸老妈儿子不在身边要照顾好自己，对自己好一点',
            liked: Math.random() > 0.5,
            likes: Math.floor(Math.random() * 500)
          },
          {
            pic: 'http://img1.imgtn.bdimg.com/it/u=3746075707,1914896074&fm=27&gp=0.jpg',
            content: '我是张大厨：2018年我想对父母说，老爸老妈儿子不在身边要照顾好自己，对自己好一点',
            liked: Math.random() > 0.5,
            likes: Math.floor(Math.random() * 500)
          },
          {
            pic: 'http://img1.imgtn.bdimg.com/it/u=3746075707,1914896074&fm=27&gp=0.jpg',
            content: '我是张大厨：2018年我想对父母说，老爸老妈儿子不在身边要照顾好自己，对自己好一点',
            liked: Math.random() > 0.5,
            likes: Math.floor(Math.random() * 500)
          },
          {
            pic: 'http://img1.imgtn.bdimg.com/it/u=3746075707,1914896074&fm=27&gp=0.jpg',
            content: '我是张大厨：2018年我想对父母说，老爸老妈儿子不在身边要照顾好自己，对自己好一点',
            liked: Math.random() > 0.5,
            likes: Math.floor(Math.random() * 500)
          },
          {
            pic: 'http://img1.imgtn.bdimg.com/it/u=3746075707,1914896074&fm=27&gp=0.jpg',
            content: '我是张大厨：2018年我想对父母说，老爸老妈儿子不在身边要照顾好自己，对自己好一点',
            liked: Math.random() > 0.5,
            likes: Math.floor(Math.random() * 500)
          },
        ]
      }
    },
    methods: {
      touchstart (event) {
        this.positionY = event.touches[0].clientY
        window.disableFullpage = !!document.querySelector('.rankContent').scrollTop
      },
      touchmove (event) {
        const currentY = event.touches[0].clientY
        this.$refs.rankContent.scrollTop += (this.positionY - currentY) * 2
        this.positionY = currentY
      },
      toPersonalInfo () {
        $('#fullpage').fullpage.moveSectionDown()
      }
    }
  }
</script>

<style scoped lang="scss">
  .rank-type {
    font-size: 0;
    text-align: center;
    padding: 4vw 0;
    div {
      color: #fff;
      display: inline-block;
      font-size: 16px;
      padding: 2vw 5vw;
      border: 1px solid #fff;
      width: 20vw;
    }
    .active {
      color: orange;
      background: #fff;
    }
  }

  .rankContent {
    height: 65vh;
    overflow: auto;
  }

  .comments {
    background: url("../../assets/index/background.jpg") no-repeat;
    background-size: cover;
    overflow: hidden;
    height: 100vh;
  }

  .btnBox {
    position: absolute;
    bottom: 1.5vh;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    img {
      width: 36.27vw;
      vertical-align: middle;
    }
  }
</style>
