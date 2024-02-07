// https://nuxt.com/docs/api/configuration/nuxt-config
export default ({
    css: [
        'vuetify/lib/styles/main.sass',
    ],
    build: {
        transpile: ['vuetify'],
    },
    plugins: [
        '~/src/plugins/vuetify.js',
    ],
});