<template lang="html">
  <sui-search :source="[]">
    <template v-slot:input="{ props, handlers }">
      <sui-input
        v-bind="props"
        v-on="handlers"
        loading
        placeholder="Search..."
      />
    </template>
  </sui-search>
</template>
