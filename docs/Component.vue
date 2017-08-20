<template>
  <sui-grid :columns="1" padded>
    <sui-grid-column>
      <h1>{{ capitalize(this.component) }}</h1>
    </sui-grid-column>
  </sui-grid>
</template>

<script>
import capitalize from 'lodash/capitalize';

export default {
  name: 'Example',
  props: {
    type: String,
    component: String,
  },
  methods: { capitalize },
};
</script>
