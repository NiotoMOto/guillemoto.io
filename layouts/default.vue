<template>  
  <div>
    <header class="bloc-head">
      <ul class="menu menu-left">      
        <li class="menu-items burguer-menu">Menu</li>
        <li class="menu-items cs-logo">            
          <a class="logo link" href="#" alt="logo"></a>
        </li>            
      </ul>
      <ul class="menu menu-right">
        <li class="menu-items menu-item-login">
        <a href="#" v-on:click="toggleLoginModal">{{ $t('links.login') }}</a>
        </li>      
        <li class="menu-items menu-item-create-annonce">
          <nuxt-link :to="path('/annonces/create')">{{ $t('links.create_annonce') }}</nuxt-link>
        </li>         
      </ul>    
    </header>

    <div id="content" class="content-bottom">
      <!-- <p><nuxt-link :to="path('/')">{{ $t('links.home') }}</nuxt-link></p>
      <p><nuxt-link :to="path('/annonces/create')">{{ $t('links.create_annonce') }}</nuxt-link></p>
      <p><a href="#" v-on:click="toggleLoginModal">{{ $t('links.login') }}</a></p>
      <p><a href="#" v-on:click="toggleRegisterModal">{{ $t('links.register') }}</a></p>
      <p><a href="#" v-on:click="logout">{{ $t('links.logout') }}</a></p>
      <nuxt-link class="Header__Link" v-if="$i18n.locale === 'en'" :to="`/fr` + $route.fullPath" active-class="none" exact>
        {{ $t('links.french') }}
      </nuxt-link>
      <nuxt-link class="Header__Link" v-else :to="$route.fullPath.replace(/^\/[^\/]+/, '')" active-class="none" exact>
        {{ $t('links.english') }}
      </nuxt-link> -->
      <Modal :show="showLoginModal" :toggleModal="toggleLoginModal">
        <Login />
      </Modal>
      <Modal :show="showRegisterModal" :toggleModal="toggleRegisterModal">
        REGISTER
      </Modal>
      {{ showLoginModal }}
    </div>
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
.menu-right,
.menu-left{
  width: 50%;
  float:left;
  display:block;
}
.menu-right{
  .menu-items{       
    width: 50%;
    text-align: center;
    text-transform: uppercase;
    font-size: 14px;
  }
}
.content-top {
  display: inline-block;
  width: 100%;
  height: auto;
  position: relative;
  .slider{
    width: 100%;
    height: 100%;
    display: inline-block
  }
}

.wrapper-content-slider {
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  .content-slider {
    width: 80%;
    margin: 0 auto;
    text-align: center;
    top: calc(50% - 20px);
    position: relative;  
    color: #fff;
  }
}
.content-bottom { 
  padding: 0 50px;
}

.logo { 
  background: url(/assets/images/logo.png) no-repeat;
  display: inline-block;
  width: 119px;
  height: 60px;
  background-size: 100%;
  position: absolute;
  top: 9px;
} 

.menu-item-create-annonce{
  background:#41b883;
}

.menu-items{
    float: left;
    display: inline-block;
    width: 20%;
    padding: 20px 0;
    vertical-align: middle;
    height: 60px;
    a{
      text-decoration: none;
      color: #fff;
      &:active,&:visited,&:focus {
        //color:inherit;
      }
    }
  }
.auth-facebook{  
  .cs-link {
    color: #fff;
    text-decoration: none;
    background: #3b5998;
    padding: 16px;
    margin-bottom: 16px;
    width: 100%;
    display: inline-block;
  }
}
.auth-google{ 
  .cs-link {
    color: #fff;
    text-decoration: none;
    background: #DC4A38;
    padding: 16px;
    margin-bottom: 16px;
    width: 100%;
    display: inline-block;
  }
}

.burguer-menu {
  margin-right: 26px;
  border-right: 1px solid #ccc;
}
.menu-item-login{
  a{
    color: #333;
  }
}

.bloc-head{
    border-bottom: 1px solid #ccc;    
    width: 100%;
    height: 60px;
    position: fixed;
    z-index: 9;
    background: #fff;
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
