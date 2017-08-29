<template lang="html">
  <sui-grid :columns="3" divided>
    <sui-grid-row v-for="row in [,,]">
      <sui-grid-column v-for="col in [,,,]">
        <img src="static/images/wireframes/media-paragraph.png" />
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
export default {
  name: 'GridExample',
};
</script>
