<template>
  <div>
    <p>Active Index {{ activeIndex }}</p>

    <input type="range" max="2" v-model="activeIndex" />

    <sui-divider hidden />

    <sui-tab :active-index.sync="activeIndex">
      <sui-tab-pane title="Circle">
        Circle
      </sui-tab-pane>
      <sui-tab-pane title="Box">
        Box
      </sui-tab-pane>
      <sui-tab-pane title="Triangle">
        Triangle
      </sui-tab-pane>
    </sui-tab>
  </div>
</template>

<script>
export default {
  name: 'ActiveIndexExample',
  data: () => ({
    activeIndex: 1,
  }),
};
</script>
