<template>
  <div class="header">
    <div class="left-container">
      <router-link to='home'>
        <img src="../assets/images/facebook-brands.svg" alt="facebook_logo">
      </router-link>
      <label>
        <div :class="'search-img'"></div>
        <input type="text" placeholder="Facebook 검색">
      </label>
    </div>
    <div class="middle-container">
      <div
        class="img-box"
        v-for="(elem, index) in middleSrc"
        :id="elem.alt"
        :key="index"
        :style="{'background': 'url(' + `${elem.path}` + ') center/17.5% no-repeat'}"
        @click="navigator"
      >
      </div>
    </div>
    <div class="right-container">
      <div class="profile-box">
        <img src="../assets/images/profile.jpeg" alt="profile">
        <span>구윤회</span>
      </div>
      <div
        class="img-box"
        v-for="(elem, index) in rightSrc"
        :key="index"
        :style="{'background': '#e2e5e9 url(' + `${elem.path}` + ') center/40% no-repeat'}"
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
      currentPage: null,
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
  },

  methods: {
    navigator(e) {
      this.currentPage != null ? this.currentPage.classList.remove('target') : ''

      if(!e.target.classList.contains('target')) {
        e.target.classList.add('target')
        this.currentPage = e.target
      }
      return this.$router.push(e.target.id)
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 16px;
  background-color: #ffffff;
  height: 60px;
  box-shadow: 0px 5px 10px #efefef;
  z-index: 1;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:not(:nth-of-type(2)) {
      img {
        width: 40px;
        height: auto;
      }

      :not(:last-child) {
        margin-right: 10px;
      }
    }
  }
  
  .left-container {
    label {
      width: 240px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-content: center;
      position: relative;
      cursor: pointer;

      .search-img {
        position: absolute;
        width: 16px;
        height: 17px;
        top: 12px;
        left: 12px;
        background: url('../assets/images/search-solid.svg') center no-repeat
      }

      input {
        width: 208px;
        height: 24px;
        padding: 7px 16px 9px 16px;
        background-color: #eff2f5;
        border-radius: 50px;
        border: none;
        text-indent: 20px;
        cursor: pointer;

        &:focus {
          outline: none;
        }
      }
    }
  }

  .middle-container {
    .img-box {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 125px;
      height: 60px;

      &:nth-of-type(2) {
        position: relative;

        &:after {
          position: absolute;
          width: 10px;
          height: 10px;
          content: "";
          background: url('../assets/images/play-solid.svg') center/50% no-repeat;
          top: 22.5px;
          right: 57px;
        }
      }
      
      &.target {
        color: #1b77f2;
        box-shadow: inset 0 -3px 0 0 #1b77f2;
      }

      &:hover {
        background-color: rgba(0, 0, 0, 0.1) !important;
      }
    }
  }

  .right-container {
    .profile-box {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 4px 10px 4px 4px;
      border-radius: 18px;
      font-size: 15px;

      img {
        width: 28px;
        height: auto;
        border-radius: 100%;
        margin-right: 6px;
      }

      &:hover {
        background-color: rgba(0, 0, 0, 0.1);
      }
    }

    .img-box {
      width: 40px;
      height: 40px;
      border: none;
      border-radius: 100%;

      &:hover {
        background-color: rgba(0, 0, 0, 0.2) !important;
      }
    }
  }
}

@media screen and (max-width: 1110px) {
  .header {
    .left-container {
      label {
        width: 40px;

        input {
          width: 40px;
          height: 40px;
          padding: 0;

          &::placeholder {
            color: #eff2f5;
          }
        }
      }
    }

    .middle-container {
      .img-box {
        width: 75px;
        background-size: 35% !important;

        &:nth-of-type(2) {
          &:after {
            width: 8.5px;
            height: 8.5px;
            content: "";
            background: url('../assets/images/play-solid.svg') center/100% no-repeat;
            top: 22.5px;
            right: 33.5px;
          }
        }
      }
    }

    .right-container {
      .profile-box {
        display: none;
      }

      .img-box {
        background-size: 40% !important;
      }
    }
  }
}
</style>