<template lang="html">
  <div>
    <div is="sui-button" attached="top" content="Top" />
    <sui-segment attached>
      <docs-wireframe name="paragraph" />
    </sui-segment>
    <div is="sui-button" attached="bottom" content="Bottom" />
  </div>
</template>

<script>
export default {
  name: 'ButtonAttachedExample',
};
</script>
