<template>
  <div>
    <p>Active Index {{ activeIndex }}</p>

    <input
      type="range"
      max="2"
      v-model="activeIndex"
    >

    <sui-divider hidden />

    <sui-tab
      :active-index.sync="activeIndex"
    >
      <sui-tab-pane label="Circle">
        Circle
      </sui-tab-pane>
      <sui-tab-pane label="Box">
        Box
      </sui-tab-pane>
      <sui-tab-pane label="Triangle">
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
