<template>
  <section class="container">
    <h1>{{ $t('login.login') }}</h1>
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
            :placeholder="$t('inputs.login')"
            :label="$t('inputs.login')"
          />
          <v-input
            id="password"
            :value="password"
            name="password"
            type="password"
            :changeHandler="updateField"
            :placeholder="$t('inputs.password')"
            :label="$t('inputs.password')"
          />
        </div>
        <button type="submit">{{ $t('login.login') }}</button>
      </form>
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
