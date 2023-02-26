<script setup>
import HeroSection from '../components/HeroSection.vue';
import ProjectGrid from '../components/ProjectGrid.vue';
import { useHead } from '@vueuse/head';
import { useRoute } from 'vue-router';

const { fullPath, meta } = useRoute();
const { title, description } = meta;

useHead({
  title: `${title} | `,
  meta: [
  { name: 'description', content: description },
    { property: 'og:title', content: `${title} | Jana Wernick — Frontend Development` },
    { property: 'og:url', content: `https://janawernick.dev${fullPath}` }
  ],
  link: [
    { rel: 'canonical', href: `https://janawernick.dev${fullPath}` }
  ]
});
</script>

<template>
  <HeroSection />
  <ProjectGrid />
</template>
