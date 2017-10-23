<template lang="html">
  <div>
    <sui-shape :square="true">
      <sui-shape-sides>
        <sui-shape-side :active="true">
          <sui-image src="http://via.placeholder.com/128x128"></sui-image>
        </sui-shape-side>

        <sui-shape-side>
          <sui-image src="http://via.placeholder.com/256x256"></sui-image>
        </sui-shape-side>

        <sui-shape-side>
          <sui-image src="http://via.placeholder.com/350x350"></sui-image>
        </sui-shape-side>
      </sui-shape-sides>
    </sui-shape>

    <div style="margin-top:15px">
      <sui-button content="Flip left" @click.native="flipLeft"></sui-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShapeExample',
  methods: {
    flipLeft(event) {
      $('.square').shape('flip left');
    },
  },
};
</script>

<style lang="css">
</style>
