<template>
  <div v-if="show" class="modal">
    <div>
      <a href="#" v-on:click="toggleModal">Fermer</a>
    </div>
    <slot/>
  </div>
</template>

<script>
  export default {
    props: {
      show: {
        type: Boolean,
        default: false,
        required: true
      },
      toggleModal: {
        type: Function,
        required: true
      }
    }
  }
</script>

<style>
  .modal {
    position: fixed;
    top: 70px;
    right: 300px;
    z-index: 2;
    background: #41b883;
    height: 350px;
  }
</style>
