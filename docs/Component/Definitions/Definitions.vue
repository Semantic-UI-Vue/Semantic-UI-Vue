<template>
  <div>
    <docs-rail :title="title" />
    <docs-body :elements="elements">
      <template v-slot="element">
        <template v-for="(example, index) in element.examples">
          <example :key="index" :example="example" :class="getClass(example)" />
        </template>
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
  methods: {
    getClass(example) {
      return `${example.name ? '' : 'another '}example`;
    }
  },
}
</script>

<style scoped>
.another.example {
  margin-top: 0;
}

.example {
  margin: 2em 0;
  padding: 2em 0;
}
</style>
