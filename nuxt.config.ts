// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    sourcemap: {
        server: true,
        client: true,
      },

    css: ['~/assets/css/main.css'],

    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
})
