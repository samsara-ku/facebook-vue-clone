<template>
  <div class="mainlayout-container">
    <Header
    :url="this.$route.path.substring(1)"
    />
    <div class="router-container">
      <MainLeftSideBar />
      <router-view />
      <MainRightSideBar />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import MainLeftSideBar from '@/components/MainLeftSideBar'
import MainRightSideBar from '@/components/MainRightSideBar'

export default {
  name: 'MainLayout',

  components: {
    Header,
    MainLeftSideBar,
    MainRightSideBar
  }
}
</script>

<style lang="scss" scoped>
  .router-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>