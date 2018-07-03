<template>
  <div>
    <sui-tab :menu="{ vertical: true, fluid: true, tabular: 'right' }">
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
    name: 'VerticalTabularRightExample',
  };
</script>
