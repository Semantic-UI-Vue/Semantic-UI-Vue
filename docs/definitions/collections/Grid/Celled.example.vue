<template lang="html">
  <sui-grid celled>
    <sui-grid-row>
      <sui-grid-column :width="3">
        <docs-wireframe name="image" />
      </sui-grid-column>
      <sui-grid-column :width="13">
        <docs-wireframe name="centered-paragraph" />
      </sui-grid-column>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column :width="3">
        <docs-wireframe name="image" />
      </sui-grid-column>
      <sui-grid-column :width="10">
        <docs-wireframe name="paragraph" />
      </sui-grid-column>
      <sui-grid-column :width="3">
        <docs-wireframe name="image" />
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
export default {
  name: 'CelledExample',
};
</script>
