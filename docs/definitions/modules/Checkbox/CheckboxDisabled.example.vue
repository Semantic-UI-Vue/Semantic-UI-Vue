<template lang="html">
  <div>
    <sui-checkbox label="checkbox" disabled v-model="value" />
  </div>
</template>

<script>
export default {
  name: 'CheckboxDisabledExample',
  data() {
    return { value: true };
  },
};
</script>

<style lang="css"></style>
