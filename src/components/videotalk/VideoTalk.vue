<template>
  <div class="videotalk-container">
    <div class="row">
      <div class="col">
        <img src="../../assets/images/video-solid.svg" alt="">
        <span><b>영상톡 모임</b> · 친구와의 영상 통화</span>
        <img src="../../assets/images/info-circle-solid.svg" alt="">
      </div>
      <div class="col">
        <span>영상톡 모임 만들기</span>
      </div>
    </div>
    <div class="row">
      <button
        :class="{left: true, disabled: decLimitisValid}"
        @click="substract"
      >
        prev
      </button>
      <div
        class="img-box"
        v-for="(e, i) in filter"
        :key="i"
      >
        {{ e }}
      </div>
      <button
        :class="{right: true, disabled: incLimitisValid}"
        @click="add"
      >
        next
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      temp: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],
      limit: 12
    }
  },

  methods: {
    add() {
      this.limit += 12
    },
    substract() {
      this.limit -= 12
    }
  },

  computed: {
    filter() {
      return this.temp.filter((e, i) => this.limit - 12 <= i  && i < this.limit)
    },

    incLimitisValid() {
      return this.limit + 12 - this.temp.length > 12 ? true : false
    },

    decLimitisValid() {
      return this.limit - 24 < 0 ? true : false
    }
  },
}
</script>

<style lang="scss" scoped>
  .videotalk-container {
    padding: 12px 16px 10px 16px;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);

    .row {
      display: flex;
      align-items: center;

      &:nth-of-type(1) {
        justify-content: space-between;

        .col {
          &:nth-of-type(1) {
            display: flex;
            align-items: center;
            font-size: 15px;

            span {
              color: rgb(101, 103, 107);

              b {
                color: black;
                font-weight: 500;
              }
              margin-right: 10px;
            }

            img:nth-of-type(1) {
              width: 20px;
              height: 20px;
              margin-right: 8px;
            }

            img:nth-of-type(2) {
              padding: 6px;
              width: 12px;
              height: 12px;
              border-radius: 50%;
              cursor: pointer;

              &:hover {
                background-color: rgba(0, 0, 0, 0.1);
              }
            }
          }

          &:nth-of-type(2) {
            color: rgb(24, 118, 242);
            font-size: 15px;
            cursor: pointer;
          }
        }
      }

      &:nth-of-type(2) {
        position: relative;
        justify-content: space-around;
        align-items: center;
        padding: 12px 0 0 0;

        .img-box {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: red;
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }
        
        button {
          position: absolute;
          width: 48px;
          height: 48px;
          border: none;
          background-color: #fff;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 8px 0px, rgba(0, 0, 0, 0.1) 0px 0px 0px 1px;
          border-radius: 50%;
          cursor: pointer;

          &.left {
            left: 15px;
          }

          &.right {
            right: 15px;
          }

          &.disabled {
            display: none;
          }
        }
      }
    }
  }
</style>