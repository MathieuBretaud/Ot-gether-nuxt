// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    typescript: {
        typeCheck: true
    },
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    modules: [
        "@nuxt/ui",
        "@nuxt/image",
        "@nuxtjs/tailwindcss",
        "@nuxt/fonts",
        "dayjs-nuxt",
    ],
    colorMode: {
        preference: 'light',
        fallback: 'dark'
    },
})

