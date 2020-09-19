import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('@/views/Home.vue')
const Watch = () => import('@/views/Watch.vue')
const Group = () => import('@/views/Group.vue')
const Gaming = () => import('@/views/Gaming.vue')

const MainLayout = () => import('@/layout/MainLayout.vue')

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
