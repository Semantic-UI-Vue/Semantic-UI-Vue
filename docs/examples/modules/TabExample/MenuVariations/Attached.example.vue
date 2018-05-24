<template>
  <div>
    <sui-tabs :menu="{ attached: 'bottom' }">
      <sui-tab label="Circle" attached="top">
        Circle
      </sui-tab>
      <sui-tab label="Box" attached="top">
        Box
      </sui-tab>
      <sui-tab label="Triangle" attached="top">
        Triangle
      </sui-tab>
    </sui-tabs>
  </div>
</template>

<script>
  export default {
    name: 'AttachedExample',
  };
</script>
