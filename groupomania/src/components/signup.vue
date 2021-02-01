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
                                        <v-text-field
                                            name="password"
                                            label="Password"
                                            required
                                        ></v-text-field>
                                        <v-text-field
                                            name="confirmPassword"
                                            label="Confirm password"
                                            required
                                        ></v-text-field>
                                    </v-flex>
                                </v-layout>
                            </v-form>
                        </v-container>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>