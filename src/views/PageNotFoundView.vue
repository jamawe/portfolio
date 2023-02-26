<script setup>
import NotFound from '../components/NotFound.vue';
import { ref } from "vue";
import { useHead } from '@vueuse/head';
import { useRoute } from 'vue-router';


const { fullPath, meta } = useRoute();
const { title } = meta;

useHead({
  title: `${title} | `,
  meta: [
    { property: 'og:title', content: `${title} | Jana Wernick — Frontend Development` },
    { property: 'og:url', content: `https://janawernick.dev${fullPath}` }
  ],
  link: [
    { rel: 'canonical', href: `https://janawernick.dev${fullPath}` }
  ]
});

const notFoundMsg = ref('Die angefragte Seite konnte nicht gefunden werden.');
</script>

<template>
    <NotFound :msg="notFoundMsg" />
</template>