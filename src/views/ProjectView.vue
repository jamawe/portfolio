<script setup>
import ProjectTemplate from "../components/ProjectTemplate.vue";
import NotFound from "../components/NotFound.vue";
import { useRoute } from 'vue-router';
import { projects } from '../modules/projects.js';
const route = useRoute();

const param = route.params.project;
const i = projects.findIndex(element => element.name === param);
</script>

<template>
    <NotFound v-if="i === -1"/>

    <ProjectTemplate v-else-if="i !== -1"
    :project="projects[i]" />
</template>

<style lang="scss">
</style>