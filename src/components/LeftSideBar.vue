<template>
  <div class="sidebar-container">
    <li>
      <ul 
        v-for="elem in field"
        :key="elem.alt"
      >
        {{elem.text}}
      </ul>
    </li>
  </div>
</template>

<script>
export default {
  name: 'LeftSideBar',

  data() {
    return {
      field: [
        {
          path: require('@/assets/images/profile.jpeg'),
          alt: 'profile',
          text: '구윤회'
        },
        {
          path: require('@/assets/images/profile.jpeg'),
          alt: 'corona',
          text: '코로나 19 정보센터'
        },
        {
          path: require('@/assets/images/profile.jpeg'),
          alt: 'friends',
          text: '친구'
        },
        {
          path: require('@/assets/images/profile.jpeg'),
          alt: 'group',
          text: '그룹'
        },
        {
          path: require('@/assets/images/profile.jpeg'),
          alt: 'video',
          text: '동영상'
        },
        {
          path: require('@/assets/images/profile.jpeg'),
          alt: 'event',
          text: '이벤트'
        },
        {
          path: require('@/assets/images/profile.jpeg'),
          alt: 'past',
          text: '과거의 오늘'
        }
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
  .sidebar-container {
    padding: 16px 8px 0 8px;
    height: 100%;
    overflow: auto;
    background-color: red;
  }
</style>