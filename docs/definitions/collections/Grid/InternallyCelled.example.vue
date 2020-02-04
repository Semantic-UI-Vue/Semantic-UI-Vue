<template>
  <sui-grid celled="internally">
    <sui-grid-row>
      <sui-grid-column :width="3">
        <docs-wireframe name="image" />
      </sui-grid-column>
      <sui-grid-column :width="10">
        <docs-wireframe name="centered-paragraph" />
      </sui-grid-column>
      <sui-grid-column :width="3">
        <docs-wireframe name="image" />
      </sui-grid-column>
    </sui-grid-row>

    <sui-grid-row>
      <sui-grid-column :width="3">
        <docs-wireframe name="image" />
      </sui-grid-column>
      <sui-grid-column :width="10">
        <docs-wireframe name="media-paragraph" />
      </sui-grid-column>
      <sui-grid-column :width="3">
        <docs-wireframe name="image" />
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
export default {
  name: 'InternallyCelledExample',
};
</script>
