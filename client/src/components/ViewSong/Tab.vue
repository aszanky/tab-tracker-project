<template>
    <panel title="Tab">
        <textarea
            readonly
            v-model="song.tab"
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
