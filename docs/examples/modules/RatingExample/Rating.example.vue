<template lang="html">
  <div>
    <sui-rating :rating="value" :max-rating="5" />
  </div>
</template>

<script>
export default {
  name: 'Rating',
  data() {
    return { value: 1 };
  },
};
</script>

<style lang="css">
</style>
