import { createRouter, createWebHistory } from 'vue-router'

const HomeView = () => import('../views/HomeView.vue');
const AboutView = () => import('../views/AboutView.vue');

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },

  ],

  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      if (to.hash) {
        return {
          el: to.hash,
          behavior: 'smooth',
          // Since navbar is sticky add scroll top position for hashes
          top: 75,
        }
      } else if (savedPosition) {
        return savedPosition;
      } else {
        return { top: 0 }
      }
      
    }
  },
})

export default router
