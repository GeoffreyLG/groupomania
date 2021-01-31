<template>
  <v-app>
    <v-main>
      <accueil/>
      <connexion/>
    </v-main>
  </v-app>
</template>

<script>
import accueil from './components/accueil';
import connexion from './components/connexion';

export default {
  name: 'App',

  components: {
    accueil,
    connexion,
  },

  data: () => ({
    //
  }),
};
</script>
