<template lang="html">
  <sui-search>
    <template v-slot:input="{ props, handlers }">
      <sui-input
        v-bind="props"
        v-on="handlers"
        icon="search"
        placeholder="Common passwords..."
      />
    </template>
  </sui-search>
</template>
