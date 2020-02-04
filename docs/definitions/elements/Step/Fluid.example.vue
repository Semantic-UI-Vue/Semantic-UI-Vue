<template lang="html">
  <sui-grid :columns="2">
    <sui-grid-column>
      <sui-step-group fluid vertical>
        <sui-step
          title="Shipping"
          description="Choose your shipping options"
          icon="plane"
          completed
        />
        <sui-step
          active
          title="Billing"
          description="Enter billing information"
          icon="dollar"
        />
      </sui-step-group>
    </sui-grid-column>
    <sui-grid-column>
      <p>The steps take up the entire column width</p>
    </sui-grid-column>
  </sui-grid>
</template>

<script>
export default {
  name: 'FluidExample',
};
</script>
