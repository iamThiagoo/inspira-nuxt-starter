// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss', 
    'shadcn-nuxt', 
    '@nuxt/image', 
    '@vueuse/motion/nuxt'
  ],
  components: [
    {
      path: './components',
      pathPrefix: false,
    },
  ],
  shadcn: {
    componentDir: './components/ui'
  }
})