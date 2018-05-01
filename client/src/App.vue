<template>
  <div id="app">
    <v-app>
      <page-header />
      <v-content>
        <v-container fluid>
          <router-view/>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import PageHeader from '@/components/Header';
export default {
  name: 'App',
  components: {
    PageHeader
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
#app {
  font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.getError {
  color: red;
}

</style>
