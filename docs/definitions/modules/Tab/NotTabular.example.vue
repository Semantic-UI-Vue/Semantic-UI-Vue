<template>
  <div>
    <sui-tab :menu="{ attached: false, tabular: false }">
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
  name: 'NotTabularExample',
};
</script>
