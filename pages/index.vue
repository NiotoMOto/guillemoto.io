<template>
  <div>
    <div id="content" class="content-top">
        <div class="wrapper-content-slider">
          <div class="content-slider">
            <div class="cs-title">
              <h1>Ne courrez plus tout seul !</h1>
              <span></span>
            </div>
            <SearchComponent />
          </div> 
        </div>
        <img class="slider" src="~/assets/images/slide1.jpg">
    </div>
    <div class="cs-content-wrapper">
      <aside class="cs-content cs-main-content">
        Annonce
        <div class="search-result">
          <Annonce :annonce="annonce" v-for="annonce in annonces" :key="annonce._id" />
        </div>
      </aside>

      <aside class="cs-content cs-side-content">

      </aside>

     
    </div>
    </div>
 
</template>

<script>
import SearchComponent from '~/components/Search.vue'
import Annonce from '~/components/Annonce.vue'

export default {
  components: {
    SearchComponent, Annonce
  },
  computed: {
    user () {
      return this.$store.state.user
    },
    annonces () {
      return this.$store.state.annonces
    }
  },
  methods: {
    refreshAnnonces: function (e) {
      this.$axios.get('annonces').then(res => {
        this.annonces = res.data
      })
    }
  },
  asyncData (context) {
    return context.app.$axios.get('annonces?populate=[{"path":"creator"}, {"path":"sport"}]').then(res => (
      context.app.store.commit('SET_ANNONCES', res.data)
    ))
  }
}
</script>

<style lang="scss">
  .search-result_item {
    border: 1px solid blue;
  }

  .cs-content-wrapper{
    width: 80%;
    margin: 0 auto;
    .cs-content{
      float: left;
    }

    .cs-main-content{
      width: 75%;
    }
    .cs-side-content {
      width: 20%;
    }
  }
</style>
