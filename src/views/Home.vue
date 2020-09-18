<template>
  <div class="home-container">
    <div class="row">
      <Story />
    </div>
    <div class="row">
      <Thought :name="'구윤회'"/>
    </div>
    <div class="row">
      <VideoTalk />
    </div>
    <div class="row">
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
  </div>
</template>

<script>
import Post from '@/components/post/Post'
import Story from '@/components/story/Story'
import Thought from '@/components/thought/Thought'
import VideoTalk from '@/components/videotalk/VideoTalk'

export default {
  name: 'Home',

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

  components: {
    Post,
    Story,
    Thought,
    VideoTalk
  }
}
</script>

<style lang="scss" scoped>
  .home-container {
    width: 680px;

    .row {
      &:nth-of-type(1) {
        margin: 25px 0;
      }

      &:nth-of-type(3) {
        margin: 15px 0;
      }
    }
  }
</style>