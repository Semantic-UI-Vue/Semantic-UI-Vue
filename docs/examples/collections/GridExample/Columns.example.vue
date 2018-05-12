<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="8">
        <docs-wireframe name="paragraph" />
      </sui-grid-column>
      <sui-grid-column :width="8">
        <docs-wireframe name="paragraph" />
      </sui-grid-column>
    </sui-grid-row>

    <sui-grid-row>
      <sui-grid-column :width="8">
        <docs-wireframe name="paragraph" />
      </sui-grid-column>
      <sui-grid-column :width="8">
        <docs-wireframe name="paragraph" />
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
export default {
  name: 'ColumnsExample',
};
</script>
