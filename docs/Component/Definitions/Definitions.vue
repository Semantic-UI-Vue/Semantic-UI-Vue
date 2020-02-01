<template>
  <div>
    <docs-body :elements="elements" sub-elements-key="examples" :title="title">
      <template v-slot="bindings">
        <example
          class="example"
          :example="bindings.element"
          :id="bindings.id"
        />
      </template>
    </docs-body>
  </div>
</template>

<script>
import upperFirst from 'lodash/upperFirst';
import definitions from '../../definitions';
import Example from './Example';

export default {
  components: { Example },
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
};
</script>

<style scoped>
.example {
  margin: 2em 0;
  padding: 2em 0;
}
</style>
