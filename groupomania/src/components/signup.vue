<template>
    <v-container>
        <v-layout>
            <v-flex xs12 sm6 offset-sm3>
                <v-card>
                    <v-card-text>
                        <v-container>
                            <v-form>
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-text-field
                                            name="email"
                                            label="E-mail"
                                            id="email"
                                            v-model="email"
                                            type="email"
                                            required
                                        ></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-text-field
                                            name="password"
                                            label="Password"
                                            id="password"
                                            v-model="password"
                                            type="password"
                                            required
                                        ></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-text-field
                                            name="confirmPassword"
                                            label="Confirm password"
                                            id="confirmPassword"
                                            v-model="password"
                                            type="password"
                                        ></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout>
                                    <v-btn elevation="2" rounded to="/" class="mr-4 mt-5">
                                        Cancel
                                    </v-btn>
                                    <v-btn
                                        elevation="2"
                                        rounded 
                                        type="submit"
                                        color="info" 
                                        class="mt-5"
                                    >
                                        Créer mon compte
                                    </v-btn>
                                </v-layout>
                            </v-form>
                        </v-container>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>