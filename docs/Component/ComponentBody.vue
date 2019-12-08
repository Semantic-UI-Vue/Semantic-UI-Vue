<template>
  <div class="component-body">
    <template v-for="section in examples">
      <div :key="section.title">
        <h2 is="sui-header" dividing>{{section.title}}</h2>
        <example
          v-for="(example, index) in section.examples"
          :key="index"
          class="example"
          :example="example"
          @open="openCode(index)"
          :open="open === index"
        />
      </div>
    </template>
  </div>
</template>

<script>
import * as examples from '../examples';
import capitalize from 'lodash/capitalize';
import Example from './Example';
console.log(examples);

export default {
  props: {
    componentName: String,
  },
  data() {
    return{
      open: -1,
    };
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
  methods: {
    openCode(index) {
      this.open = this.open === index ? -1 : index;
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
