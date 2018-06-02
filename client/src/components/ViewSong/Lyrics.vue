<template>
    <panel title="Lyrics">
        <textarea
            readonly
            v-model="song.lyrics"
        ></textarea>
    </panel>
</template>

<script>
import Panel from '@/components/Panel';

export default {
    components: {
        Panel
    },
    props: [
        'song'
    ]
};
</script>

<style scoped>

</style>
