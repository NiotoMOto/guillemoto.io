<template>
  <section class="container">
    <SportSelector
      :sports="sports"
      :value="userSports"
      @input="value => { userSports = value }"
    />
  </section>
</template>

<script>
import SportSelector from '~/components/SportSelector.vue'

export default {
  components: {
    SportSelector
  },
  data: () => ({
    userSports: []
  }),
  computed: {
    sports () {
      return this.$store.state.static.sports
    }
  },
  fetch ({ store, app }) {
    return app.$axios.get('sports').then(res => {
      store.commit('static/SET_SPORTS', res.data)
    })
  }
}
</script>
