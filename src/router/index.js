import { createRouter, createWebHistory } from 'vue-router'

const HomeView = () => import('../views/HomeView.vue');
const AboutView = () => import('../views/AboutView.vue');
const ContactView = () => import('../views/ContactView.vue');
const ProjectTCV1View = () => import('../views/ProjectTCV1View.vue');

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
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/projects/trainercodes-v1',
      name: 'trainercodes-v1',
      component: ProjectTCV1View
    },
    // {
    //   path: '/projects/trainercodes-v2',
    //   name: 'project-detail',
    //   component: ProjectView
    // },
    // {
    //   path: '/projects/news-api',
    //   name: 'project-detail',
    //   component: ProjectView
    // }

  ],

  scrollBehavior(to, from, savedPosition) {
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
  },
})

export default router
