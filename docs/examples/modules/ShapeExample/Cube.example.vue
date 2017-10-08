<template lang="html">
  <div>
    <sui-shape :cube="true">
      <sui-shape-sides>
        <sui-shape-side class="header" :active="true">
          <div class="content">
            <div class="center">1</div>
          </div>
        </sui-shape-side>

        <sui-shape-side class="header" v-for="num in numbers" :key="num">
          <div class="content">
            <div class="center">{{ num }}</div>
          </div>
        </sui-shape-side>
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
  data() {
    return {
      numbers: [2, 3, 4, 5, 6],
    };
  },
  methods: {
    flipUp(event) {
      $('.cube').shape('flip up');
    },
  },
};
</script>

<style lang="css">
</style>
