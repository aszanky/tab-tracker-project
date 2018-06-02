<template>
  <div>
    <v-layout>
        <v-flex xs6>
            <song-metadata :song="song" />
        </v-flex>

        <v-flex xs6 ml-2>
            <youtube-video :youtubeId="song.youtubeId" />
        </v-flex>
    </v-layout>

    <v-layout>
        <v-flex xs6>
            <tab :song="song" />
        </v-flex>

        <v-flex xs6 ml-2>
            <lyrics :song="song" />
        </v-flex>
    </v-layout>
  </div>
</template>

<script>
import SongsService from '@/services/SongsService';
import Panel from '@/components/Panel';
import SongMetadata from '@/components/ViewSong/SongMetadata';
import YoutubeVideo from '@/components/ViewSong/YoutubeVideo';
import Lyrics from '@/components/ViewSong/Lyrics';
import Tab from '@/components/ViewSong/Tab';

export default {
  components: {
    Panel,
    SongMetadata,
    YoutubeVideo,
    Lyrics,
    Tab
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

</style>
