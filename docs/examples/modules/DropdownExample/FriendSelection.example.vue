<template lang="html">
  <sui-dropdown placeholder="Gender" selection :options="options" />
</template>

<script>
export default {
  data() {
    return {
      options: ['Male', 'Female'],
    };
  },
};
</script>
