<template>
  <sui-segment class="masthead">
    <sui-container>
      <sui-menu floated="right">
        <sui-popup position="bottom center" content="View on GitHub">
          <a
            slot="trigger"
            is="sui-menu-item"
            icon="github"
            :href="githubLink"
          />
        </sui-popup>
        <sui-popup position="bottom center" content="View on Semantic UI">
          <a slot="trigger" is="sui-menu-item" icon="book" :href="suiLink" />
        </sui-popup>
      </sui-menu>
      <h1 is="sui-header">
        {{ title }}
        <sui-header-subheader sub>{{
          currentComponent.description
        }}</sui-header-subheader>
      </h1>

      <sui-menu :widths="2" class="component-head-menu">
        <router-link
          is="sui-menu-item"
          :active="!tab"
          :to="`/${type}/${componentName}`"
        >
          Definitions
        </router-link>
        <router-link
          is="sui-menu-item"
          :active="tab === 'api'"
          :to="`/${type}/${componentName}/api`"
        >
          API
        </router-link>
      </sui-menu>
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
    tab: String,
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
    suiLink() {
      return `https://semantic-ui.com/${this.type}/${this.componentName}.html`;
    },
    githubLink() {
      return `https://github.com/Semantic-UI-Vue/Semantic-UI-Vue/tree/master/src/${this.type}/${this.title}/${this.title}.jsx`;
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
  max-width: 960px !important;
  margin-right: 3em !important;
  margin-left: 3em !important;
  width: auto !important;
}

.component-head-menu {
  margin: 3rem 0rem 0rem !important;
}
</style>
