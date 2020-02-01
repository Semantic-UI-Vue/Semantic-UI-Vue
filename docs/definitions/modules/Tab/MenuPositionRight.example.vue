<template>
  <div>
    <sui-tab :menu="{ vertical: true, fluid: true }" menu-position="right">
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
  name: 'MenuPositionRightExample',
};
</script>
