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
        <v-btn
          elevation="2"
          rounded 
          class="mr-4"
          type="submit"
        >
          submit
        </v-btn>
        <v-btn elevation="2" rounded to="/" color="secondary">
          Cancel
        </v-btn>
      </form>
  </v-container>
</template>