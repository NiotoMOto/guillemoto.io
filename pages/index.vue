<template>
  <div>
    <section>
      <v-parallax
        class="parallax-header"
        src="/images/mer.jpg"
        height="400"
      >
        <v-layout
          column
          align-center
          justify-center
          class="white--text"
        > 
          <img width="100px" class="mb-4" src="~/assets/images/guillemot_light.png"/>
          <div class="title-container mb-2 pa-2">
            <span class="white--text display-1 text-xs-center title">Guillemoto.io</span>
          </div>
          <div class="title-container mb-2 pa-2">
            <h1 class="subheading text-xs-center title">Développeur javascript indépendant</h1>
          </div>
          <div class="title-container pa-2">
            <h3 class="title subheading">Disponibilité: <span class="green--text darken-2">à l'écoutes</span></h3>
          </div>
        </v-layout>
      </v-parallax>
      <div class="test">

      </div>
    </section>
    <section>

    </section>
  </div>
</template>

<script>
</script>

<style lang="scss">
  .test {
    height: 1080px;  
  }
  .parallax-header {
    .parallax__image {
      opacity: 0.6!important;
    }
  }
  .title-container {
    background: black;
    opacity: .7;
    .title {
      opacity: 1;
    }
  }
</style>
