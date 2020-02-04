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
      options: [
        {
          text: 'Male',
          value: 1,
        },
        {
          text: 'Female',
          value: 2,
        },
      ],
    };
  },
};
</script>
