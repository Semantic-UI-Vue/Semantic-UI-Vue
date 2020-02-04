<template>
  <div>
    <select v-model="selectedColor">
      <option v-for="color in colors" :key="color" :value="color">
        {{ color }}
      </option>
    </select>

    <sui-divider hidden />

    <sui-tab
      :menu="{
        color: selectedColor,
        inverted: true,
        attached: false,
        tabular: false,
      }"
    >
      <sui-tab-pane title="Circle" :attached="false">
        Circle
      </sui-tab-pane>
      <sui-tab-pane title="Box" :attached="false">
        Box
      </sui-tab-pane>
      <sui-tab-pane title="Triangle" :attached="false">
        Triangle
      </sui-tab-pane>
    </sui-tab>
  </div>
</template>

<script>
export default {
  name: 'ColoredExample',
  data: () => ({
    selectedColor: 'blue',
    colors: ['red', 'orange', 'yellow', 'green', 'blue', 'purple'],
  }),
};
</script>
