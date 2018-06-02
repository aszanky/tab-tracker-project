<template>
    <panel title="Song Metadata">
        <div
            class="song"
            :key="song.title">
            <v-layout>
                <v-flex xs4>
                    <div class="song-title">
                        {{song.title}}
                    </div>
                    <div class="song-artist">
                        {{song.artist}}
                    </div>
                    <div class="song-genre">
                        {{song.genre}}
                    </div>
                    <v-btn
                        class="cyan"
                        @click="navigateTo({
                            name: 'edit-song',
                            params: {
                                id: song.id
                            }
                        })"
                        >
                        Edit
                    </v-btn>
                </v-flex>
                <v-flex xs6>
                    <img class="album-image" :src="song.albumImage" />
                    <br>
                    {{song.album}}
                </v-flex>
            </v-layout>
        </div>
    </panel>
</template>

<script>
import Panel from '@/components/Panel';

export default {
    props: [
        'song'
    ],
    components: {
        Panel
    },
    methods: {
        navigateTo (route) {
            this.$router.push(route);
        }
    }
};
</script>

<style scoped>
.song {
    padding: 20px;
    height: 330px;
    overflow: hidden;
}
.song-title {
    font-size: 30px;
}
.song-artist {
    font-size: 24px;
}
.song-genre {
    font-size: 20px;
}
.album-image {
    width: 70%;
    margin: 0 auto;
}
</style>
