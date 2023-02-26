<script setup>
import ProjectTemplate from "../components/ProjectTemplate.vue";
import NotFound from "../components/NotFound.vue";
import { ref } from "vue";
import { useRoute } from 'vue-router';
import { useHead } from '@vueuse/head';
import { projects, projectMeta } from '../modules/projects.js';

const { fullPath, params } = useRoute();

const param = params.project;
const i = projects.findIndex(element => element.name === param);
const j = projectMeta.findIndex(element => element.name === param);

console.log('%cname', 'color: darkseagreen; font-weight: bold;', projects[i].name);

useHead({
  title: `${projectMeta[j].title} | `,
  meta: [
    { name: 'description', content: projectMeta[j].description },
    { property: 'og:title', content: `${projectMeta[j].title} | Jana Wernick — Frontend Development` },
    { property: 'og:description', content: projectMeta[j].description },
    { property: 'og:url', content: `https://janawernick.dev${fullPath}` }
  ],
  link: [
    { rel: 'canonical', href: `https://janawernick.dev${fullPath}` }
  ]
});

const notFoundMsg = ref('Dieses Projekt existiert (noch) nicht.');
</script>

<template>
    <NotFound v-if="i === -1"
        :msg="notFoundMsg" />

    <ProjectTemplate v-else-if="i !== -1"
    :project="projects[i]" />
</template>

<style lang="scss">
</style>