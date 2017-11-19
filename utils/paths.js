export const path = (url, app) => (
  app.$i18n.locale === 'en' ? url : '/' + app.$i18n.locale + url
)
