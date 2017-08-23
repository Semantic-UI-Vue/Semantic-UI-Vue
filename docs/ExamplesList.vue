<template>
  <div is="sui-container" class="example-list-container">
    <sui-rail class="docs-rail" dividing position="right">
      <h1>Hello world</h1>
    </sui-rail>
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

.example-list-container {
  margin-right: 387px!important;
  width: auto;
  max-width: 960px!important;
  position: relative;
}

.docs-rail {
  width: 319px;
}
</style>
