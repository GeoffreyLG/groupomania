<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    <v-btn elevation="2" rounded to="/signin">Connexion</v-btn>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>