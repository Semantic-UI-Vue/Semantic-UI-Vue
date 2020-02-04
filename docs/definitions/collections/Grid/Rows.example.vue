<template>
  <sui-grid :columns="3">
    <sui-grid-row>
      <sui-grid-column>
        <docs-wireframe name="paragraph" />
      </sui-grid-column>
      <sui-grid-column>
        <docs-wireframe name="paragraph" />
      </sui-grid-column>
    </sui-grid-row>

    <sui-grid-row>
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
  name: 'RowsExample',
};
</script>
