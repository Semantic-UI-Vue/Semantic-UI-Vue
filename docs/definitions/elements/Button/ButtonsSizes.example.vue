<template lang="html">
  <div>
    <sui-button-group size="large">
      <sui-button content="One" />
      <sui-button content="Two" />
      <sui-button content="Three" />
    </sui-button-group>
    <sui-divider />
    <sui-button-group icons size="small">
      <sui-button icon="file" />
      <sui-button icon="save" />
      <sui-button icon="upload" />
      <sui-button icon="download" />
    </sui-button-group>
    <sui-divider />
    <sui-button-group size="large">
      <sui-button content="One" />
      <sui-button-or />
      <sui-button content="Two" />
    </sui-button-group>
  </div>
</template>

<script>
export default {
  name: 'ButtonsSizesExample',
};
</script>
