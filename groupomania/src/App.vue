<template>
  <v-app>
    <v-main>
      <accueil/>
      <connexion/>
    </v-main>
  </v-app>
</template>

<script>
import accueil from './views/accueil';
import connexion from './views/connexion';

export default {
  name: 'Index',

  components: {
    accueil,
    connexion,
  },

  data: () => ({
    //
  }),
};
</script>
