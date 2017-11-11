<template>
  <label class="cs-input-label">
    <span v-if="label">{{ label }}</span>
    <input
      class="cs-input"
      :id="id"
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
    props: ['value', 'changeHandler', 'placeholder', 'label', 'type', 'name', 'id']
  }
</script>

<style>
  .cs-input-label {
    display: block;
    padding: 5px;
  }
   .cs-input {
      text-align: left;
      height: 30px;
    }
</style>