<template lang="html">
  <sui-step-group>
    <a is="sui-step" active icon="truck">
      <sui-step-content
        title="Shipping"
        description="Choose your shipping options"
      />
    </a>
    <a is="sui-step">
      <sui-step-content
        title="Billing"
        description="Enter billing information"
      />
    </a>
  </sui-step-group>
</template>

<script>
export default {
  name: 'LinkExample',
};
</script>
