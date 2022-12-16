<script setup>
const { url, title } = defineProps(['url', 'title']);
</script>

<template>
    <div
        class="project__header"
        :style="{ backgroundImage: `url(${url})`}">

        <h1 class="project__header__title">{{ title }}</h1>
    </div>
</template>