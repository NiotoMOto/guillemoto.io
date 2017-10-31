<template>
  <section class="container">
    <h1>Register</h1>
    <form v-if="!user" v-on:submit.prevent="register">
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
    </form>

    <div v-if="user">
      Vous etes déja connecté {{ user.userName }}
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

