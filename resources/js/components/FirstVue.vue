<template>
    <v-app>

        <v-container>
            <h1>Hello, User</h1>
            <v-btn color="primary" @click="showAlert">Click me</v-btn>

            <v-row align="center" justify="space-around">
                <v-btn depressed>
                    Normal
                </v-btn>
                <v-btn depressed color="primary">
                    Primary
                </v-btn>
                <v-btn depressed color="error">
                    Error
                </v-btn>
                <v-btn depressed disabled>
                    Disabled
                </v-btn>
            </v-row>
        </v-container>

    </v-app>
</template>

<script>
export default {
    methods: {
        showAlert() {
            alert('Button clicked!');
        },
    },
};
</script>
