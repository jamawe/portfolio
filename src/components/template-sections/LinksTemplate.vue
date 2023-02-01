<script setup>
const { links } = defineProps(['links']);
</script>

<template>
    <div class="project__links">
        <a v-for="(link, i) in links" :key="i" class="project__links__item" :href="link.href">{{ link.text }}</a>
    </div>
</template>