import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import MenuView from '@/views/MenuView.vue'
import SampleView from '@/views/SampleView.vue'
import ValidationSampleView from '@/views/ValidationSampleView.vue'
import VideoSampleView from '@/views/VideoSampleView.vue'
import store from '@/store'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: {
      isPublic: true,
    },
  },
  {
    path: '/menu',
    name: 'menu',
    component: MenuView,
  },
  {
    path: '/sample',
    name: 'sample',
    component: SampleView,
  },
  {
    path: '/validation-sample',
    name: 'validation-sample',
    component: ValidationSampleView,
  },
  {
    path: '/video-sample',
    name: 'video-sample',
    component: VideoSampleView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, _from, next) => {
  if (to.matched.some((page) => page.meta.isPublic) || store.getters['users/isAuthenticated']) {
    next()
  } else {
    next('/login')
  }
})

export default router
