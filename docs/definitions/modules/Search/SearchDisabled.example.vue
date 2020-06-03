<template lang="html">
  <sui-search disabled>
    <template v-slot:input="{ props, handlers }">
      <sui-input
        v-bind="props"
        v-on="handlers"
        icon="search"
        placeholder="Common animals..."
      />
    </template>
  </sui-search>
</template>

<script>
export default {
  name: 'SearchDisabled',
};
</script>
