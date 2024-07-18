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
      title: 'Санаторій «Курорт Березівські мінеральні води» - Лікувальний спа-курорт в Харкові',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Санаторій в Харкові з найкращими лікувальними процедурами та мінеральними водами. Відкрийте для себе ідеальне місце для відпочинку та оздоровлення.' },
        { hid: 'keywords', name: 'keywords', content: 'лікувальний санаторій, санаторій Харків, мінеральні води, спа-курорт, Березівські мінеральні води' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/assets/images/logo.jpg' }
      ]
    }
  }
});
