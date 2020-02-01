<template lang="html">
  <div>
    <sui-checkbox toggle label="toggle" disabled v-model="value" />
  </div>
</template>

<script>
export default {
  name: 'CheckboxToggleDisabledExample',
  data() {
    return { value: true };
  },
};
</script>

<style lang="css"></style>
