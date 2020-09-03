<template>
  <div>
    Hi! This area is "Home.vue" area
    <PostList />
  </div>
</template>

<script>
import PostList from '@/components/post/PostList'

export default {
  name: 'Home',
  components: {
    PostList
  }
}
</script>

<style lang="scss" scoped>

</style>