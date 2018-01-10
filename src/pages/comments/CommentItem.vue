<template>
  <div class="comment">
    <img :src="pic" alt="头像">
    <div class="right">
      <div class="content">
        <span class="ranking">NO{{index+1}}</span>
        {{content}}
      </div>
      <div class="info">
        <i :class="{liked}"></i>
        <span class="likes">{{likes}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'comment-item',
    props: ['pic', 'content', 'liked', 'likes', 'index']
  }
</script>

<style scoped lang="scss">
  .comment {
    color: #fff;
    font-size: 14px;
    position: relative;
    padding: 5vw 0 0 14vw;

    > img {
      top: 5vw;
      left: 2vw;
      position: absolute;
      width: 10vw;
      border-radius: 50%;
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
  }

  .info {
    text-align: right;

    i.liked {
      color: red;
    }
  }
</style>
