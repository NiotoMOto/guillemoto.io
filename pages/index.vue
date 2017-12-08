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
      <div class="skills">
        <v-avatar
          class="grey lighten-4"
        >
          <img src="~/assets/images/angular.png" alt="avatar">
        </v-avatar>
        <v-avatar
          class="grey lighten-4"
        >
          <img src="~/assets/images/javascript.png" alt="avatar">
        </v-avatar>
        <v-avatar
          class="grey lighten-4"
        >
          <img src="~/assets/images/html5.png" alt="avatar">
        </v-avatar>
        <v-avatar
          class="grey lighten-4"
        >
          <img src="~/assets/images/css.png" alt="avatar">
        </v-avatar>
        <v-avatar
          class="grey darken-4"
        >
          <img src="~/assets/images/react.png" alt="avatar">
        </v-avatar>
        <v-tooltip top>
          <v-avatar
            class="grey darken-3"
          >
            <img src="~/assets/images/nodejs.png" alt="avatar">
          </v-avatar>
          <span>Nodejs</span>
        </v-tooltip>
      </div>
      <div class="clients">
        <img src="~/assets/images/mytf1.png" height="50px" alt="mytf1">
        <img src="~/assets/images/societe_generale.jpg" height="50px" alt="société générale">
        <img src="~/assets/images/rdc.png" height="50px" alt="rue du commerce">
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
  .skills {
    text-align: center;
    padding: 15px;
    .avatar {
      margin: 10px;
    }
  }
  .clients {
    padding: 15px;
    text-align: center;
    img {
      margin: 10px;
    }
  }
</style>
