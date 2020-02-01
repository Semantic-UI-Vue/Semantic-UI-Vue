<template lang="html">
  <div>
    <sui-step-group>
      <sui-step>
        <sui-icon name="truck" />
        <sui-step-content>
          <sui-step-title>Shipping</sui-step-title>
          <sui-step-description
            >Choose your shipping options</sui-step-description
          >
        </sui-step-content>
      </sui-step>

      <sui-step active>
        <sui-icon name="payment" />
        <!-- Shorthand -->
        <sui-step-content
          title="Billing"
          description="Enter billing information"
        />
      </sui-step>

      <sui-step disabled>
        <sui-icon name="info" />
        <sui-step-content disabled title="Confirm Order" />
      </sui-step>
    </sui-step-group>

    <!-- Shorthand -->
    <sui-step-group :steps="steps" />
  </div>
</template>

<script>
export default {
  name: 'StepExample',
  data() {
    return {
      steps: [
        {
          icon: 'truck',
          name: 'Shipping',
          description: 'Choose your shipping options',
        },
        {
          active: true,
          icon: 'payment',
          name: 'Billing',
          description: 'Enter billing information',
        },
        {
          disabled: true,
          icon: 'info',
          name: 'Confirm Order',
        },
      ],
    };
  },
};
</script>
