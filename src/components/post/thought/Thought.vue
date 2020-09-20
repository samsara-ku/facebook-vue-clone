<template>
  <div class="thought-container">
    <div class="row">
      <div class="col">
        <img src="../../../assets/images/profile.jpeg" alt="">
      </div>
      <div class="col">
        {{name}}님, 무슨 생각을 하고 계신가요?
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="button">라이브 방송</div>
      <div class="button">사진/동영상</div>
      <div class="button">기분/활동</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Thought',

  props: {
    name: String
  }
}
</script>

<style lang="scss" scoped>
  .thought-container {
    padding: 12px 16px 10px 16px;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);

    .row {
      display: flex;
      justify-content: center;
      align-items: center;

      &:nth-of-type(1) {
        margin-bottom: 12px;

        .col:nth-of-type(1) {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 8px;

          img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
          }
        }

        .col:nth-of-type(2) {
          flex: 1;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          border-radius: 20px;
          font-size: 17px;
          color: rgb(101, 103, 107);
          background-color: rgb(240, 242, 245);
          height: 24px;
          padding: 8px 12px;
          cursor: pointer;
        }
      }

      &:nth-of-type(2) {
        margin-top: 8px;
      }

      .button {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        width: 200px;
        height: 24px;
        padding: 8px;
        color: rgb(101, 103, 107);
        font-weight: 600;
        font-size: 15px;
        cursor: pointer;

        &:nth-of-type(1) {
          &:before {
            fill: blue;
            background: url('../../../assets/images/video-solid.svg') center/100% no-repeat;
          }
        }

        &:nth-of-type(2) {
          &:before {
            color: blue;
            background: url('../../../assets/images/images-solid.svg') center/100% no-repeat;
          }
        }

        &:nth-of-type(3) {
          &:before {
            background: url('../../../assets/images/smile-regular.svg') center/100% no-repeat;
          }
        }

        &:before {
          width: 25px;
          height: 25px;
          margin-right: 8px;
          content: "";
        }

        &:hover {
          background-color: rgba(0, 0, 0, 0.1) !important;
        }
      }
    }

    hr {
      border: 0;
      margin: 0;
      height: 1px;
      background: #ccc;
    }
  }
</style>