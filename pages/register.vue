<template>
  <section class="container">
    <h1>{{ $t('register.register') }}</h1>
    <p><a href="/api/auth/facebook">facebook</a></p>
    <p><a href="/api/auth/google">google</a></p>
    <form v-if="!user" v-on:submit.prevent="register">
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
        <v-input
          id="username"
          :value="username"
          name="username"
          type="username"
          :changeHandler="updateField"
          :placeholder="$t('inputs.username')"
          :label="$t('inputs.username')"
        />
      </div>
      <button type="submit">{{ $t('register.register') }}</button>
    </form>

    <div v-if="user">
      Vous etes déja connecté {{ user.username }}
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
    form: 'register'
  }),
  computed: {
    user () {
      return this.$store.state.user
    },
    username () {
      return this.$store.state.forms.register.username
    },
    email () {
      return this.$store.state.forms.register.email
    },
    password () {
      return this.$store.state.forms.register.password
    }
  },
  methods: {
    updateField (field, value) {
      this.$store.commit('forms/updateField', { form: this.form, field, value })
    },
    register () {
      this.$store.dispatch('register')
    }
  }
}
</script>

