<script setup>
import { RouterView} from 'vue-router';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import { useHead } from '@vueuse/head';

useHead({
  titleTemplate: '%s Jana Wernick — Frontend Development',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
    { 'http-equiv': 'x-ua-compatible', content: 'IE=edge' },
    { name: 'description', content: 'Moderne Frontend Entwicklung mit VueJS als leitendes SPA-Framework, Vue Router, Vuex, HTML, CSS, Bootstrap und Tailwind CSS. Entdecke mein Portfolio!' },
    { name: 'author', content: 'Jana Wernick' },

    // OG
    { property: 'og:title', content: 'Jana Wernick — Frontend Development' },
    { property: 'og:description', content: 'Moderne Frontend Entwicklung mit VueJS als leitendes SPA-Framework, Vue Router, Vuex, HTML, CSS, Bootstrap und Tailwind CSS. Entdecke mein Portfolio!' },
    { property: 'og:image', content: 'https://portfolio-jamawe.s3.us-east-2.amazonaws.com/portfolio_og_android-chrome-512x512.png' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: `https://janawernick.dev` },
  ],
  link: [
    { rel: 'canonical', href: `https://janawernick.dev` },
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'apple-touch-icon', type: 'image/png', href: 'https://portfolio-jamawe.s3.us-east-2.amazonaws.com/portfolio_apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: 'https://portfolio-jamawe.s3.us-east-2.amazonaws.com/portfolio_favicon-16x16.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'https://portfolio-jamawe.s3.us-east-2.amazonaws.com/portfolio_favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '192x192', href: 'https://portfolio-jamawe.s3.us-east-2.amazonaws.com/portfolio_android-chrome-192x192.png' },
    { rel: 'icon', type: 'image/png', sizes: '512x512', href: 'https://portfolio-jamawe.s3.us-east-2.amazonaws.com/portfolio_android-chrome-512x512.png' },
  ]
});
</script>

<template>
  <Navbar/>
  <main class="main">
    <RouterView />
  </main>
  <Footer />
</template>

<style>
@font-face {
  font-family: 'Roboto Black';
  src: local('Roboto Black'), local('Roboto-Black'),
  url(./assets/fonts/Roboto-Black.ttf) format('truetype');
}

@font-face {
  font-family: 'Roboto Regular';
  src: local('Roboto Regular'), local('Roboto-Regular'),
  url(./assets/fonts/Roboto-Regular.ttf) format('truetype');
}
@font-face {
  font-family: 'Roboto Medium';
  src: local('Roboto Medium'), local('Roboto-Medium'),
  url(./assets/fonts/Roboto-Medium.ttf) format('truetype');
}
.main {
  max-width: 50rem;
  margin-left: auto;
  margin-right: auto;
}
/* header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
