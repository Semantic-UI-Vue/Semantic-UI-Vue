<template>
  <div>
    <template v-for="section in sections">
      <h2 is="sui-header">{{ section.title }}</h2>
      <example
        v-for="(example, index) in section.examples"
        v-bind="example"
        :key="index"
      />
    </template>
  </div>
</template>

<script>
import Example from './Example';
import * as examples from 'docs/examples';

export default {
  name: 'ExamplesList',
  props: {
    component: String,
  },
  computed: {
    sections() {
      const entry = Object
        .entries(examples)
        .find(([name]) => name === `${this.component}Example`)

      return entry ? entry[1] : [];
    },
  },
  components: { Example },
};
</script>
