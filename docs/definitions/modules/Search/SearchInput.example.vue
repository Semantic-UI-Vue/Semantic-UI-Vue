<template lang="html">
  <sui-search>
    <template v-slot:input="{ props, handlers }">
      <sui-input
        v-bind="props"
        v-on="handlers"
        placeholder="Common passwords..."
        icon="search"
      />
    </template>
  </sui-search>
</template>

<script>
export default {
  name: 'SearchInput',
};
</script>
