<script setup>
import NotFound from '../components/NotFound.vue';
import { ref } from "vue";

const notFoundMsg = ref('Die angefragte Seite konnte nicht gefunden werden.');
</script>

<template>
    <NotFound :msg="notFoundMsg" />
</template>