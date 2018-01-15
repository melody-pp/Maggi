<template>
  <div class="comment">

    <img v-if="index<3" class="ranking-img" :src="imgUrls[index]">

    <span v-else class="ranking">{{index+1}}</span>
    <img :src="pic" alt="头像">
    <div class="right">
      <div class="content">
        {{content}}
      </div>
      <div class="info">
        <img ref="liked" class="liked" src="../../assets/comments/button.png" alt="">
        <span class="likesNum">{{likes}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import { showUpvote, sample } from '../../utils/utils'

  export default {
    name: 'comment-item',
    props: ['pic', 'content', 'liked', 'likes', 'index'],
    data () {
      return {
        imgUrls: [
          require('../../assets/comments/NO1.png'),
          require('../../assets/comments/NO2.png'),
          require('../../assets/comments/NO3.png'),
        ]
      }
    },
    mounted () {
      const colors = ['#abcdef', '#bbbbbb', '#cccccc', '#dddddd']
      this.$refs.liked.addEventListener('touchstart', event => showUpvote(event, sample(colors)))
    }
  }
</script>

<style scoped lang="scss">
  .comment {
    color: #fff;
    font-size: 14px;
    text-align: left;
    position: relative;
    padding: 5vw 0 0 24vw;

    > img {
      top: 5vw;
      left: 12vw;
      position: absolute;
      width: 10vw;
      border-radius: 50%;
    }

    .ranking-img {
      width: 4.8vw;
      left: 4vw;
      top: 3.5vh;
    }
  }

  .right {
    padding: 0 5vw 1vw 0;
    border-bottom: 1px solid #444;
  }

  .ranking {
    color: orange;
    font-size: 16px;
    font-style: italic;
    font-weight: 300;
    margin-right: 1vw;
    position: absolute;
    top: 4.5vh;
    left: 5vw;
  }

  .info {
    text-align: right;

    .liked {
      width: 5.2vw;
      vertical-align: -5px;
    }
    .likesNum {
      display: inline-block;
      width: 8vw;
      text-align: center;
    }
  }
</style>
