<template lang="html">
  <sui-step-group>
    <sui-step link active icon="truck">
      <sui-step-content
        title="Shipping"
        description="Choose your shipping options"
      />
    </sui-step>
    <sui-step link>
      <sui-step-content
        title="Billing"
        description="Enter billing information"
      />
    </sui-step>
  </sui-step-group>
</template>

<script>
export default {
  name: 'Link2Example',
};
</script>
