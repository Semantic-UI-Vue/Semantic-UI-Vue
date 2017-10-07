<template lang="html">
  <div>
    <sui-checkbox label="checkbox" v-model="value"></sui-checkbox>
    <div><strong>value: </strong> {{value}}</div>
  </div>
</template>

<script>
export default {
  name: 'CheckboxModelExample',
  data() {
    return { value: true };
  },
};
</script>

<style lang="css">
</style>
