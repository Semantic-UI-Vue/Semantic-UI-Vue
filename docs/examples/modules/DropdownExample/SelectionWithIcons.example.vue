<template lang="html">
  <sui-dropdown
    placeholder="Gender"
    selection
    :options="options"
    v-model="current"
  />
</template>

<script>
export default {
  name: 'SelectionExample',
  data() {
    return {
      current: null,
      options: [{
        text: 'Male',
        icon: 'male',
        value: 1,
      }, {
        text: 'Female',
        icon: 'female',
        value: 2,
      }],
    };
  },
};
</script>
