<template lang="html">
  <div>
    <sui-shape :text="true">
      <sui-shape-sides>
        <sui-shape-side class="header" :active="true">Did you know? This side starts visible.</sui-shape-side>
        <sui-shape-side class="header">Help, its another side!</sui-shape-side>
        <sui-shape-side class="header">This is the last side</sui-shape-side>
      </sui-shape-sides>
    </sui-shape>

    <div style="margin-top:15px">
      <sui-button content="Flip up" @click.native="flipUp"></sui-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShapeExample',
  methods: {
    flipUp() {
      $('.shape').shape('flip up');
    },
  },
};
</script>

<style lang="css">
</style>
