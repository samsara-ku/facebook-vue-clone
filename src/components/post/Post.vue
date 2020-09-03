<template>
  <div class="post-container">
    <div class="header">
      <div class="left-col">
        <div class="col">
          <img src="" alt="unkown">
        </div>
        <div class="col">
          <div class="writer">
            {{ this.writer }}
          </div>
          <div class="time">
            {{ this.time }} • 
          </div>
        </div>
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
  name: 'post',

  props: {
    writer: {
      type: String,
      default: '기본값입니다'
    },
    
    time: {
      type: String,
      default: '00:00:00'
    },

    totalsocialres: {
      type: Number,
      default: 0
    },

    reply: {
      type: Number,
      default: 1
    },

    share: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left-col {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>