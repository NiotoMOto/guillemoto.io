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
          <img width="100px" class="mb-4" src="~/assets/images/moi.png"/>
          <div class="title-container mb-2 pa-2">
            <span class="white--text display-1 text-xs-center title">SebastionFerandez<span class="blue--text text--lighten-2">.io</span></span>
          </div>
          <div class="title-container mb-2 pa-2">
            <h1 class="subheading text-xs-center title">Développeur frontend</h1>
          </div>
          <div class="title-container pa-2">
            <h3 class="title subheading">Disponibilité: <span class="green--text darken-2">à l'écoutes</span></h3>
          </div>
        </v-layout>
      </v-parallax>
      <div>
        <v-container grid-list-md text-xs-center>
          <v-layout row wrap>
            <v-flex md12 xs12>
              <v-card class="elevation-0 transparent">
                <v-card-text class="text-xs-center">
                  <v-icon x-large class="blue--text text--lighten-2">face</v-icon>
                </v-card-text>
                <v-card-title primary-title class="layout justify-center">
                  <div>
                    <h3 class="headline text-xs-center">Présentation</h3>
                  </div>
                </v-card-title>
                <v-card-text>
                  Je m'appelle Sébastien Fernandez et une de mes grandes passions est le web et tout ce qui touche autour. Je me suis découvert un intérêt grandissant pour le développement web grâce à des développeurs parmi mon entourage. Un coucou chaleureux à eux !
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex md12 xs12>
                <v-card class="elevation-0 transparent">
                <v-card-text class="text-xs-center">
                  <v-icon x-large class="blue--text text--lighten-2">language</v-icon>
                </v-card-text>
                <v-card-title primary-title class="layout justify-center">
                  <div>
                    <h3 class="headline text-xs-center">Mon apprentissage</h3>
                  </div>
                </v-card-title>
                <v-card-text>
                  Je décide de me former à la fameuse 3W Academy à Paris pour être le plus rapidement opérationnel en apprenant les bases de la programmation (HTML 5, CSS3, Javascript, jQuery, PHP, MySQL, Silex et Wordpress) mais bien sûr je continue à me former et me maintenir à jour sur Openclassrooms, Codecademy et Devdocs.
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex md12 xs12>
               <v-card class="elevation-0 transparent">
                <v-card-text class="text-xs-center">
                  <v-icon x-large class="blue--text text--lighten-2">flash_on</v-icon>
                </v-card-text>
                <v-card-title primary-title class="layout justify-center">
                  <div>
                    <h3 class="headline text-xs-center">Créateur de sites internet</h3>
                  </div>
                </v-card-title>
                <v-card-text>
                  Vous voulez donner vie à un site web à partir de maquettes ? Je suis le développeur de la situation. La traduction en HTML et en CSS sera assurée, le site sera aussi SEO-friendly (mots-clés, code html optimisé pour le SEO et backlinking). Vous voulez un site web plutôt simple et/ou sans idée de design particulier ? Je suis aussi le développeur de la situation avec Wordpress.
                  Voici la(les) technologie(s) que j'étudie actuellement :
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
    </section>
    <section>

    </section>
  </div>
</template>

<script>
</script>

<style lang="scss">
.skills {
  font-size: 30px!important;
  font-weight: 400;
}
.test {
  height: 1080px;
}
.parallax-header {
  .parallax__image {
    opacity: 0.6 !important;
  }
}
.title-container {
  background: black;
  opacity: 0.7;
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
