<template>
  <div>
    <sui-tab :menu="{ vertical: true, fluid: true, tabular: true }">
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
  name: 'VerticalTabularExample',
};
</script>
