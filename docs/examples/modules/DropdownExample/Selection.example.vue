<template lang="html">
  <sui-dropdown placeholder="Gender" selection :options="options" />
</template>

<script>
export default {
  name: 'SelectionElement',
  data() {
    return {
      options: [{
        text: 'Male',
        value: 1,
      }, {
        text: 'Female',
        value: 2,
      }],
    };
  },
};
</script>
