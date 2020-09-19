<template>
  <div class="post-container">
    <div class="header padding">
      <div class="left-col">
        <div class="col">
          <img class="profile" src="../../assets/images/user-solid.svg" alt="none">
        </div>
        <div class="col">
          <div class="writer">
            <a href="">{{ this.writer }}</a>
          </div>
          <div class="time">
            {{ this.time }} · <img class="earth" src="../../assets/images/globe-americas-solid.svg" alt="hi">
          </div>
        </div>
      </div>
      <div class="right-col">
        <img class="settings" src="../../assets/images/ellipsis-h-solid.svg" alt="none">
      </div>
    </div>
    <div class="content-box padding">
      {{ this.content }}
    </div>
    <div class="img-box"></div>
    <div class="social-box padding">
      <div class="col">{{like}}</div>
      <div class="col">{{chatAndShare}}</div>
    </div>
    <div class="function-box padding">
      <div class="col">
        <img src="../../assets/images/thumbs-up-regular.svg" alt="thumbs_up"><span>좋아요</span>
      </div>
      <div class="col">
        <img src="../../assets/images/comment-alt-regular.svg" alt="chat"><span>댓글 달기</span>
      </div>
      <div class="col">
        <img src="../../assets/images/share-solid.svg" alt="share"><span>공유하기</span>
      </div>
    </div>
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
  },

  computed: {
    like() {
      return `this is like area`
    },

    chatAndShare() {
      return 'this is area'
    }
  },
}
</script>

<style lang="scss" scoped>
  .post-container {
    background-color: #ffffff;
    padding: 10px 0 5px 0;
    border-radius: 8px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);

    .padding {
      padding: 0px 15px;
    }
    
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      

      .left-col {
        display: flex;
        justify-content: center;
        align-items: center;

        .col:first-of-type {
          margin-right: 5px;
        }        

        .writer {
          font-size: 15px;
          font-wei0: 600;
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

    .content-box {
      margin: 10px 0;
    }

    .img-box {
      // height: 100px;
      // background-color: red;
    }
    
    .social-box {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .function-box {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      margin: 0 10px;
      box-shadow: inset 0 1px 0 0 rgba(0, 0, 0, 0.25);

      .col {
        width: 208px;
        height: 32px;
        color: rgb(28, 30, 33);;
        font-size: 15px;
        border-radius: 2px;
        cursor: pointer;        

        img {
          width: 18px;
          margin-right: 5px;
        }

        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
          background-color: rgba(0, 0, 0, 0.1);
        }
      }
    }

    &:not(:last-of-type) {
      margin-bottom: 10px;
    }
  }
</style>