<template>  
  <div>
 
    <header>
      <nuxt-link :to="path('/login')">{{ $t('links.login') }}</nuxt-link> - 
      <nuxt-link :to="path('/register')">{{ $t('links.register') }}</nuxt-link> -
      <nuxt-link :to="path('/')">{{ $t('links.home') }}</nuxt-link> -
      <nuxt-link class="Header__Link" v-if="$i18n.locale === 'en'" :to="`/fr` + $route.fullPath" active-class="none" exact>
        {{ $t('links.french') }}
      </nuxt-link>
      <nuxt-link class="Header__Link" v-else :to="$route.fullPath.replace(/^\/[^\/]+/, '')" active-class="none" exact>
        {{ $t('links.english') }}
      </nuxt-link>
    </header>
    <div class="content-app">
      <nuxt/> 
    </div>
    <div id="content" class="content-bottom">
      <!-- <Modal :show="showLoginModal" :toggleModal="toggleLoginModal">
        <LoginOrRegister />
      </Modal> -->
    </div>
  </div>
</template>

<script>
  import { path } from '~/utils/paths.js'

  export default {
    methods: {
      path (url) {
        return path(url, this)
      }
    }
  }
</script>

<style lang="scss">

</style>
