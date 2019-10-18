<template lang="html">
  <div>
    <sui-checkbox label="toggle" toggle v-model="value"/>
  </div>
</template>

<script>
export default {
  name: 'CheckboxToggle',
  data() {
    return { value: true };
  },
};
</script>

<style lang="css">
</style>
