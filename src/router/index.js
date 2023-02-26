import { createRouter, createWebHistory } from 'vue-router'

const HomeView = () => import('../views/HomeView.vue');
const AboutView = () => import('../views/AboutView.vue');
const LegalInfoView = () => import('../views/LegalInfoView.vue');
const ProjectView = () => import('../views/ProjectView.vue');
const PageNotFoundView = () => import('../views/PageNotFoundView.vue');

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Home',
        description: 'Moderne Frontend Entwicklung mit VueJS als leitendes SPA-Framework, Vue Router, Vuex, HTML, CSS, Bootstrap und Tailwind CSS. Entdecke mein Portfolio!',
        url: 'https://janawernick.dev',
      },
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: {
        title: 'Über mich',
        description: 'Moderne Frontend Entwicklung mit VueJS. Erfahre mehr über mich als Person, mein Stack und meinen Weg.',
        url: 'https://janawernick.dev/about',
      },
    },
    {
      path: '/impressum',
      name: 'legal-info',
      component: LegalInfoView,
      meta: {
        title: 'Impressum',
        description: 'Moderne Frontend Entwicklung mit VueJS als leitendes SPA-Framework, Vue Router, Vuex, HTML, CSS, Bootstrap und Tailwind CSS. Entdecke mein Portfolio!',
        url: 'https://janawernick.dev/legal-info',
      },
    },
    {
      path: '/projects/:project',
      name: 'project',
      component: ProjectView
    },
    {
      path: '/:notFound(.*)*',
      name: 'PageNotFound',
      component: PageNotFoundView,
      meta: {
        title: '404 — Seite nicht gefunden',
      },
    }

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
});

export default router
