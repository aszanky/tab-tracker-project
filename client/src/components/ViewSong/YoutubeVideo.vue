<template>
    <panel title="YouTube Video">
        <youtube
            :video-id='youtubeId'
            player-width='550'
        >
        </youtube>
    </panel>
</template>

<script>
import Panel from '@/components/Panel';
export default {
    components: {
        Panel
    },
    props: [
        'youtubeId'
    ]
};
</script>

<style scoped>

</style>
