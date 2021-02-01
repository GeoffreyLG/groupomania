<template>
  <v-container>
      <form>
        <v-text-field
          v-model="firstName"
          :error-messages="errors"
          label="First name"
          required
        ></v-text-field>
        <v-text-field
          v-model="lastName"
          :error-messages="errors"
          label="Last name"
          required
        ></v-text-field>
        <v-text-field
          v-model="email"
          :error-messages="errors"
          label="E-mail"
          required
        ></v-text-field>
        <v-btn elevation="2" rounded to="/" class="mr-4">
          Cancel
        </v-btn>
        <v-btn
          elevation="2"
          rounded 
          type="submit"
          color="info" 
        >
          Créer mon compte
        </v-btn>
      </form>
  </v-container>
</template>