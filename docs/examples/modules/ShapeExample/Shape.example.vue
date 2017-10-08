<template lang="html">
  <div>
    <sui-shape :text>
      <sui-shape-side class="header">Did you know? This side starts visible.</sui-shape-side>
      <sui-shape-side class="header">Help, its another side!</sui-shape-side>
      <sui-shape-side class="header">This is the last side</sui-shape-side>
    </sui-shape>

    <sui-button class="flip-up-btn">
      <sui-icon class="up long arrow"></sui-icon>
    </sui-shape-button>
  </div>
</template>

<script>
  export default {
    name: 'ShapeExample',
    created() {
      $('.flip-up-btn').on('click', (_event) => {
        $('.shape').shape('flip up');
      });
    },
  };
</script>

<style lang="css">
</style>
