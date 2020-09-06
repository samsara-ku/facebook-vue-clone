import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Watch from '@/views/Watch.vue'
import Group from '@/views/Group.vue'
import Gaming from '@/views/Gaming.vue'

import MainLayout from '@/layout/MainLayout.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        redirect: 'home'
      },
      {
        path: 'home',
        name: 'Home',
        component: Home
      },
      {
        path: 'watch',
        name: 'Watch',
        component: Watch
      },
      {
        path: 'group',
        name: 'Group',
        component: Group
      },
      {
        path: 'gaming',
        name: 'Gaming',
        component: Gaming
      }
    ]
  }, 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
