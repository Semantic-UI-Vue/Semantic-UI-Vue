<template lang="html">
  <div>
    <sui-button-group attached="top">
      <div is="sui-button" content="One" />
      <div is="sui-button" content="Two" />
    </sui-button-group>
    <sui-segment attached>
      <docs-wireframe name="paragraph" />
    </sui-segment>
    <sui-button-group attached="bottom">
      <div is="sui-button" content="One" active />
      <div is="sui-button" content="Two" />
    </sui-button-group>
  </div>
</template>

<script>
export default {
  name: 'ButtonAttachedExample',
};
</script>
