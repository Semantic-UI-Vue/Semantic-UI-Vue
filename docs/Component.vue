<template>
  <sui-grid :columns="one" padded>
    <sui-grid-column>
      <h1 is="sui-header">
        {{ capitalize(this.component) }}
        <sui-header-subheader>
          {{ this.componentOpts.description }}
        </sui-header-subheader>
      </h1>

      <sui-list class="space" horizontal link size="small">
        <sui-list-item>
          <sui-header color="grey" size="tiny"  />
        </sui-list-item>
      </sui-list>

      <sui-list class="docs-info" link size="small">
        <sui-list-item>
          <sui-list-icon name="github" />
          <sui-list-content>
            <code>src/elements/List/List.js</code>
          </sui-list-content>
        </sui-list-item>
      </sui-list>
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

<style scoped>
.space {
  display: block!important;
}

.docs-info {
  position: absolute!important;
  padding: 0.5em!important;
  margin: 0.5em!important;
  top: 0px!important;
  right: 0px!important;
  box-shadow: rgb(247, 247, 247) 0px 0px 1em 0.5em!important;
  background: rgb(247, 247, 247)!important;
}
</style>
