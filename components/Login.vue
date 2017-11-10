<template>
  <section>
    <h1>{{ $t('login.login') }}</h1>
    <div v-if="!user">
      <p class="cs-font cs-font-facebook"><a href="/api/auth/facebook">facebook</a></p>
      <p><a href="/api/auth/google">google</a></p>
      <form v-on:submit.prevent="login">
        <div>
          <v-input
            id="email"
            :value="email"
            name="email"
            type="text"
            :changeHandler="updateField"
            :placeholder="$t('inputs.email')"
            :label="$t('inputs.email')"
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
    users: [],
    form: 'login'
  }),
  computed: {
    user () {
      return this.$store.state.user
    },
    email () {
      return this.$store.state.forms.login.email
    },
    password () {
      return this.$store.state.forms.login.password
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
