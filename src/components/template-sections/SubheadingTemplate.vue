<script setup>
const { subheading } = defineProps(['subheading']);
</script>

<template>
    <div class="project__body">
        <h3 class="project__body__subtitle">{{ subheading }}</h3>
    </div>
</template>