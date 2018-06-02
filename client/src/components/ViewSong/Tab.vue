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
textarea {
    font-family: monospace;
    width: 100%;
    border: none;
    height: 600px;
    overflow: auto;
    border-style: none;
    border-color: transparent;
}
</style>
