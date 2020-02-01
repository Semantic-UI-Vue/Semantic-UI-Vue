<template lang="html">
  <div>
    <sui-step-group vertical>
      <sui-step completed>
        <sui-icon name="truck" />
        <sui-step-content>
          <sui-step-title>Shipping</sui-step-title>
          <sui-step-description
            >Choose your shipping options</sui-step-description
          >
        </sui-step-content>
      </sui-step>

      <sui-step
        completed
        icon="credit card"
        title="Billing"
        description="Enter billing information"
      />
      <sui-step
        active
        icon="info"
        title="Confirm Order"
        description="Verify order details"
      />
    </sui-step-group>
  </div>
</template>

<script>
export default {
  name: 'VerticalExample',
};
</script>
