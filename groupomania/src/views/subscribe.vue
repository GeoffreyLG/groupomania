<template>
  <v-container>
    <v-card elevation="3">
      <v-form v-model="valid">
        <v-container>
          <v-row>
            <v-col
              cols="12"
              md="4"
            >
              <v-text-field
                v-model="firstname"
                :rules="nameRules"
                :counter="10"
                label="First name"
                required
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              md="4"
            >
              <v-text-field
                v-model="lastname"
                :rules="nameRules"
                :counter="10"
                label="Last name"
                required
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              md="4"
            >
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <v-container>
          <v-btn elevation="2" rounded color="secondary" to="/">
              Cancel
          </v-btn>
          <v-btn elevation="2" rounded color="primary">
              Go !
          </v-btn>
        </v-container>
      </v-form>
    </v-card>
  </v-container>
</template>