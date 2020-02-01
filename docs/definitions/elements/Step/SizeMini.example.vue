<template lang="html">
  <sui-step-group size="mini">
    <sui-step
      title="Shipping"
      description="Choose your shipping options"
      icon="plane"
    />
    <sui-step
      active
      title="Billing"
      description="Enter billing information"
      icon="dollar"
    />
    <sui-step
      disabled
      title="Confirm Order"
      description="Verify order details"
      icon="info circle"
    />
  </sui-step-group>
</template>

<script>
export default {
  name: 'SizeMiniExample',
};
</script>
