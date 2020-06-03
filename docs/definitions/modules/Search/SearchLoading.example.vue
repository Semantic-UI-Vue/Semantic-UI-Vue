<template lang="html">
  <sui-search loading>
    <template v-slot:input="{ props, handlers }">
      <sui-input
        v-bind="props"
        v-on="handlers"
        placeholder="Search..."
        icon="search"
      />
    </template>
  </sui-search>
</template>

<script>
export default {
  name: 'SearchLoading',
};
</script>
