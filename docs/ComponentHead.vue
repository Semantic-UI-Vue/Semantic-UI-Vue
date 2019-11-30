<template>
  <sui-segment class="masthead">
    <sui-container>
      <sui-menu floated="right">
        <sui-popup position="bottom center" content="View component on GitHub">
          <a slot="trigger" is="sui-menu-item" icon="github" />
        </sui-popup>
        <sui-popup position="bottom center" content="View component on Semantic UI">
          <a slot="trigger" is="sui-menu-item" icon="book" />
        </sui-popup>
      </sui-menu>
      <h1 is="sui-header">
        {{title}}
        <sui-header-subheader sub>{{currentComponent.description}}</sui-header-subheader>
      </h1>
    </sui-container>
  </sui-segment>
</template>

<script>
import capitalize from 'lodash/capitalize';
import * as components from 'semantic-ui-vue';

const getComponentFromName = name => components[capitalize(name)];

export default {
  name: 'SuiComponent',
  props: {
    type: String,
    componentName: String,
  },
  data() {
    return {
      currentComponent: getComponentFromName(this.componentName),
    };
  },
  computed: {
    title() {
      return capitalize(this.componentName);
    },
  },
};
</script>

<style scoped>
.masthead {
  padding: 3em 0 4em;
  margin-bottom: 0 !important;
}

.masthead > .ui.container {
  margin-right: 3em !important;
  margin-left: 3em !important;
  width: auto !important;
}
</style>
