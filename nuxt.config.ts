// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    ['@storyblok/nuxt', { accessToken: process.env.STORYBLOK_TOKEN }],
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
  ],
  image: {
    provider: 'storyblok',
    storyblok: {
      baseURL: 'https://a.storyblok.com',
    },
  },
  app: {
    head: {
      title: 'The Bud Trend',
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }, {}],
    },
  },
  tailwindcss: {
    configPath: './tailwind.config.ts',
    cssPath: './global.css',
  },
})
