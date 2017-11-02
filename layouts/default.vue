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
      <li class="menu-items"><nuxt-link to="/annonces/create">Annonce create (private)</nuxt-link></li> 
      <li class="menu-items"><nuxt-link to="/login">Connexion / Inscription</nuxt-link></li>  
    </ul>
  </header>
    <p><nuxt-link to="/">HOME</nuxt-link></p>
    <p><nuxt-link to="/annonces/create">Annonce create (private)</nuxt-link></p>
    <p><nuxt-link to="/login">login</nuxt-link></p>
    <p><nuxt-link to="/register">Register</nuxt-link></p>
    <p><a href="#" v-on:click="logout">logout</a></p>
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
