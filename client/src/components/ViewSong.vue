<template>
  <v-layout>
    <v-flex xs6>
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
                </v-flex>
                <v-flex xs6>
                    <img class="album-image" :src="song.albumImage" />
                    <br>
                    {{song.album}}
                </v-flex>
            </v-layout>
          </div>
      </panel>
    </v-flex>

    <v-flex xs8 class="ml-2">
      <panel title="Tabs">
        <textarea
            readonly
            v-model="song.tab"
        ></textarea>
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
      song: {}
    };
  },
  async mounted () {
    const songId = this.$store.state.route.params.id;
    this.song = (await SongsService.show(songId)).data;
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
