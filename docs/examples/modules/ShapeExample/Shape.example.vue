<template lang="html">
  <div>
    <sui-shape :text="true">
      <div class="sides">
        <sui-shape-side class="header" :active="true">Did you know? This side starts visible.</sui-shape-side>
        <sui-shape-side class="header">Help, its another side!</sui-shape-side>
        <sui-shape-side class="header">This is the last side</sui-shape-side>
      </div>
    </sui-shape>

    <div style="margin-top:15px">
      <sui-button class="flip-up-btn" v-on:click="flipUp" content="Flip up"></sui-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShapeExample',
  methods: {
    flipUp: (_event) => {
      $('.flip-up-btn').on('click', (_event) => {
        $('.shape').shape('flip up');
      });
    },
  },
};
</script>

<style lang="css">
</style>
