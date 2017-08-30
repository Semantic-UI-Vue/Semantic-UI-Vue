<template lang="html">
  <sui-grid divided="vertically">
    <sui-grid-row :columns="2">
      <sui-grid-column>
        <docs-wireframe name="paragraph" />
      </sui-grid-column>
      <sui-grid-column>
        <docs-wireframe name="paragraph" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row :columns="3">
      <sui-grid-column>
        <docs-wireframe name="paragraph" />
      </sui-grid-column>
      <sui-grid-column>
        <docs-wireframe name="paragraph" />
      </sui-grid-column>
      <sui-grid-column>
        <docs-wireframe name="paragraph" />
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
export default {
  name: 'VerticallyDividedExample',
};
</script>
