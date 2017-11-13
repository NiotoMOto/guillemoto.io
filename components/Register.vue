<template>
<section class="auth-wrapper r">
    <div  v-if="!user">
      <p class="auth auth-facebook">        
        <a class="cs-link" href="/api/auth/facebook"> <i class="cs-font cs-font-facebook">
          </i>{{ $t('register.register_facebook' )}}</a>
        </p>
      <p class="auth auth-google">
        <a class="cs-link" href="/api/auth/google"><i class="cs-font cs-font-google">
          </i>{{ $t('register.register_google' )}}</a>
      </p>
      <p class="cs-choice">- ou -</p>
      <form v-on:submit.prevent="register">
        <div class="field field-login">
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
        <button class="cta cta-login" type="submit">{{ $t('register.register') }}</button>
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

