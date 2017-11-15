<template>
    <div class="annonce_item">
      <div>{{ annonce.creator.firstName }} {{ annonce.creator.lastName }}</div>
      <div>{{ annonce.sport.name }}</div>
       <nuxt-link
        :to="path(`/annonces/${annonce._id}`)">
        {{ annonce.name }}
      </nuxt-link>
    </div>
</template>

<script>
  import { path } from '~/utils/paths'

  export default {
    props: ['annonce'],
    methods: {
      path (url) {
        return path(url, this)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .annonce_item {
    border: 1px solid blue;
    padding: 5px;
  }
</style>

