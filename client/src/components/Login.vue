<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2 mt-5">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-text-field
            name="email"
            label="Email"
            v-model="email"
          ></v-text-field>
          <v-text-field
            name="password"
            type="password"
            label="Password"
            v-model="password"
          ></v-text-field>
          <div class="error" v-html="error"></div>
          <v-btn
            dark
            class="cyan"
            @click='login'
          >
            login
          </v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService';
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    };
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        });
        this.$store.dispatch('setToken', response.data.token);
        this.$store.dispatch('setUser', response.data.user);
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  }
};
</script>

<style scoped>
.error {
  color: red;
}
</style>
