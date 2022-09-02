<script setup>
const { heading } = defineProps(['heading']);
</script>

<template>
    <div class="project__body">
        <h2 class="project__body__title">{{ heading }}</h2>
    </div>
</template>