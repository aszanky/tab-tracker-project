<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
      <panel title="Songs">
          <v-btn
            slot="action"
            class="cyan accent-2"
            absolute
            light
            medium
            right
            middle
            fab
            @click="navigateTo({name: 'songs-create'})"
            >
              <v-icon>add</v-icon>
          </v-btn>
          <div
            class="song"
            v-for="song in songs"
            :key="song.title">
            <v-layout>
                <v-flex xs6>
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
                            name: 'song',
                            params: {
                                id: song.id
                            }
                        })"
                        >
                        View
                    </v-btn>
                </v-flex>
                <v-flex xs6>
                    <img class="album-image" :src="song.albumImage" />
                </v-flex>
            </v-layout>
          </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService';
import Panel from '@/components/Panel';
export default {
    components: {
        Panel
    },
    data () {
        return {
            songs: null
        };
    },
    async mounted () {
        // do a request to the backend for all songs
        this.songs = (await SongsService.index()).data;
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
