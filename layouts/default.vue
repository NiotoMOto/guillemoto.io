<template>  
  <div>
  <header>
    <ul class="menu1">
      <ul >
      <li class="menu-items">burguer</li>
      </ul>     
        <a href="#">Logo</a>      
    </ul>
    <ul class="menu2">      
      <li class="menu-items"></li>
        <nuxt-link to="/annonces/create">Annonce create (private)</nuxt-link>
      </li> 
      <li class="menu-items"><nuxt-link to="/login">Connexion / Inscription</nuxt-link></li>  
    </ul>
  </header>
    <p><nuxt-link :to="path('/')">{{ $t('links.home') }}</nuxt-link></p>
    <p><nuxt-link :to="path('/annonces/create')">{{ $t('links.create_annonce') }}</nuxt-link></p>
    <p><a href="#" v-on:click="toggleLoginModal">{{ $t('links.login') }}</a></p>
    <p><a href="#" v-on:click="toggleRegisterModal">{{ $t('links.register') }}</a></p>
    <p><a href="#" v-on:click="logout">{{ $t('links.logout') }}</a></p>
    <nuxt-link class="Header__Link" v-if="$i18n.locale === 'en'" :to="`/fr` + $route.fullPath" active-class="none" exact>
      {{ $t('links.french') }}
    </nuxt-link>
    <nuxt-link class="Header__Link" v-else :to="$route.fullPath.replace(/^\/[^\/]+/, '')" active-class="none" exact>
      {{ $t('links.english') }}
    </nuxt-link>
    <Modal :show="showLoginModal" :toggleModal="toggleLoginModal">
      <Login />
    </Modal>
    <Modal :show="showRegisterModal" :toggleModal="toggleRegisterModal">
      REGISTER
    </Modal>
    {{ showLoginModal }}
    <nuxt/>
  </div>
</template>

<script>
  import Login from '~/components/Login.vue'
  import Logo from '~/components/Logo.vue'
  import Modal from '~/components/Modal.vue'

  export default {
    components: {
      Login, Logo, Modal
    },
    computed: {
      showLoginModal () {
        return this.$store.state.ui.modals.login
      },
      showRegisterModal () {
        return this.$store.state.ui.modals.register
      }
    },
    methods: {
      logout: function () {
        this.$store.dispatch('logout')
      },
      path (url) {
        return this.$i18n.locale === 'en' ? url : '/' + this.$i18n.locale + url
      },
      toggleLoginModal () {
        this.$store.commit('ui/toggleModal', { modal: 'login' })
      },
      toggleRegisterModal () {
        this.$store.commit('ui/toggleModal', { modal: 'register' })
      }
    }
  }
</script>

<style lang="scss">
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
.menu2,
.menu1{
  width: 50%;
  float:left;
  display:block;
  background:orange;
}

.menu-items{
    float:left;
    display:block;
    width:33%;
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
