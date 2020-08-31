<template>
  <div class="header">
    <div class="left-container">
      <img src="../assets/images/home-solid.svg" alt="facebook_logo">
      <input type="text">
    </div>
    <div class="middle-container">
      <div
        class="img-box"
        v-for="(elem, index) in middleSrc"
        :key="index"
      >
        <img :src="elem.path" :alt="elem.alt">
      </div>
    </div>
    <div class="right-container">
      <div class="profile-box">
        <img src="" alt="profile">
        <span>구윤회</span>
      </div>
      <div
        class="img-box"
        v-for="(elem, index) in rightSrc"
        :key="index"
        :style="{'background': '#e2e5e9 url(' + `${elem.path}` + ') center/50% no-repeat'}"
      >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',

  data() {
    return {
      middleSrc: [
        {
          path: require(`../assets/images/home-solid.svg`),
          alt: 'home'
        },
        {
          path: require('../assets/images/desktop-solid.svg'),
          alt: 'watch'
        },
        {
          path: require('../assets/images/users-solid.svg'),
          alt: 'group'
        },
        {
          path: require('../assets/images/gamepad-solid.svg'),
          alt: 'gaming'
        }
      ],
      rightSrc: [
        {
          path: require(`../assets/images/plus-solid.svg`),
          alt: 'plus'
        },
        {
          path: require('../assets/images/facebook-messenger-brands.svg'),
          alt: 'facebook-messenger'
        },
        {
          path: require('../assets/images/bell-solid.svg'),
          alt: 'bell'
        },
        {
          path: require('../assets/images/caret-down-solid.svg'),
          alt: 'down'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 10px;
  background-color: #ffffff;
  height: 50px;
  box-shadow: 0px 5px 10px #efefef;
  z-index: 1;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;

    &:not(:nth-of-type(2)) {
      img {
        width: 42px;
        height: auto;
      }

      :not(:last-child) {
        margin-right: 10px;
      }
    }
  }

  .middle-container {
    .img-box {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 180px;

      img {
        width: 36px;
        height: 36px;
      }

      &:nth-of-type(2) {
        position: relative;

        &:after {
          position: absolute;
          width: 10px;
          height: 10px;
          content: "";
          background: url('../assets/images/play-solid.svg') no-repeat;
          top: 10px;
          right: 84px;
        }
      }

      &:nth-of-type(3) {
        img {
          border: 4px solid black;
          border-radius: 100%;
        }
      }
    }
  }

  .right-container {
    .img-box {
      width: 40px;
      height: 40px;
      border: none;
      border-radius: 100%;
    }
  }
}
</style>