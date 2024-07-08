export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/icon"],
  css: ["~/assets/global/index.css"],
  colorMode: {
    preference: 'light'
  },
  icon: {
    size: '34px',
    class: 'icon',
    mode: 'css',
    aliases: {
      'nuxt': 'logos:nuxt-icon',
    }
  }
});
