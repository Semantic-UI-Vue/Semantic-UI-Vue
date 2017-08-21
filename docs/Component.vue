<template>
  <sui-grid :columns="1" padded>
    <sui-grid-column>
      <h1 is="sui-header">
        {{ capitalize(this.component) }}
        <sui-header-subheader>
          {{ this.componentOpts.description }}
        </sui-header-subheader>
      </h1>
    </sui-grid-column>
  </sui-grid>
</template>

<script>
import capitalize from 'lodash/capitalize';
import * as components from 'src';

export default {
  name: 'Example',
  computed: {
    componentOpts() {
      return components[capitalize(this.component)];
    },
  },
  props: {
    type: String,
    component: String,
  },
  methods: { capitalize },
};
</script>
