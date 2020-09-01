<template>
  <div id="app">
    <MainLayout />
  </div>
</template>

<script>
import MainLayout from '@/layout/MainLayout.vue'

export default {
  name: 'app',

  components: {
    MainLayout
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
}

#app {
  width: 100%;
}
</style>
