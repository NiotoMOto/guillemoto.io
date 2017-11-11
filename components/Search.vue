<template>
  <div class="cs-search">
     <v-input
        class="cs-search_sport"
        id="sport"
        :value="sport"
        name="sport"
        type="text"
        :placeholder="$t('inputs.sport')"
      />
      <v-input
        class="cs-search_city"
        id="city"
        :value="city"
        name="city"
        type="text"
        :placeholder="$t('inputs.city')"
      />
      <v-input
        class="cs-search_date"
        id="date"
        :value="city"
        name="date"
        type="date"
        :placeholder="$t('inputs.date')"
      />
      <button type="button">
        {{ $t('buttons.search') }}
      </button>
  </div>
</template>

<script>
import vInput from '~/components/Input.vue'
export default {
  components: {
    vInput
  },
  data: () => ({
    users: [],
    form: 'search',
    menu: false,
    modal: false
  }),
  computed: {
    sport () {
      return this.$store.state.forms.search.sport
    },
    city () {
      return this.$store.state.forms.search.city
    },
    date () {
      return this.$store.state.forms.search.date
    }
  }
}
</script>

<style lang="scss" scoped>
.cs-search {
  background: #fff;
}
</style>

