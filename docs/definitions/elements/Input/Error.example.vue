<template lang="html">
  <sui-input placeholder="Search..." type="text" :error="hasError" />
</template>

<script>
export default {
  name: 'ErrorExample',
  data() {
    return {
      hasError: true,
    };
  },
};
</script>
