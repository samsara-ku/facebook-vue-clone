<template>
  <div class="story-container">
    <div class="story-box">
      <div class="small-profile"></div>
      <div class="name">123</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .story-container {
    position: relative;
    width: 103px;
    height: 190px;
    margin-right: 10px;
    margin: 25px 0;

    .story-box {
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
      position: relative;
      height: inherit;
      border-radius: 10px;

      .small-profile {
        position: absolute;
        top: 20px;
        left: 15px;
        width: 30px;
        height: 30px;
        border-radius: 100%;
        border: 5px solid #1b77f2;
      }
      .name {
        position: absolute;
        left: 0;
        bottom: 0;
        height: 11px;
        padding: 12px;
        color: #fff;
      }
    }

  }
</style>