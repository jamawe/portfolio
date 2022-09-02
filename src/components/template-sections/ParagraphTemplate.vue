<script setup>
const { paragraph } = defineProps(['paragraph']);
</script>

<template>
    <div class="project__body">
        <p class="project__body__paragraph">{{ paragraph }}</p>
    </div>
</template>