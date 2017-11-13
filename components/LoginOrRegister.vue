<template>
  <div>
    <a
      v-on:click="toggleLogin"
      v-bind:class="{selected: showLogin}"
      class="block-title">
      {{ $t('login.login') }}
    </a> / 
    <a
      v-on:click="toggleRegister"
      v-bind:class="{selected: showRegister}"
      class="block-title">
      {{ $t('register.register') }}
    </a>
    <Login v-if="showLogin" />
    <Register v-if="showRegister" />
  </div>
</template>

<script>
  import Login from './Login'
  import Register from './Register'
  export default {
    components: {
      Login, Register
    },
    data: () => ({
      showLogin: true,
      showRegister: false
    }),
    methods: {
      toggleLogin () {
        this.showLogin = true
        this.showRegister = false
      },
      toggleRegister () {
        this.showLogin = false
        this.showRegister = true
      }
    }
  }
</script>

<<style lang="scss">
  .block-title {
    cursor: pointer;
    &.selected {
      color: #41b883;
    }
  }
</style>

