<template>
   <div class="sport-selector">
     <div
       class="sport-selector_element"
       v-for="sport in sports" 
       :key="sport.key"
       v-bind:class="{selected: isSelected(sport)}"
       v-on:click="selectSport(sport)"
       v-bind:value="value"
      >
      <input
        class="sport-selector_input"
        :ref="sport.key"
        type="checkbox"
        :id="sport.key"
        :value="sport._id"
        v-model="selected"
      />
      {{$t(`sports.${sport.key}`)}}
    </div>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  props: [ 'sports', 'value' ],
  data: () => ({
    selected: []
  }),
  methods: {
    selectSport (sport, a) {
      this.$refs[sport.key][0].click()
      this.$emit('input', this.$data.selected)
    },
    isSelected (sport) {
      return _.includes(this.$data.selected, sport._id)
    }
  }
}
</script>

<style lang="scss" scoped>
    .sport-selector_element {
        padding: 5px;
        cursor: pointer;
        display: inline-block;
        border: 1px solid black;
        &:not(:last-child){
            border-right: none;
        }
        &:hover {
            border-color: #41b883;
        }
        &.selected {
          background: #41b883;
          color: #FFF;
        }
    }
    .sport-selector_input {
      display: none;
    }
</style>

