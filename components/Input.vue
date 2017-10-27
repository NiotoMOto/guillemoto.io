<template>
  <label class="v-input-label">
    {{ label }}
    <input
      class="v-input"
      id="prenom"
      :value="value"
      :type="type"
      @input="changeHandler(name, $event.target.value)"
      :placeholder="placeholder"
    />
  </label>
</template>

<script>
  export default {
    name: 'v-input',
    props: ['value', 'changeHandler', 'placeholder', 'label', 'type', 'name']
  }
</script>

<style>
  .v-input-label {
    display: block;
    padding: 5px;
  }
   .v-input {
      text-align: left;
      height: 30px;
    }
</style>