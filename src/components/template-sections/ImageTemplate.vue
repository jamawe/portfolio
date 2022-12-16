<script setup>
const { src, alt } = defineProps(['src', 'alt']);
</script>

<template>
    <div class="project__body">
        <img class="project__body__image" :src="src" :alt="alt" />
    </div>
</template>