<template>
    <div class="media-disk">
        <div class="media-disk-name">{{ disk.displayName }}</div>
        <media-drive v-for="drive in disk.drives" :drive="drive"></media-drive>
    </div>
</template>

<script>
    export default {
        name: 'media-disk',
        props: ['disk'],
    }
</script>
