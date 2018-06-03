<template>
  <div>
    <select v-model="selectedColor">
      <option
        v-for="color in colors"
        :key="color"
        :value="color"
      >
        {{ color }}
      </option>
    </select>

    <sui-divider hidden />

    <sui-tab :menu="{ color: selectedColor, attached: false, tabular: false }">
      <sui-tab-pane label="Circle" :attached="false">
        Circle
      </sui-tab-pane>
      <sui-tab-pane label="Box" :attached="false">
        Box
      </sui-tab-pane>
      <sui-tab-pane label="Triangle" :attached="false">
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
      colors: [
        'red',
        'orange',
        'yellow',
        'green',
        'blue',
        'purple',
      ],
    }),
  };
</script>
