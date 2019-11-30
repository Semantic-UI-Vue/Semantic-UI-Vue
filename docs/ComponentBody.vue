<template>
  <div class="component-body">
    <template v-for="section in examples">
      <div :key="section.title">
        <h2 is="sui-header" dividing>{{section.title}}</h2>
        <example v-for="(example, index) in section.examples" :key="index" class="example" :example="example" />
      </div>
    </template>
  </div>
</template>

<script>
import * as examples from './examples';
import capitalize from 'lodash/capitalize';
import Example from './Example';

export default {
  props: {
    componentName: String,
  },
  components: { Example },
  computed: {
    examples() {
      return examples[`${this.title}Example`];
    },
    title() {
      return capitalize(this.componentName);
    }
  },
}
</script>

<style scoped>
.ui.dividing.header {
  margin-bottom: 3rem;
}

.example {
  margin: 2em 0em;
  padding: 2em 0em;
  position: relative;
}

.component-body .example:first-child,
.component-body .ui.header + .example {
  margin-top: 0;
}
</style>
