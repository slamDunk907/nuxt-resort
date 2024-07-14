export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/icon", "@nuxtjs/i18n"],
  css: ["~/assets/global/index.css"],
  colorMode: {
    preference: "light",
  },
  icon: {
    size: "34px",
    class: "icon",
    mode: "css",
    aliases: {
      nuxt: "logos:nuxt-icon",
    },
  },
  i18n: {
    vueI18n: './i18n.config.ts',
  },
  app: {
    head: {
      title: 'САНАТОРІЙ «КУРОРТ БЕРЕЗІВСЬКІ МІНЕРАЛЬНІ ВОДИ»',
      meta: [
        { name: 'berminvody resort', content: '' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/assets/images/logo.jpg' }
      ]
    }
  }
});
