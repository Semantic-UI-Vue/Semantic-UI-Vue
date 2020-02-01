<template lang="html">
  <div>
    <sui-button-group :widths="5">
      <sui-button content="Overview" />
      <sui-button content="Specs" />
      <sui-button content="Warranty" />
      <sui-button content="Reviews" />
      <sui-button content="Support" />
    </sui-button-group>
    <sui-button-group :widths="3">
      <sui-button content="Overview" />
      <sui-button content="Specs" />
      <sui-button content="Support" />
    </sui-button-group>
  </div>
</template>

<script>
export default {
  name: 'ButtonsEqualWidthExample',
};
</script>
