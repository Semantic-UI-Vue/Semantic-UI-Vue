<template lang="html">
  <sui-button
    toggle
    content="Vote"
    :active="isActive"
    @click="isActive = !isActive"
  />
</template>

<script>
export default {
  name: 'Toggle',
  data: () => ({
    isActive: false,
  }),
};
</script>
