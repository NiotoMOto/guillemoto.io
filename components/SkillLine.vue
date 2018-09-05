<template>
  <div>
    <v-layout row wrap align-content-center>
      <v-flex xs12>
        <v-progress-linear
          color="white"
          height="10"
          :value="progressValue"
        ></v-progress-linear>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  props: ['icon', 'value'],
  data () {
    return {
      progressValue: 0
    }
  },
  created () {
    this.interval = setInterval(() => {
      if (this.progressValue >= this.value) {
        return clearInterval(this.interval)
      }
      this.progressValue = this.progressValue + 1
    }, 1 - (this.value / 1000))
  },
  destroyed () {
    clearInterval(this.interval)
  },
  computed: {
    color: () => (
      this.value
    )
  }
}
</script>

<style lang="scss" scoped>
.SkillLine-icon {
  margin: auto;
}
</style>


