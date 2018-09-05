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
      <v-layout class="skills" row wrap>
        <v-card  v-for="(skill, i) in skills" :key="i">
          <v-img
            class="white--text"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline">Top 10 Australian beaches</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-card-title>
            <div>
              <span class="grey--text">Number 10</span><br>
              <span>Whitehaven Beach</span><br>
              <span>Whitsunday Island, Whitsunday Islands</span>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="orange">Share</v-btn>
            <v-btn flat color="orange">Explore</v-btn>
          </v-card-actions>
        </v-card>
        <v-expansion-panel inset>
       
          <v-expansion-panel-content v-for="(skill, i) in skills" :key="i">
            <div slot="header">
              <div class="text-center">
                <font-awesome-icon 
                  :icon="['fab', skill.icon]"
                  size="lg"
                />
              </div>
              <SkillLine :icon="skill.icon" :value="skill.value" />
            </div>
            <v-card>
              <v-card-title>{{skill.title}}</v-card-title>
              <v-card-text>
                <span class="xp">{{ skill.xp }}</span>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-layout>
      <div class="clients">
          
      </div>
    </section>
    <section>

    </section>
  </div>
</template>

<script>
import SkillLine from '~/components/SkillLine'

export default {
  components: {SkillLine},
  data: () => ({
    skills: [
      { icon: 'react', value: 70, title: 'React', xp: '2 ans' },
      { icon: 'js', value: 60, title: 'javascript', xp: '4 ans' },
      { icon: 'node', value: 40, title: 'Nodejs', xp: '2 ans' },
      { icon: 'css3', value: 40, title: 'Css', xp: '5 ans' },
      { icon: 'sass', value: 40, title: 'Sass', xp: '2 ans' }
    ]
  })
}
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
    // text-align: center;
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
  .text-center {
    text-align: center;
  }
</style>
