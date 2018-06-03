<template>
  <div>
    <sui-tab :menu="{ attached: false }">
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
    name: 'NotAttachedExample',
  };
</script>
