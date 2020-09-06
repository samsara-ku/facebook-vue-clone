<template>
  <div class="post-list-container">
    123
    <Post 
      v-for="(e, i) in postInfoField"
      :key="i"
      :writer="e.writer"
      :time="e.time"
      :totalSocialRes="e.totalSocialRes"
      :reply="e.reply"
      :share="e.share"
      :content="e.content"
    />
  </div>
</template>

<script>
import Post from './Post'

export default {
  name: 'postlist',
  components: {
    Post
  },

  data() {
    return {
      postInfoField: [
        {
          writer: '구윤회',
          time: '18:00:00',
          totalSocialRes: 123,
          reply: 12,
          share: 3,
          content: '오늘 밥 먹었니?'
        },
        {
          writer: '박성혁',
          time: '18:00:00',
          totalSocialRes: 123,
          reply: 12,
          share: 3,
          content: '오늘 밥 먹었니?'
        },
        {
          writer: '김진호',
          time: '18:00:00',
          totalSocialRes: 123,
          reply: 12,
          share: 3,
          content: '오늘 밥 먹었니?'
        },
        {
          writer: '김재형',
          time: '18:00:00',
          totalSocialRes: 123,
          reply: 12,
          share: 3,
          content: '오늘 밥 먹었니?'
        },
        {
          writer: '박우진',
          time: '18:00:00',
          totalSocialRes: 123,
          reply: 12,
          share: 3,
          content: '오늘 밥 먹었니?'
        },
        {
          writer: '김유창',
          time: '18:00:00',
          totalSocialRes: 123,
          reply: 12,
          share: 3,
          content: '오늘 밥 먹었니?'
        }
      ]
    }
  },
}
</script>

<style>

</style>