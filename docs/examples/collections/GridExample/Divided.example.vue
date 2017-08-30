<template lang="html">
  <sui-grid :columns="3" divided>
    <sui-grid-row v-for="row in [,,]">
      <sui-grid-column v-for="col in [,,,]">
        <docs-wireframe name="media-paragraph" />
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
export default {
  name: 'DividedExample',
};
</script>
