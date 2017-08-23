<template>
  <div>
    <sui-grid
      :key="section.title"
      v-for="section in sections"
      :columns="1"
      padded
    >
      <sui-grid-column>
        <h2 class="section-header" is="sui-header">{{ section.title }}</h2>
        <example
          v-for="(example, index) in section.examples"
          v-bind="example"
          :key="index"
        />
      </sui-grid-column>
    </sui-grid>
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

<style scoped>
.section-header {
  margin-bottom: 1.5em;
}
</style>
