<template lang="html">
  <sui-segment>
    <sui-dimmer active inverted>
      <sui-loader content="Loading..." />
    </sui-dimmer>

    <docs-wireframe name="short-paragraph" />
  </sui-segment>
</template>

<script>
export default {
  name: 'TextLoaderInvertedExample',
};
</script>
