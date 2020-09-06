<template>
  <div class="home-container">
    <Story />
    <PostList />
  </div>
</template>

<script>
import Story from '@/components/story/Story'
import PostList from '@/components/post/PostList'

export default {
  name: 'Home',

  components: {
    Story,
    PostList
  }
}
</script>

<style lang="scss" scoped>
  .home-container {
    width: 680px;
  }
</style>