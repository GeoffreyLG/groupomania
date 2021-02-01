<template>
    <v-container>
        <v-row class="text-center">
            <v-col cols="12">
            <v-img
                :src="require('@/assets/logo.svg')"
                class="my-3"
                contain
                height="200"
            />
            </v-col>

            <v-col class="mb-4">
            <h1 class="display-2 font-weight-bold mb-3">
                Welcome to Groupomania
            </h1>
            </v-col>
        </v-row>
        <v-row class="text-center">
            <v-col>
            <v-btn elevation="2" rounded color="secondary" to="/signin">
                Se connecter
            </v-btn>
            </v-col>
        </v-row>
        <v-row class="text-center">
            <v-col>
            <v-btn elevation="2" rounded color="secondary" to="/subscribe">
                S'inscrire
            </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>