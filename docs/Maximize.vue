<template>
  <div :is="component"></div>
</template>

<script>
import camelCase from 'lodash/camelCase';
import upperFirst from 'lodash/upperFirst';
const examplesContext = require.context('./definitions/', true, /\.vue$/);

const upperCamelCase = str => upperFirst(camelCase(str));

export default {
  props: {
    type: String,
    componentName: String,
    fileName: String,
  },
  computed: {
    key() {
      const componentName = upperCamelCase(this.componentName);
      const fileName = upperCamelCase(this.fileName);
      console.log(examplesContext.keys()); // eslint-disable-line
      return `./${this.type}/${componentName}/${fileName}.example.vue`;
    },
    component() {
      return examplesContext(this.key).default;
    },
  },
};
</script>
