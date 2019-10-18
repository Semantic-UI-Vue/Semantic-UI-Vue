<template lang="html">
  <div>
    <sui-checkbox label="checkbox" v-model="value"/>
    <div><strong>value: </strong> {{value}}</div>
  </div>
</template>

<script>
export default {
  name: 'CheckboxModel',
  data() {
    return { value: true };
  },
};
</script>

<style lang="css">
</style>
