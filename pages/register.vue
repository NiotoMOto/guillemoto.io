<template>
  <section class="container">
    <h1>Register</h1>
    <form v-if="!authUser" v-on:submit.prevent="register">
      <div>
        <v-input
          id="prenom"
          :value="firstName"
          name="firstName"
          type="text"
          :changeHandler="updateField"
          placeholder="Prénom"
          label="Votre prénom"
        />
        <v-input
          id="prenom"
          :value="lastName"
          name="lastName"
          type="text"
          :changeHandler="updateField"
          placeholder="Nom de famille"
          label="Votre nom de famille"
        />
        <v-input
          id="prenom"
          :value="userName"
          name="userName"
          type="text"
          :changeHandler="updateField"
          placeholder="Login"
          label="Votre login"
        />
        <v-input
          id="prenom"
          :value="password"
          name="password"
          type="text"
          :changeHandler="updateField"
          placeholder="Mot de passe"
          label="Votre Mot de passe"
        />
      </div>
      {{ firstName }}
      <button type="submit">Login</button>
    </form>

    <div v-if="authUser">
      Vous etes déja connecté {{ authUser.userName }}
    </div>
  </section>
</template>

<script>
import vInput from '~/components/Input.vue'

export default {
  components: {
    vInput
  },
  computed: {
    authUser () {
      return this.$store.state.authUser
    },
    firstName () {
      return this.$store.state.forms.user.firstName
    },
    lastName () {
      return this.$store.state.forms.user.lastName
    },
    userName () {
      return this.$store.state.forms.user.userName
    },
    password () {
      return this.$store.state.forms.user.password
    }
  },
  methods: {
    updateField (field, value) {
      this.$store.commit('forms/updateUserField', { field, value })
    },
    register () {
      this.$store.dispatch('register')
    }
  }
}
</script>

