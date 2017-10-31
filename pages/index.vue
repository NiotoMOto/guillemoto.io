<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        annbouje
      </h1>
      <h2 class="subtitle">
        Ann bouje !
      </h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
      </div>
    </div>
    <span v-if="user">
      {{ user.username }}
      </span>
    <div>
      <button v-on:click="refreshAnnonces">Refresh</button>
      <li v-for="annonce in annonces">
        {{ annonce.name }}
      </li>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  computed: {
    user () {
      return this.$store.state.user
    }
  },
  data: () => ({
    annonces: []
  }),
  methods: {
    refreshAnnonces: function (e) {
      this.$axios.get('/annonces').then(res => {
        this.annonces = res.data
      })
    }
  },
  asyncData (context) {
    return context.app.$axios.get('/annonces').then(res => (
      { annonces: res.data }
    ))
  }
}
</script>

<style>

</style>
