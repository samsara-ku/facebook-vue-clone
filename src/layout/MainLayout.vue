<template>
  <div class="mainlayout-container">
    <Header
      class="header"
      :url="this.$route.path.substring(1)"
    />
    <div class="router-container">
      <LeftSideBar 
        class="fixed left"
      />
      <router-view />
      <RightSideBar
        v-if="this.$route.path.substring(1) == 'home'"
        class="fixed right"
      />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import LeftSideBar from '@/components/LeftSideBar'
import RightSideBar from '@/components/RightSideBar'

export default {
  name: 'MainLayout',

  components: {
    Header,
    LeftSideBar,
    RightSideBar
  }
}
</script>

<style lang="scss" scoped>
  .mainlayout-container {
    .header {
      width: 98.5%;
      position: fixed;
    }

    .router-container {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;

      .fixed {
        position: fixed;
        top: 60px;

        &.left {
          left: 0;
        }

        &.right {
          right: 0;
        }
      }
    }
  }
</style>