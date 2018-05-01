<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
      <panel title="Register">
          <form
            name="tab-tracker-form"
            autocomplete="off">
            <v-text-field
              name="email"
              label="Email"
              v-model="email"
            ></v-text-field>
            <v-text-field
              name="password"
              label="Password"
              type="password"
              v-model="password"
              autocomplete="new-password"
            ></v-text-field>
          </form>
          <div class="error" v-html="error"></div>
          <v-btn
            dark
            class="cyan"
            @click='register'
          >
            Register
          </v-btn>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService';
import Panel from '@/components/Panel';
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    };
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        });
        this.$store.dispatch('setToken', response.data.token);
        this.$store.dispatch('setUser', response.data.user);
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  },
  components: {
    Panel
  }

//   watch: {
//     email (value) {
//       console.log(`hey ${value}`)
//     }
//   },
//   mounted () {
//     setTimeout(() => {
//       this.email = `hello world`
//     }, 5000)
//   }
};
</script>

<style scoped>
.error {
  color: red;
}
</style>
