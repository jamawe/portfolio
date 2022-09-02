<script setup>
const { list } = defineProps(['list']);
</script>

<template>
    <div class="project__body">
        <ul class="project__body__list">
            <li v-for="(item, i) in list" :key="i" class="project__body__list__item">{{ item }}</li>
        </ul>
    </div>
</template>