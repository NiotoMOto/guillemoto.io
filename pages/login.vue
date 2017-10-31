<template>
  <section class="container">
    <h1>Login</h1>
    <div v-if="!user">
      <p><a href="/api/auth/facebook">facebook</a></p>
      <p><a href="/api/auth/google">google</a></p>
      <form v-on:submit.prevent="login">
        <div>
          <v-input
            id="username"
            :value="username"
            name="username"
            type="text"
            :changeHandler="updateField"
            placeholder="Prénom"
            label="Votre prénom"
          />
          <v-input
            id="password"
            :value="password"
            name="password"
            type="password"
            :changeHandler="updateField"
            placeholder="Nom de famille"
            label="Votre nom de famille"
          />
        </div>
        <button type="submit">Login</button>
        <div>
          <div v-if="loginFailed">LOGIN FAILED :-() !</div>
        </div>
      </form>
    </div>

          <div v-if="user">
            LOGIN SUCCES :-) !
            {{ user.username }}
          </div>

    <div>
      <button v-on:click="getUser">Get users</button>
      <li v-for="user in users">
        {{ user.username }}
      </li>
      <div v-if="unauthorized">unauthorized !!!</div>
    </div>
  </section>
</template>

<script>
import vInput from '~/components/Input.vue'

export default {
  components: {
    vInput
  },
  data: () => ({
    username: '',
    password: '',
    loginSuccess: false,
    loginFailed: false,
    unauthorized: false,
    users: [],
    form: 'login'
  }),
  computed: {
    user () {
      return this.$store.state.user
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
    updateField (field, value) {
      this.$store.commit('forms/updateField', { form: this.form, field, value })
    },
    login: function (e) {
      const params = {
        username: this.username,
        password: this.password
      }
      this.$store.dispatch('login', params)
    }
  }
}
</script>
