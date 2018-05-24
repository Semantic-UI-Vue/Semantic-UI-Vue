<template>
  <div>
    <sui-tabs :menu="{ attached: false, tabular: false }">
      <sui-tab label="Circle" :attached="false">
        Circle
      </sui-tab>
      <sui-tab label="Box" :attached="false">
        Box
      </sui-tab>
      <sui-tab label="Triangle" :attached="false">
        Triangle
      </sui-tab>
    </sui-tabs>
  </div>
</template>

<script>
  export default {
    name: 'NotTabularExample',
  };
</script>
