<template>
  <div>
    <p><nuxt-link :to="path('/')">{{ $t('links.home') }}</nuxt-link></p>
    <p><nuxt-link :to="path('/annonces/create')">{{ $t('links.create_annonce') }}</nuxt-link></p>
    <p><nuxt-link :to="path('/login')">{{ $t('links.login') }}</nuxt-link></p>
    <p><nuxt-link :to="path('/register')">{{ $t('links.register') }}</nuxt-link></p>
    <p><a href="#" v-on:click="logout">{{ $t('links.logout') }}</a></p>
    <nuxt-link class="Header__Link" v-if="$i18n.locale === 'en'" :to="`/fr` + $route.fullPath" active-class="none" exact>
      {{ $t('links.french') }}
    </nuxt-link>
    <nuxt-link class="Header__Link" v-else :to="$route.fullPath.replace(/^\/[^\/]+/, '')" active-class="none" exact>
      {{ $t('links.english') }}
    </nuxt-link>
    <nuxt/>
  </div>
</template>

<script>
export default {
  methods: {
    logout: function () {
      this.$store.dispatch('logout')
    },
    path (url) {
      return this.$i18n.locale === 'en' ? url : '/' + this.$i18n.locale + url
    }
  }
}
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
