// https://nuxt.com/docs/api/configuration/nuxt-config
import fs from "fs";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    ["@storyblok/nuxt", { accessToken: process.env.STORYBLOK_TOKEN }],
    "@nuxtjs/tailwindcss",
  ],
  devServer: {
    https: {
      key: fs.readFileSync("./localhost-key.pem").toString(),
      cert: fs.readFileSync("./localhost.pem").toString(),
    },
  },
});
