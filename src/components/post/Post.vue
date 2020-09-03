<template>
  <div class="post-container">
    <div class="header">
      <div class="left-col">
        <div>1</div>
        <div>2</div>
      </div>
      <div class="right-col">
        1
      </div>
    </div>
    <div class="content-box"></div>
    <div class="img-box"></div>
    <div class="social-box"></div>
    <div class="function-box"></div>
  </div>
</template>

<script>
export default {
  name: 'post'
}
</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>