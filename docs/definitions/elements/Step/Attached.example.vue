<template lang="html">
  <div>
    <sui-step-group step-number="three" attached="top">
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
    <sui-segment attached>
      <docs-wireframe name="paragraph" />
    </sui-segment>
    <sui-step-group step-number="three" attached="bottom">
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
  </div>
</template>

<script>
export default {
  name: 'AttachedExample',
};
</script>
