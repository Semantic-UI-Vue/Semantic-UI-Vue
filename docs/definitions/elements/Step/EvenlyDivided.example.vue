<template lang="html">
  <sui-step-group step-number="three">
    <sui-step title="Shipping" icon="plane" />
    <sui-step active title="Billing" icon="dollar" />
    <sui-step disabled title="Confirm Order" icon="info circle" />
  </sui-step-group>
</template>

<script>
export default {
  name: 'EvenlyDividedExample',
};
</script>
