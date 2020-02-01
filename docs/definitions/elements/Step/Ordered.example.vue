<template lang="html">
  <div>
    <sui-step-group ordered>
      <sui-step completed>
        <sui-step-content>
          <sui-step-title>Shipping</sui-step-title>
          <sui-step-description
            >Choose your shipping options</sui-step-description
          >
        </sui-step-content>
      </sui-step>

      <sui-step
        completed
        title="Billing"
        description="Enter billing information"
      />

      <sui-step
        active
        title="Confirm Order"
        description="Verify order details"
      />
    </sui-step-group>
  </div>
</template>

<script>
export default {
  name: 'OrderedExample',
};
</script>
