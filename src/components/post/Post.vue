<template>
  <div class="post-container">
    <div class="header">
      <div class="left-col">
        <div class="col">
          <img class="profile" src="../../assets/images/user-solid.svg" alt="none">
        </div>
        <div class="col">
          <div class="writer">
            <a href="">{{ this.writer }}</a>
          </div>
          <div class="time">
            {{ this.time }} • <img class="earth" src="../../assets/images/globe-americas-solid.svg" alt="hi">
          </div>
        </div>
      </div>
      <div class="right-col">
        <img class="settings" src="../../assets/images/ellipsis-h-solid.svg" alt="none">
      </div>
    </div>
    <div class="content-box">
      {{ this.content }}
    </div>
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
    },

    content: {
      type: String,
      default: 'None'
    }
  }
}
</script>

<style lang="scss" scoped>
  .post-container {
    width: 680px;

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .left-col {
        display: flex;
        justify-content: center;
        align-items: center;      

        .writer {
          font-size: 15px;
          font-weight: 600;
          
          a:link, a:visited, a:active, a:hover {
            color: black;
            text-decoration: none;
          }
        }

        .time {
          font-size: 13px;

          .earth {
            width: 12px;
            height: 12px;
          }
        }

        .profile {
          width: 40px;
          height: 40px;
          border-radius: 100%;
        }
      }

      .right-col {
        .settings {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
</style>