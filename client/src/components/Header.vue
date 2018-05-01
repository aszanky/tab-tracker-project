<template>
    <v-toolbar fixed class="cyan" dark>
        <v-toolbar-title dark class="mr-4">
            <span
                @click="navigateTo({name: 'root'})"
                class="logo"
            >
                TabTracker
            </span>
        </v-toolbar-title>
        <v-toolbar-items>
            <v-btn
                flat dark
                @click="navigateTo({name: 'songs'})">
                Browse
            </v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn
                v-if="!$store.state.isUserLoggedIn"
                flat dark
                @click="navigateTo({name: 'login'})">
                login
            </v-btn>
            <v-btn
                v-if="!$store.state.isUserLoggedIn"
                flat dark
                @click="navigateTo({name: 'register'})">
                Sign Up
            </v-btn>
            <v-btn
                v-if="$store.state.isUserLoggedIn"
                flat dark
                @click="logout">
                Log out
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
    methods: {
        navigateTo (route) {
            this.$router.push(route);
        },
        logout () {
            this.$store.dispatch('SetToken', null);
            this.$store.dispatch('setUser', null);
            // redirect to homepage
            this.$router.push({
                name: 'root'
            });
        }
    }
};
</script>

<style scoped>
.logo {
    cursor: pointer;
}
/* .logo:hover {
    background: #fff;
    opacity: 0.1;
} */
</style>
