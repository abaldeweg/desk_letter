module.exports = {
  pwa: {
    workboxOptions: {
      importWorkboxFrom: 'local',
    },
    name: 'Letter - baldeweg Desk',
    themeColor: '#d7621d',
  },
  pluginOptions: {
    components: {
      title: 'baldeweg Desk',
      needsAuth: true,
    },
    i18n: {
      locale: 'de-DE',
      fallbackLocale: 'en-US',
      localeDir: 'locales',
      enableInSFC: false,
    },
  },
}
