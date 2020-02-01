<template>
  <div>
    <sui-tab :menu="{ attached: 'bottom' }">
      <sui-tab-pane title="Circle" attached="top">
        Circle
      </sui-tab-pane>
      <sui-tab-pane title="Box" attached="top">
        Box
      </sui-tab-pane>
      <sui-tab-pane title="Triangle" attached="top">
        Triangle
      </sui-tab-pane>
    </sui-tab>
  </div>
</template>

<script>
export default {
  name: 'AttachedExample',
};
</script>
