import { createRouter, createWebHistory } from 'vue-router'

const HomeView = () => import('../views/HomeView.vue');
const AboutView = () => import('../views/AboutView.vue');
const ContactView = () => import('../views/ContactView.vue');
const ProjectView = () => import('../views/ProjectView.vue');
const PageNotFoundView = () => import('../views/PageNotFoundView.vue');

const projectTitles = [
  {
    name: 'vuews',
    title: 'Vuews Projekt',
  },
  {
    name: 'draggable-article',
    title: 'Draggable Article Projekt',
  },
  {
    name: 'trainer-codes',
    title: 'Trainer Codes Projekt',
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Home',
      },
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: {
        title: 'Über mich',
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

router.beforeEach((to, from, next) => {
  
  if (to.meta?.title) window.document.title = to.meta.title;
  
  if (to.params.project) {
    const [projectTitle] = projectTitles.filter(project => project.name === to.params.project);

    if (projectTitle) window.document.title = projectTitle.title;
  }

  window.document.title += ' — Portfolio Jana Wernick';

  return next();
});

export default router
