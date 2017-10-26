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
        <span v-if="loginSuccess">LOGIN SUCCES :-) !</span>
        <span v-if="loginFailed">LOGIN FAILED :-() !</span>
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
import request from '~/services/request'
import auth from '~/services/auth'

export default {
  data: () => ({
    userName: '',
    password: '',
    loginSuccess: false,
    loginFailed: false,
    unauthorized: false,
    users: []
  }),
  methods: {
    getUser () {
      this.unauthorized = false
      request.get('/users').then(res => {
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
      request.post('/custom/login', params).then(res => {
        auth.login(res.data.token)
        this.annonces = res.data
        this.loginSuccess = true
        this.loginFailed = false
        this.unauthorized = false
      }).catch(() => {
        this.loginFailed = true
        this.loginSuccess = false
      })
    }
  }
}
</script>
