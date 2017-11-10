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

<style lang="scss">
  .modal {
    position: fixed;
    top: 70px;
    right: 300px;
    z-index: 2;
    background: #fff;
    height: 350px;
    width: 400px;
    padding: 25px;
  }

  .auth-wrapper{
    width: 100%;
  } 

  .field {
    input{
      width: 100%;
    }
    label{
      width: 100%;
    }
  }
</style>
