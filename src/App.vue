<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
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
