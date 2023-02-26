import { createRouter, createWebHistory } from 'vue-router'

const HomeView = () => import('../views/HomeView.vue');
const AboutView = () => import('../views/AboutView.vue');
const LegalInfoView = () => import('../views/LegalInfoView.vue');
const ProjectView = () => import('../views/ProjectView.vue');
const PageNotFoundView = () => import('../views/PageNotFoundView.vue');

const projectMeta = [
  {
    name: 'vuews',
    title: 'Vuews Projekt',
    description: 'Vuews stellt mittels NYT Article Search API tagesaktuelle Nachrichten in aufbereiteter Form dar. Finde heraus, was das Projekt sonst noch so kann!'
  },
  {
    name: 'draggable-article',
    title: 'Draggable Article Projekt',
    description: 'Erstelle mit VueDraggable.next individuelle Artikel mit verschiebbaren Abschnitten und schaue sie dir in einer Vorschau an. Probier es jetzt aus!'
  },
  {
    name: 'trainer-codes',
    title: 'Trainer Codes Projekt',
    description: 'Leicht Freunde finden für Pokemon GO Spieler! Entdecke ein Projekt, das Freundes-Codes in aufbereiter Form und für alle Endgeräte leicht zugänglich darstellt.'
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
