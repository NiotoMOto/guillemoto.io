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
        <v-flex v-for="(skill, i) in skills" :key="i" md3 xs12>
          <v-expansion-panel inset>
            <v-expansion-panel-content >
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
                <v-card-title class="skill-title" primary-title>
                   <div class="headline">{{skill.title}}</div>
                   <div>{{ skill.xp }} d'expériences</div>
                </v-card-title>
                <v-card-text>
                  <div>
                    {{skill.description}}
                  </div>
                   <v-list >
                      <template  v-for="(job, index) in skill.jobs" >
                        <v-list-tile :key="index" ripple @click="">
                          <v-list-tile-content>
                            <v-list-tile-title>{{ job.company }}</v-list-tile-title>
                          </v-list-tile-content>
                          <v-list-tile-action>
                            <v-list-tile-action-text>{{ job.xp }}</v-list-tile-action-text>
                          </v-list-tile-action>
                        </v-list-tile>
                        <v-divider v-if="index + 1 < skill.jobs.length" :key="`divider-${index}`"></v-divider>
                      </template>
                    </v-list>
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-flex>
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
import skills from '~/datas/skills'

export default {
  components: {SkillLine},
  data: () => ({
    skills
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
  .xp {
    float: right;
    display: inline-block;
  }

  .skill-title {
    display: block;
  }
</style>
