<template>
  <section class="container">
    <h1>Login</h1>
    <form v-on:submit.prevent="login">
      <div>
        <input type="text" v-model="userName" placeholder="Login" />
        <input type="password" v-model="password" placeholder="Password" />
      </div>
      <button type="submit">Login</button>
      <div>
        <div v-if="authUser">
          LOGIN SUCCES :-) !
          {{ authUser.userName }}
        </div>
        <div v-if="loginFailed">LOGIN FAILED :-() !</div>
      </div>
    </form>

    <div>
      <button v-on:click="getUser">Get users</button>
      <li v-for="user in users">
        {{ user.userName }}
      </li>
      <div v-if="unauthorized">unauthorized !!!</div>
    </div>
  </section>
</template>

<script>

export default {
  data: () => ({
    userName: '',
    password: '',
    loginSuccess: false,
    loginFailed: false,
    unauthorized: false,
    users: []
  }),
  computed: {
    authUser () {
      return this.$store.state.authUser
    }
  },
  methods: {
    getUser () {
      this.unauthorized = false
      this.$axios.get('/users').then(res => {
        this.users = res.data
      }).catch(() => {
        this.unauthorized = true
      })
    },
    login: function (e) {
      const params = {
        userName: this.userName,
        password: this.password
      }
      this.$store.dispatch('login', params)
    }
  }
}
</script>
