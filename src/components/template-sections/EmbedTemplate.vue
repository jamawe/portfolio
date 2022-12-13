<script setup>
const { url, title } = defineProps(['url', 'title']);
</script>

<template>
    <div class="project__body">
        <iframe 
            :src="url"
            class="project__body__embed"
            style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
            :title="title"
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
    </div>
</template>