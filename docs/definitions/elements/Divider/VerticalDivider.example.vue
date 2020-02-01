<template>
  <sui-grid :columns="3" relaxed="very">
    <sui-grid-column>
      <docs-wireframe
        name="short-paragraph"
        v-for="j in [1, 2, 3, 4]"
        :key="j"
      />
    </sui-grid-column>
    <sui-divider vertical>and</sui-divider>
    <sui-grid-column>
      <docs-wireframe
        name="short-paragraph"
        v-for="j in [1, 2, 3, 4]"
        :key="j"
      />
    </sui-grid-column>
    <sui-divider vertical>or</sui-divider>
    <sui-grid-column>
      <docs-wireframe
        name="short-paragraph"
        v-for="j in [1, 2, 3, 4]"
        :key="j"
      />
    </sui-grid-column>
  </sui-grid>
</template>

<script>
export default {
  name: 'VerticalDivider',
};
</script>
