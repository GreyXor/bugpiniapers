
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    modules: [
        "@pinia/nuxt",
        '@pinia-plugin-persistedstate/nuxt',
        "@invictus.codes/nuxt-vuetify",
    ],
    vuetify: {
        vuetifyOptions: {
            theme: {
                defaultTheme: "dark",
            },
        },
    },
});
