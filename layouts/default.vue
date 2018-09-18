<template>  
  <v-app
    dark
    v-scroll="onScroll"
  >
    <v-toolbar fixed app :clipped-left="clipped">
      <transition name="fade">
        <img
          width="40px"
          class="mb-4 appbar-logo"
          src="~/assets/images/guillemot_light.png"
          v-if="showLogo"
        />
      </transition>
      <v-toolbar-title id="app-title" ref="titleApp" :class="titleAppClasses" v-text="title">
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon class="icon-title">fa-github</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon class="icon-title">fa-linkedin</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <nuxt />
    </v-content>
    <v-footer :fixed="fixed" app>
      Guillemoto.io <span>&copy; 2017</span>
    </v-footer>
  </v-app>
 
</template>

<script>
  import { path } from '~/utils/paths.js'

  export default {
    methods: {
      path (url) {
        return path(url, this)
      },
      onScroll (e) {
        this.offsetTop = window.pageYOffset || document.documentElement.scrollTop
      }
    },
    watch: {
      showLogo: (value) => {
        this.test = value
        if (value) {
          document.getElementById('app-title').style.transform = 'translateX(50px)'
        } else {
          document.getElementById('app-title').style.transform = 'translateX(-0px)'
        }
      }
    },
    computed: {
      showLogo () {
        return this.offsetTop > 179
      },
      titleAppClasses () {
        return {
          'title-app': true,
          'with-logo': this.showLogo,
          'no-logo': !this.showLogo,
          change: this.test
        }
      }
    },
    data () {
      return {
        test: false,
        offsetTop: 0,
        clipped: false,
        drawer: true,
        fixed: false,
        items: [
          { icon: 'apps', title: 'Welcome', to: '/' },
          { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'GUILLEMOTO.IO'
      }
    }
  }
</script>

<style lang="scss">
  .title-app {
    transition-duration: .7s;
    transition-timing-function: ease;
    margin-left: 22px;
    position: absolute;
  }
  .icon-title {
    font-size: 25px;
  }
  .appbar-logo {
    margin-top: 20px;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to {
    opacity: 0
  }
</style>
