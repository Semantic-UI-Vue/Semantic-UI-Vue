<template>
  <div :is="component"></div>
</template>

<script>
import kebabCase from 'lodash/kebabCase';
const examplesContext = require.context('./examples/', true, /\.vue$/);

const examples = examplesContext.keys().reduce((examplesAccumulator, key) => {
  const exampleName = kebabCase(
    key
      .replace(/.*\/([^/]+\/[^/.]+).*/, '$1')
      .replace('/', '-')
  );

  return {
    ...examplesAccumulator,
    [exampleName]: examplesContext(key).default,
  };
});

export default {
  props: {
    example: String,
  },
  data() {
    return {
      component: examples[this.example],
    };
  },
}
</script>

<style>

</style>
