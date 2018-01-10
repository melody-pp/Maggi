<template>
  <div>
    <div class="rank-type">
      <div :class="{active: rankType === 'createTime'}" @click="rankType='createTime'">发布时间排行</div>
      <div :class="{active: rankType === 'likedNum'}" @click="rankType='likedNum'">点赞人数排行</div>
    </div>
    <CommentItem v-for="(comment, index) of comments" v-bind="comment" :index="index" :key="index"/>
  </div>
</template>

<script>
  import CommentItem from './CommentItem'

  export default {
    name: 'comments',
    components: {CommentItem},
    data () {
      return {
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
  }
</script>

<style scoped lang="scss">
  .rank-type {
    font-size: 0;
    text-align: center;
    padding: 5vw 0;
    div {
      color: #fff;
      display: inline-block;
      font-size: 18px;
      padding: 2vw 5vw;
      border: 1px solid #fff;
    }
    .active {
      color: orange;
      background: #fff;
    }
  }

</style>
