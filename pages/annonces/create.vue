<template>
  <section class="container">
    <h1>Création annonces</h1>
  </section>
</template>

<script>

export default {
  middleware: 'auth',
  data: () => ({
    annonces: []
  })
}
</script>
