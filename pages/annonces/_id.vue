<template>
  <div class="cs-content-wrapper">       
      <aside class="cs-content cs-main-content">  
        <span class="last-post"></span>   
        <div class="search-result">         
          <h1>{{ annonce.sport.name }} - {{ annonce.name }}</h1>
          <h2>{{ annonce.creator.firstName }} {{ annonce.creator.lastName }}</h2>  
        </div>
      </aside>
      <aside class="cs-content cs-side-content">
        <div class="cs-banner">           
        </div>
      </aside>     
    </div>
   
</template>

<script>
  export default {
    computed: {
      annonce () {
        return this.$store.state.annonce
      }
    },
    asyncData (context) {
      return context.app.$axios.get(
        `annonces/${context.params.id}?populate=[{"path":"creator"}, {"path":"sport"}]`
      ).then(res => (
        context.app.store.commit('SET_ANNONCE', res.data)
      ))
    }
  }
</script>

<style lang="scss">
</style>

