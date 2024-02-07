import type { Config } from 'tailwindcss'

module.exports = {
  content: [
    './storyblok/**/*.{html,js,ts,vue}',
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        neulis: ['NeulisAlt', 'sans-serif'],
      },
    },
  },
} satisfies Config
