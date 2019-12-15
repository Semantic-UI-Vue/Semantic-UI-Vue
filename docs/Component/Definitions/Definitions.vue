<template>
  <div>
    <docs-rail :title="title" />
    <docs-body :elements="elements">
      <template v-slot="element">
        <template v-for="(example, index) in element.examples">
          <example :key="index" :example="example" />
        </template>
      </template>
    </docs-body>
  </div>
</template>

<script>
import upperFirst from 'lodash/upperFirst';
import definitions from '../../definitions';

export default {
  props: {
    componentName: String,
    type: String,
  },
  computed: {
    title() {
      return upperFirst(this.componentName);
    },
    elements() {
      return definitions[this.title];
    },
  },
}
</script>

<style>

</style>
